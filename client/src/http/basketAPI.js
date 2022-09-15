import {$host} from "./index";

export const fetchBasket = async (userId) => {
    const { data } = await $host.get('api/basket/' + userId, {params: {userId}})
    return data
}

export const update = async (basket) => {
    const { data } = await $host.post(`api/basket/update`, basket)
    return data
}
