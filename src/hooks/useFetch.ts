import { TFetchState } from '@/types'
import { useEffect, useState } from 'react'

export const useFetch = <T>(api: () => Promise<T>) => {
    const [fetchState, setFetchState] = useState<TFetchState<T>>({
        status: 'idle',
        data: null,
        error: null,
    })

    useEffect(() => {
        setFetchState((prev) => ({ ...prev, status: 'loading', data: null, error: null }))
        const fetchData = async () => {
            try {
                const jsonData = await api()
                setFetchState((prev) => ({
                    ...prev,
                    status: 'success',
                    data: jsonData,
                    error: null,
                }))
            } catch (error) {
                if (error instanceof Error) {
                    setFetchState((prev) => ({
                        ...prev,
                        status: 'failed',
                        error,
                        data: null,
                    }))
                }
            }
        }
        void fetchData()
    }, [api])

    return fetchState
}
