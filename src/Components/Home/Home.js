import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Home = () => {
    return (
        <div>
            <div class="card text-secondary border border-info border-2 rounded focus mt-5">
                {/* <img src="..." class="card-img" alt="..." /> */}
                <div class="p-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card h-auto mb-3 card-bg text-dark border border-info border-2 rounded focus">
                                <img src="" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="text-center">Product Name : Chips</h5>
                                    <div className="mt-3 d-flex">
                                        <h3 className="text-dark col-md-6">Product Price : </h3>
                                        <button type="button" className="btn btn-secondary col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div class="card h-auto mb-3 card-bg text-dark border border-info border-2 rounded focus">
                                {/* <img src={image} className="card-img-top img-fluid" alt="..." /> */}
                                <div className="card-body">
                                    <h5 className="text-center">Product Name : Cookies</h5>
                                    <div className="mt-3 d-flex">
                                        <h3 className="text-dark col-md-6">Product Price : </h3>
                                        <button type="button" className="btn btn-secondary col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card h-auto mb-3 card-bg text-dark border border-info border-2 rounded focus">
                                {/* <img src={image} className="card-img-top img-fluid" alt="..." /> */}
                                <div className="card-body">
                                    <h5 className="text-center">Product Name : Chocolate</h5>
                                    <div className="mt-3 d-flex">
                                        <h3 className="text-dark col-md-6">Product Price : </h3>
                                        <button type="button" className="btn btn-secondary col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>
                                    </div>

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