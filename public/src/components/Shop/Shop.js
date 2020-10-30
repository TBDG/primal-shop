import React from 'react';


function Shop() {

 

    return (
        <div>
             <div className="row">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-xl-4" key="" onClick="">
                            <div className="card-shop">
                                <img src="https://www.livefishdirect.com/images/category/mbuna(1).jpg"/>
                                <h3>This is a category of fish</h3>
                            </div> {/* End of Card */}
                        </div>
                        <div className="col-xs-12 col-xl-4" key="" onClick="">
                            <div className="card-shop">
                                <img src="https://www.livefishdirect.com/images/category/peacocks%202(1).jpg"/>
                                <h3>This is a category of fish</h3>
                            </div> {/* End of Card */}
                        </div>
                        <div className="col-xs-12 col-xl-4" key="" onClick="">
                            <div className="card-shop">
                                <img src="https://www.livefishdirect.com/images/category/haps(1).jpg"/>
                                <h3>This is a category of fish</h3>
                            </div> {/* End of Card */}
                        </div>

                    </div>{/* End of Row */}
                </div>
            </div>
        </div>
    )
}

export default Shop
