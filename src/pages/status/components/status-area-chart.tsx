import { useEffect, useState } from 'react'
import { AreaChart } from '@/components'
import { IChargingState, IChargingStateResponse } from '@/types'

export const StatusAreaChart = () => {
    const [rowData, setRowData] = useState<IChargingState[]>([])

    const data = rowData.map((item) => item.chargingLevel)
    const xLabels = rowData.map((item) =>
        new Date(item.date).toLocaleTimeString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        })
    )

    useEffect(() => {
        fetch('/backend-response.json')
            .then((response) => response.json())
            .then((jsonData) => setRowData((jsonData as IChargingStateResponse).chargingStates))
            .catch((error) => console.error('Error loading JSON:', error))
    }, [])

    return <AreaChart data={data} xLabels={xLabels} label="Battery Status" />
}
