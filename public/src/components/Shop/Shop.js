import React, {useState, useEffect} from 'react'
import http from "../../services/http";

function Shop() {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        http.getCategories()
        .then( (res) => setCategories(res.data) )
        .catch( (err) => console.log(err) )
    }, [])



    const categoriesList = categories.map(aCategory => {
        console.log(aCategory)
        return (
    
        <div className="col-xs-12 col-xl-4" key="" onClick="">
            <div className="card-shop">
                <img src={{}}/>
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
