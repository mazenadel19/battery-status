interface IChargingState {
    date: string
    chargingLevel: number
    internalEventId: number
}

export interface IChargingStateResponse {
    chargingStates: IChargingState[]
}

interface TFetchStatusIdle {
    status: 'idle'
    data: null
    error: null
}

interface TFetchStatusLoading {
    status: 'loading'
    data: null
    error: null
}

interface TFetchStatusSuccess<T> {
    status: 'success'
    data: T
    error: null
}

interface TFetchStatusFailed {
    status: 'failed'
    data: null
    error: Error
}

export type TFetchState<T> = TFetchStatusIdle | TFetchStatusLoading | TFetchStatusSuccess<T> | TFetchStatusFailed
