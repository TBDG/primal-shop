import React, {useState, useEffect} from 'react'
import http from "../../services/http";
import {useSelector} from "react-redux";


function Shop() {

    
    let categories = useSelector(state => state.categories)
    
    if (categories.length === 0) {
        http.getShopCategories();
    }
    console.log(categories);



    const categoriesList = categories.map(aCategory => {
        console.log(aCategory)
        return (
    
        <div className="col-xs-12 col-xl-4" key="" onClick="">
            <div className="card-shop">
                <img src=""/>
                <h3>This is a category of fish</h3>
            </div> {/* End of Card */}
        </div>
             
        
        )
      }) 


    return (
        <div>
             <div className="row">
                <div className="container">
                    <div className="row">

                       {categoriesList}

                    </div>{/* End of Row */}
                </div>
            </div>
        </div>
    )
}

export default Shop
