import axios from 'axios';
import {addCategories} from '../redux/reducer';
import {addProducts} from '../redux/reducer';
import store from "../redux/store";

import collectionQuery from './queries/get-collections'
import getProductByCategorySlugQuery from './queries/get-product-by-category-slug'


class Http {
    constructor(store) {
        this.store = store
    }

    async request(query) {
        return (await axios.post('http://localhost:3000/shop-api', {query})).data
    }

    async getShopCategories() {
        this.request(collectionQuery).then((result) => {
            let categories = result.data.collections.items
            this.store.dispatch(addCategories(categories))
        })
    }
    
    massageProductData(data){

        // data.collection.productVarients then loop over all the products returning the products
    
        // get the product varients
        const productVariants = data.data.collection.productVariants.items;
    
    
        // get the products (duplicates can still occur)
        const duplicateProducts = productVariants.map((eachItem) => {
            
            return eachItem.product;
        })
    
    
        //create a new array to push to - for our uniqueProducts
        const uniqueProducts= [];
    
        // loop through our duplicatesObjects array
        for (let i=0; i < duplicateProducts.length; i++){
    
            //create a varibale to store the current Products' index (0, then 1, 2, 3)
            const item = duplicateProducts[i];
    
            //if our unique objects array does NOT include an object with an id that matches our current id, push to the unique array. (creating an array of only unique products)
            if (!uniqueProducts.some(element => element.id === item.id)){
                uniqueProducts.push(item)
            }
    
        }
    
        return uniqueProducts
    
    }

    async getProductsByCategorySlug(slug) {
        let query = getProductByCategorySlugQuery.replace('{slug}', slug)
        console.log ('query', query)
        let responseData = await this.request(query)
        let products = this.massageProductData(responseData)
        this.store.dispatch(addProducts(products))

    }
}

const http = new Http(store)

export default http;