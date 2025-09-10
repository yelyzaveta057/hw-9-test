import axios, { AxiosError } from 'axios';
export type ApiError = AxiosError<{erro:string}>;


export const nextServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  withCredentials: true,
})