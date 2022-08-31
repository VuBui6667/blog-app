import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosClient from "./axiosClient";

interface INote {
    userId?: string,
    id?: string,
    title?: string,
    body?: string
}

const NotesAPI = {
    post: (data: INote) => {
        const url='/page'
        return axiosClient.post(url, data)
    },
    getAll: ()  : Promise<AxiosResponse<any, any>> => {
        const url= '/page'
        return axiosClient.get(url)
    },
    get: (id: any) => {
        const url = `/page?id=${id}`
        return axiosClient.get(url)
    },
    put: (id: number, data: INote) => {
        const url= `/page/${id}`
        return axiosClient.put(url, data)
    },
    delete: (id: any) => {
        const url = `/page/${id}`
        return axiosClient.delete(url)
    }
}

export default NotesAPI