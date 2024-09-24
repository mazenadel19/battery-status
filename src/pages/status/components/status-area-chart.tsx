import { AreaChart } from '@/components'
import { useFetch } from '@/hooks/useFetch'
import { statusApi } from '@/services'
import { IChargingStateResponse } from '@/types'
import { Box, Typography } from '@mui/material'

export const StatusAreaChart = () => {
    const fetchState = useFetch<IChargingStateResponse>(statusApi.getStatus)

    const data = fetchState.data?.chargingStates?.map((item) => item.chargingLevel) ?? []
    const xLabels =
        fetchState.data?.chargingStates?.map((item) =>
            new Date(item.date).toLocaleTimeString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            })
        ) ?? []

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
