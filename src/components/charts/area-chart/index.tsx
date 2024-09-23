import { useTheme } from '@mui/material'
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart'

interface IAreaChart {
    data: number[]
    xLabels: string[]
    label: string
}

export function AreaChart({ data, xLabels, label }: IAreaChart) {
    const theme = useTheme()

    return (
        <LineChart
            series={[{ data, label, area: true, showMark: true, color: theme.palette.primary.main }]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
                [`& .${lineElementClasses.root}`]: {
                    display: 'none',
                },
            }}
        />
    )
}
