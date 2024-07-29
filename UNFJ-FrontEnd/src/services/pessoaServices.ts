import { api } from "./api";

export const getPessoa = (id:string) => {
    const url = "/students/" + id;

    return api.get(url);
}