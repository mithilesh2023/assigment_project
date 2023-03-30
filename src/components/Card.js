import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import {images} from './images'
// Import Swiper styles
import "swiper/css";
import "./styles.css";
import { Autoplay } from "swiper";
const Card = () => {
return (
<>
    {/* first row card start */}
    <div className="container mt-3">
        <div className='row'>
            <div className='col-6 rounded' style={{height:"50vh"}}>
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                    pagination={{ clickable: true, }} navigation={false} modules={[Autoplay]} className="mySwiper">
                    <SwiperSlide><img src={require('./images/img1.jpg')} /></SwiperSlide>
                    <SwiperSlide><img src={require('./images/img2.jpg')} /></SwiperSlide>
                    <SwiperSlide><img src={require('./images/img3.jpg')} /></SwiperSlide>
                    <SwiperSlide><img src={require('./images/img4.jpg')} /></SwiperSlide>
                    <SwiperSlide><img src={require('./images/img5.jpg')} /></SwiperSlide>
                    <SwiperSlide><img src={require('./images/img6.jpg')} /></SwiperSlide>
                    <SwiperSlide><img src={require('./images/img7.png')} /></SwiperSlide>
                    <SwiperSlide><img src={require('./images/img8.jpg')} /></SwiperSlide>
                </Swiper>
            </div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* first row card end */}
    {/* second row card start */}
    <div className="container">
        <div className="row mt-3">
            <div className="col-6">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* second row card end */}
    {/* Third row card start */}
    <div className="container mt-3">
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Third row card end */}
    {/* fourth row card start */}
    <div className="container mt-3">
        <div className="row">
            <div className="col-3 border">

            </div>

            <div className="col-9 border">
                <div className="d-flex justify-content-between py-2">
                        <h2>Projects</h2>
                        <input type="text"className="rounded-lg text-xl" placeholder='search...' />
                </div>
                <hr/>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    {/* fourth row card end */}

</>
)}

export default Card