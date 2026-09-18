const initialState = {
    cart: [],
    totalPrice: 0,
    cartId: null,
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CART": { // <--- Note the added curly braces to create a block scope
            const productToAdd = action.payload;
            let updatedCart; // We'll store our new array here

            const existingProduct = state.cart.find(
                (item) => item.productId === productToAdd.productId
            );

            if(existingProduct){
                // Update existing item
                updatedCart = state.cart.map((item) => {
                    if(item.productId === productToAdd.productId){
                        return productToAdd; 
                    }
                    return item;
                });
            } else {
                // Add new item
                updatedCart = [...state.cart, productToAdd];
            }

            // Calculate the new total price based on the updated cart
            // (Using Number() to be safe, just like you did in your component!)
            const calculatedTotal = updatedCart.reduce((total, item) => {
                const itemPrice = Number(item.price) || 0; 
                const itemQuantity = Number(item.quantity) || 0;
                return total + (itemPrice * itemQuantity);
            }, 0);

            // Return the full state object, updating both cart and totalPrice
            return {
                ...state,
                cart: updatedCart,
                totalPrice: calculatedTotal,
            };
        }

        case "REMOVE_CART": {
            return{
                ...state,
                cart: state.cart.filter(
                    (item) =>  item.productId !== action.payload.productId
                ),
            }
        };
        
        case "GET_USER_CART_PRODUCTS" :{
            return {
                ...state,
                cart: action.payload,
                totalPrice: action.totalPrice,
                cartId: action.cartId,
            }
        }

        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
                totalPrice: 0,
                cartId: null,
            };
        
        default:
            return state; 
    }
}