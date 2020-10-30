import axios from 'axios';

import collectionQuery from './queries/get-collections'
import {addCategories} from '../redux/reducer'
import store from "../redux/store";



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
}

const http = new Http(store)

export default http;
