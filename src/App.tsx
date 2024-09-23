import { useEffect } from 'react'
// routes
import { AppRoutes } from './routes/app-routes'
// fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// constants
import { CONSTANTS } from './constants'

function App() {
    useEffect(() => {
        document.title = CONSTANTS.title
    }, [])

    return <AppRoutes />
}

export default App
