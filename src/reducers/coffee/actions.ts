import { ICoffee } from "../../@types/Coffee";

export enum ActionTypes {
    LOAD_CART = 'LOAD_CART',
    INCREASE_CART = 'INCREASE_CART',
    DECREASE_CART = 'DECREASE_CART',
    SAVE_CART = 'SAVE_CART',
    ADD_CART_QUANTITY = 'ADD_CART_QUANTITY',
    REMOVE_CART_QUANTITY = 'REMOVE_CART_QUANTITY',
    DELETE_COFFEE = 'DELETE_COFFEE'
}

export function loadAllCart() {
    return {
         type: ActionTypes.LOAD_CART,
    }
}

export function increaseNewValueCart(id: string) {
    return {
        type: ActionTypes.INCREASE_CART,
        payload: {
            id
        }
    }
}

export function decreaseNewValueCart(id: string) {
    return {
        type: ActionTypes.DECREASE_CART,
        payload: {
            id
        }
    }
}

export function saveCart(coffee: ICoffee) {
    return {
        type: ActionTypes.SAVE_CART,
        payload: {
            coffee
        }
    };
}

export function addCartQuantity(id: string) {
    return {
        type: ActionTypes.ADD_CART_QUANTITY,
        payload: {
            id
        }
    };
}

export function removeCartQuantity(id: string) {
    return {
        type: ActionTypes.REMOVE_CART_QUANTITY,
        payload: {
            id
        }
    };
}

export function deleteCoffee(id: string) {
    return {
        type: ActionTypes.DELETE_COFFEE,
        payload: {
            id
        }
    };
}
