export interface IChargingState {
    date: string
    chargingLevel: number
    internalEventId: number
}

export interface IChargingStateResponse {
    chargingStates: IChargingState[]
}

interface TFetchStatusIdle {
    status: 'idle'
    data: never[]
    error: null
}

interface TFetchStatusLoading {
    status: 'loading'
    data: never[]
    error: null
}

interface TFetchStatusSuccess<T> {
    status: 'success'
    data: T
    error: null
}

interface TFetchStatusFailed {
    status: 'failed'
    data: never[]
    error: Error
}

export type TFetchState<T> = TFetchStatusIdle | TFetchStatusLoading | TFetchStatusSuccess<T> | TFetchStatusFailed
