import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Chocolate from '../../Image/Chocolate.jpg'
import Milk from '../../Image/Milk.jpg'
import tang from '../../Image/Tang.jpg'

const data = [
    {
        productName: 'Chocolate',
        price: 100,
        img: ''
    },
    {
        productName: 'Milk',
        price: 200,
        img: ''
    },
    {
        productName: 'Tang',
        price: 120,
        img: ''
    },
]

const Home = () => {
    const [userPrice, setUserPrice] = useState('');
    const [productName, setProductName] = useState('');
    console.log(userPrice);
    console.log(productName);

    const handleBuy = (e) => {
        console.log(e.target)
    }

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
                                    <div className='d-flex'>
                                        <h5>Product Name : </h5>
                                        <h5 className=""> Chocolate</h5>
                                    </div>
                                    <div className='d-flex'>
                                        <h5>Product Price: $</h5>
                                        <h5 className="">100</h5>
                                    </div>
                                    <button onClick={(e) => handleBuy(e)} type="button" className="btn btn-secondary col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card h-100 mb-3 card-bg text-dark border border-info border-2 rounded focus">
                                <div className="text-center">
                                    <img src={Milk} className="card-img-top img-fluid w-50 h-100" alt="..." />
                                </div>
                                <div className="card-body text-center">
                                    <div className='d-flex'>
                                        <h5>Product Name : </h5>
                                        <h5 className=""> Milk</h5>
                                    </div>
                                    <div className='d-flex'>
                                        <h5>Product Price: $</h5>
                                        <h5 className="">200</h5>
                                    </div>

                                    <button onClick={(e) => console.log('click')} type="button" className="btn btn-secondary col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card h-100 mb-3 card-bg text-dark border border-info border-2 rounded focus">
                                <div className="text-center">
                                    <img src={tang} className="card-img-top img-fluid w-50 h-100" alt="..." />
                                </div>
                                <div className="card-body text-center">
                                    <div className='d-flex'>
                                        <h5>Product Name : </h5>
                                        <h5 className=""> Tang</h5>
                                    </div>
                                    <div className='d-flex'>
                                        <h5>Product Price: $</h5>
                                        <h5 className="">300</h5>
                                    </div>

                                    <button onClick={(e) => console.log('click')} type="button" className="btn btn-secondary col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-md-6">
                    <div class="input-group mb-3 border border-info border-2 rounded">
                        <input onChange={(e) => setProductName(e.target.value)} type="text" class="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text" id="basic-addon2">Product Name</span>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="input-group mb-3 col-md-6 border border-info border-2 rounded">
                        <span class="input-group-text">$</span>
                        <input onChange={(e) => setUserPrice(e.target.value)} type="number" class="form-control" placeholder="Price" aria-label="Amount (to the nearest dollar)" />
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;