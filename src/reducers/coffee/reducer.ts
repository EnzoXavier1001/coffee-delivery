import { ICoffee } from "../../@types/Coffee";
import { ActionTypes } from "./actions";

export interface CoffeeState {
    coffeeList: ICoffee[]
    cart: ICoffee[] | []
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function coffeeReducer(state: CoffeeState, action: any) {
    switch(action.type) {
        case ActionTypes.LOAD_CART: {
            const storedCart = JSON.parse(localStorage.getItem('@CoffeeDelivery:cart')!) || [];
            return { ...state, cart: storedCart };
        }
        case ActionTypes.INCREASE_CART:
            {
                const updatedList = state.coffeeList.map(coffee => {
                    if (coffee.id === action.payload.id) {
                        const updatedCoffee = {
                            ...coffee,
                            quantity: ((coffee.quantity ?? 1) + 1)
                        };
                        return updatedCoffee;
                    }
                    return coffee;
                });

                return { ...state, coffeeList: updatedList };
            }
        case ActionTypes.DECREASE_CART:
            {
                const updatedList = state.coffeeList.map(coffee => {
                    if (coffee.id === action.payload.id && coffee.quantity! > 1) {
                            const updatedCoffee = {
                                ...coffee,
                                quantity: coffee.quantity! - 1
                            };
                            return updatedCoffee;
                    }
                    return coffee;
                });
                return { ...state, coffeeList: updatedList };
            }
            case ActionTypes.SAVE_CART: {
                const coffeeExistsInCart = state.cart.find(cartItem => cartItem.id === action.payload.coffee.id);
                if (coffeeExistsInCart) {
                    const newCart = state.cart.map(cartItem => {
                        if (cartItem.id === action.payload.coffee.id) {
                            const coffeeFromList = state.coffeeList.find(item => item.id === action.payload.coffee.id);
                            const newQuantity = coffeeFromList?.quantity;

                            if(newQuantity) {
                                return { ...cartItem, quantity: newQuantity };
                            } else {
                                return { ...cartItem, quantity: 1 };
                            }
                        }
                        return cartItem;
                    });
            
                    return { ...state, cart: newCart };
                } else {
                    return { ...state, cart: [...state.cart, { ...action.payload.coffee, quantity: action.payload.coffee.quantity ?? 1 }] };
                }
            }
            case ActionTypes.ADD_CART_QUANTITY: 
            {
                const newList = state.cart.map(item => {
                    if(item.id === action.payload.id) {
                        if(!item.quantity) {
                            return { ...item, quantity: 1}
                        } else {
                            return { ...item, quantity: item.quantity + 1}
                        }
                    }
                    return item
                })

                return {...state, cart: newList}
            }
            case ActionTypes.REMOVE_CART_QUANTITY: 
            {
                const newList = state.cart.map(item => {
                    if(item.id === action.payload.id) {
                        if(item.quantity! > 0) {
                            return { ...item, quantity: item.quantity! - 1}
                        }
                    }
                    return item
                })
        
                const filteredList = newList.filter((coffee => {
                    return coffee.quantity !== 0
                }))

                localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(filteredList))

                return {...state, cart: filteredList}
            }

            case ActionTypes.DELETE_COFFEE: 
            {
                const newList = state.cart.filter(item => {
                    return item.id !== action.payload.id
                })

                localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(newList))
                return {...state, cart: newList}
            }
            default:
                return state
        }
}