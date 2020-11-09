import React from 'react'
import http from "../../services/http";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";


function Shop(props) {

    console.log(props)


    let categories = useSelector(state => state.categories)
    
    if (categories.length === 0) {
        http.getShopCategories();
    }
    console.log(categories);



    const categoriesList = categories.map(aCategory => {
        console.log(aCategory)
        return (
    
        <div className="col-xs-12 col-xl-4" key={aCategory.id} onClick={() => props.history.push(`/category/${aCategory.slug}`)}>
            <div className="card-shop">
                <img src={aCategory.featuredAsset.source}/>
                <h3>{aCategory.name}</h3>
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

// giving Shop access to the React Router props - had to force it because for some reason it wasnt working alone with being a child of the Router and Switch statement - and we are not using hooks. If we used hooks we wouldnt need to use withRouter.
export default withRouter(Shop) 

