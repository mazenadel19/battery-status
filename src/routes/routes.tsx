// react
import { lazy } from 'react'
// router
import type { RouteObject } from 'react-router-dom'
// layout
import AppLayout from '@/layout/app-layout'
// pages
const Error = lazy(() => import('@/pages/error-pages/error'))
const Home = lazy(() => import('@/pages/home'))
const Status = lazy(() => import('@/pages/status'))
const NoMatch = lazy(() => import('@/pages/error-pages/not-match'))

export const Routes = [
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'status', element: <Status /> },
            { path: '*', element: <NoMatch /> },
        ],
    },
] satisfies RouteObject[]
