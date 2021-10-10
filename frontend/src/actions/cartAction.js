export const cartAction = (pizza,quantity,varient)=>async(dispatch,getState)=> {

    var cartItems={
        name:pizza.name,
        _id:pizza._id,
        image:pizza.image,
        varient:varient,
        quantity:Number(quantity),
        prices:pizza.prices,
        price:pizza.prices[0][varient]*quantity
    };

    if(cartItems.quantity>10){
        alert("You Can add max 10 Quantity of this pizza");
    }
    else if(cartItems.quantity<1){
        dispatch({type:'Delete_From_Cart',payload:cartItems});
    }
    else{
    dispatch({type:'Add_to_Cart',payload:cartItems});
    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
    }
}

export const deleteAction = (pizza)=>async(dispatch,getState)=> {
dispatch({type:'Delete_From_Cart',payload:pizza});
const cartItems = getState().cartReducer.cartItems;
localStorage.setItem('cartItems',JSON.stringify(cartItems));
}
