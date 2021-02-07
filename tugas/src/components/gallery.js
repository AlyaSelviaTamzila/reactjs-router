import React from 'react';
import './galeri.css'

class Gallery extends React.Component{
    render(){
        return(
            <div>
                <div class = "jumbotroon text-center">
                    <h1>ADIWIYATA</h1>
                    <h3>Gallery Program Adiwiyata</h3>
                </div>
                <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/1.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Lingkungan Hidup Se Dunia</h3>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/2.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Lahan Basah Se Dunia</h3>
                                        </div>
                                </div>
                            </div>
                

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/3.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Peduli Sampah</h3>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/4.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Penanggulangan Degradasi Lahan dan Kekeringan Se Dunia</h3>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/5.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Hari Konservasi Alam Nasional</h3>
                                        </div>
                                </div>
                            </div>  
                        </div>
                </div>
            </div>
        )
    }
}
export default Gallery;