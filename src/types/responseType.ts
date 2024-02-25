import {AxiosResponse} from "axios";


type IRes<T> = Promise<AxiosResponse<any>>

export type {IRes}