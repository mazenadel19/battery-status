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

interface TFetchStatusSuccess {
    status: 'success'
    data: IChargingState[]
    error: null
}

interface TFetchStatusFailed {
    status: 'failed'
    data: never[]
    error: Error
}

export type TFetchState = TFetchStatusIdle | TFetchStatusLoading | TFetchStatusSuccess | TFetchStatusFailed
