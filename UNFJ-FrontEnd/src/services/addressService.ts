import { updateAddressType } from '../types/types';
import { api } from './api'

export const putAddress = (newAddress:updateAddressType) => {
    const url = "/address";

    return api.put(url, newAddress);
}