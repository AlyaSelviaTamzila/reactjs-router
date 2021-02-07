import React from 'react';
import Utama from './components/utama';
import { Link } from 'react-router-dom';

class App extends   React.Component {
  render(){
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Beranda</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
            < a class="nav-link" href="/tentangsaya">Tentang Saya <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/karya">Karya</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/kontak">Kontak</a>
            </li>
          </ul>
        </div>
      </nav>
      <p><Utama /></p>
      </div>
    )
  }
}

export default App;