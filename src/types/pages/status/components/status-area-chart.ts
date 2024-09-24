import { CONSTANTS } from '@/constants'

interface IChargingState {
    date: string
    chargingLevel: number
    internalEventId: number
}

export interface IChargingStateResponse {
    chargingStates: IChargingState[]
}

interface TFetchStatusIdle {
    status: typeof CONSTANTS.idle
    data: null
    error: null
}

interface TFetchStatusLoading {
    status: typeof CONSTANTS.loading
    data: null
    error: null
}

interface TFetchStatusSuccess<T> {
    status: typeof CONSTANTS.success
    data: T
    error: null
}

interface TFetchStatusFailed {
    status: typeof CONSTANTS.failed
    data: null
    error: Error
}

export type TFetchState<T> = TFetchStatusIdle | TFetchStatusLoading | TFetchStatusSuccess<T> | TFetchStatusFailed
