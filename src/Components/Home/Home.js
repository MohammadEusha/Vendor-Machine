import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Chocolate from '../../Image/Chocolate.jpg'
import Milk from '../../Image/Milk.jpg'
import tang from '../../Image/Tang.jpg'

const Home = () => {
    return (
        <div>
            <div class="card text-secondary border border-info border-2 rounded focus mt-5">

                <div class="p-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card h-100 mb-3 card-bg text-dark border border-info border-2 rounded focus">
                                <div className="text-center">
                                    <img src={Chocolate} className="card-img-top img-fluid w-50 h-100 text-center" alt="..." />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="">Product Name : Chocolate</h5>
                                    <h5 className="text-dark">Product Price : 100 $</h5>
                                    <button type="button" className="btn btn-secondary col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>


                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div class="card h-100 mb-3 card-bg text-dark border border-info border-2 rounded focus">
                                <div className="text-center">
                                    <img src={Milk} className="card-img-top img-fluid w-50 h-100" alt="..." />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="">Product Name : Milk</h5>
                                    <h5 className="text-dark">Product Price : 200 $</h5>
                                    <button type="button" className="btn btn-secondary col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card h-100 mb-3 card-bg text-dark border border-info border-2 rounded focus">
                                <div className="text-center">
                                    <img src={tang} className="card-img-top img-fluid w-50 h-100" alt="..." />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="">Product Name : Tang</h5>
                                    <h5 className="text-dark">Product Price : 300$</h5>
                                    <button type="button" className="btn btn-secondary col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-md-6">
                    <div class="input-group mb-3 border border-info border-2 rounded">
                        <input type="text" class="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text" id="basic-addon2">Product Name</span>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="input-group mb-3 col-md-6 border border-info border-2 rounded">
                        <span class="input-group-text">$</span>
                        <input type="text" class="form-control" placeholder="Price" aria-label="Amount (to the nearest dollar)" />
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;