import { useState } from 'react'
// MUI
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
// constants
import { CONSTANTS } from '@/constants'
// styles
import styles from './index.module.css'

const drawerWidth = 240
const navItems = [
    { text: 'Home', pathname: '/' },
    { text: 'Second Page', pathname: 'second-page' },
]

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {CONSTANTS.title}
            </Typography>
            <Divider />
            <List>
                {navItems.map(({ text, pathname }) => (
                    <NavLink
                        key={text}
                        to={pathname}
                        className={({ isActive }) =>
                            isActive ? `${styles.textDecorationNone} ${styles.active}` : styles.textDecorationNone
                        }
                    >
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Box>
    )

    const container = window !== undefined ? () => window.document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        {CONSTANTS.title}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map(({ text, pathname }) => (
                            <NavLink
                                key={text}
                                to={pathname}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.textDecorationNone} ${styles.active}`
                                        : styles.textDecorationNone
                                }
                            >
                                <Button sx={{ color: '#fff' }}>{text}</Button>
                            </NavLink>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}
