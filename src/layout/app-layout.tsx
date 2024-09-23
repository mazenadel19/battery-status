// MUI
import { Box, Stack, Toolbar } from '@mui/material'
// React-Router
import { Outlet } from 'react-router-dom'
// Components
import { Header } from '@/components'
// Error Boundary
import ErrorBoundary from '@/pages/error-pages/error-boundary'

const AppLayout = () => (
    <Stack>
        <Header />
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <ErrorBoundary>
                <Outlet />
            </ErrorBoundary>
        </Box>
    </Stack>
)

export default AppLayout
