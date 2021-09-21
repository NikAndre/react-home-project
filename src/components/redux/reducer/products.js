import { normalizedProducts } from "../../../fixtures";

const defaultProducts =  normalizedProducts.reduce((accum , product)=>{
    accum[product.id] = product
    return accum
},{})

console.log(defaultProducts)

export default (products = defaultProducts,action) => {
    const {type} = action
    console.log(products)
    switch (type){
        default
        : return products
    }
}