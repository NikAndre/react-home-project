import { normalizedProducts } from "../../../fixtures";

const defaultProducts =  normalizedProducts.reduce((accum , product)=>{
    accum[product.id] = product
    return accum
},{})

export default (products = defaultProducts,action) => {
    const {type} = action
    switch (type){
        default
        : return products
    }
}