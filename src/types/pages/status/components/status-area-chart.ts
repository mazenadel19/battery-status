export interface IChargingState {
    date: string
    chargingLevel: number
    internalEventId: number
}

export interface IChargingStateResponse {
    chargingStates: IChargingState[]
}
