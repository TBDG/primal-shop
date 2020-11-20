import React, {useEffect, useState} from 'react'
import http from "../../services/http";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import Loader from "react-loader-spinner";
import Spinner from "../Spinner/Spinner"


function Category(props) {


    let products = useSelector(state => state.products)
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        http.getProductsByCategorySlug(props.match.params.slug).then();
         setTimeout(() => {
            setLoaded(true)
         }, 1000)
    }, [props.match.params.slug])
    
    
    // if (products.length === 0) {
    //     http.getProductsByCategorySlug(props.match.params.slug);
    // }
    console.log('products', products);



    const productsList = products.map(aProduct => {
        console.log('each product', aProduct)
        return (
    
        <div className="col-xs-12 col-xl-4" key={aProduct.id}>
            <div className="card-category">
                <img src={aProduct.featuredAsset.source}/>
                <h3>{aProduct.name}</h3>
                <p>Italisized Latin Name</p>
                                <h4>Status In Stock</h4>
                                <table>
                                    <tr className="head">
                                        <td>Size</td>
                                        <td>Male</td>
                                        <td>Female</td>
                                        <td>Unsexed</td>
                                    </tr>
                                    <tr>
                                        <td>Juvenile</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Premium</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Young Adult</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Adult</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                                <button>Buy Now</button>
            </div> {/* End of Card */}
        </div>
             
        
        )
      }) 


    return (
        <div>
            
             <div className="row">
                <div className="container">
                    <div className="row">

                        {productsList}

                    </div>{/* End of Row */}
                </div>
            </div>

            <Spinner loaded={loaded} />

        </div>
    )
}

export default Category
