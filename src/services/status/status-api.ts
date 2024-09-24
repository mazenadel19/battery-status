import { IChargingStateResponse } from '@/types'

export const statusApi = {
    getStatus: () => {
        return fetch('/backend-response.json').then((response) => response.json() as Promise<IChargingStateResponse>)
    },
}
