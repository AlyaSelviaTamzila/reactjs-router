import React from 'react';

class Beranda extends React.Component{
    render(){
        return(
            <div>
                <div class = "jumbotroon text-center">
                    <h1>ADIWIYATA</h1>
                    <h3>Selamat Datang di Program Pendidikan Lingkungan Hidup</h3>
                </div>
                <div class = "container-fluid text-center">
                    <div class = "row content">
                        <div class = "col-sm-2 sidenav"></div>
                            <div class = "col-sm-8 text-left">
                                <h2>Apa itu Adiwiyata ???</h2>
                                <p><b>Adiwiyata</b> adalah upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan ilmu pengetahuan dan berbagai norma serta etika yang dapat menjadi dasar manusia menuju terciptanya kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Beranda;