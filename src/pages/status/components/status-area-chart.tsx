import { AreaChart } from '@/components'
import { statusApi } from '@/services'
import { IChargingState, TFetchState } from '@/types'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const StatusAreaChart = () => {
    const [fetchState, setFetchState] = useState<TFetchState<IChargingState[]>>({
        status: 'idle',
        data: [],
        error: null,
    })
    const data = fetchState.data.map((item) => item.chargingLevel)
    const xLabels = fetchState.data.map((item) =>
        new Date(item.date).toLocaleTimeString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        })
    )

    useEffect(() => {
        setFetchState((prev) => ({ ...prev, status: 'loading', data: [], error: null }))
        const fetchData = async () => {
            try {
                const jsonData = await statusApi.getStatus()
                setFetchState((prev) => ({
                    ...prev,
                    status: 'success',
                    data: jsonData.chargingStates,
                    error: null,
                }))
            } catch (error) {
                if (error instanceof Error) {
                    setFetchState((prev) => ({
                        ...prev,
                        status: 'failed',
                        error,
                        data: [],
                    }))
                }
            }
        }
        void fetchData()
    }, [])

    switch (fetchState.status) {
        case 'idle':
            return (
                <Box>
                    <Typography fontSize={16} fontWeight="medium" color="textSecondary" padding={2}>
                        No data yet...
                    </Typography>
                </Box>
            )
        case 'loading':
            return (
                <Box>
                    <Typography fontSize={16} fontWeight="medium" color="textSecondary" padding={2}>
                        Loading...
                    </Typography>
                </Box>
            )
        case 'success':
            return <AreaChart data={data} xLabels={xLabels} label="Battery Status" />
        case 'failed':
            return (
                <Box>
                    <Typography fontSize={16} fontWeight="medium" color="error" padding={2}>
                        Error: {fetchState.error.message}
                    </Typography>
                </Box>
            )
        default:
            return (
                <Box>
                    <Typography>Unknown status...</Typography>
                </Box>
            )
    }
}
