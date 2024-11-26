export interface ICreateChargeDTO {
    customer_id?: string
    customerCpf: string
    description: string
    chargeStatus: string
    chargeValue: number
    chargeDueDate: Date
}