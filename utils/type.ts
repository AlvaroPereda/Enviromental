import { OptionalId } from "mongodb";

export type ItemsModel = OptionalId<{
    name: string
    price: number
}>

export type Items = {
    id: string
    name: string
    price: number
}