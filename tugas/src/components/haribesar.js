import React from 'react';

class HariBesar extends React.Component{
    render(){
        return(
            <div>
                <div class = "jumbotroon text-center">
                    <h1>ADIWIYATA</h1>
                    <h3>Peringatan Hari Besar Adiwiyata</h3>
                </div>
                
                <div class = "container">
                    <table class = "table table-striped" >
                        <thead>
                            <tr>
                                <td><b>Tanggal</b></td>
                                <td><b>Kegiatan</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <td>5 Juni</td>
                            <td>Hari Lingkungan Hidup Se Dunia</td>
                        </tbody>
                        <tbody>
                            <td>2 Februari</td>
                            <td>Hari Lahan Basah Se Dunia</td>
                        </tbody>
                        <tbody>
                            <td>21 Februari</td>
                            <td>Hari Peduli Sampah</td>
                        </tbody>
                        <tbody>
                            <td>17 Juni</td>
                            <td>Hari Penanggulangan Degradasi Lahan dan Kekeringan Se Dunia</td>
                        </tbody>
                        <tbody>
                            <td>10 Agustus</td>
                            <td>Hari Konservasi Alam Nasional</td>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default HariBesar;