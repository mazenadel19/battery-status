import { IChargingStateResponse } from '@/types'

export const statusApi = {
    getStatus: async () => {
        const response = await fetch('/backend-response.json')
        return await (response.json() as Promise<IChargingStateResponse>)
    },
}
