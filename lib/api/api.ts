import axios, { AxiosError } from 'axios';
export type ApiError = AxiosError<{erro:string}>;

export const nextServer = axios.create({
  baseURL: 'https://notehub-api.goit.study',
  withCredentials: true,
});
