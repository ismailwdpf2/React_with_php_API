import React from 'react'
import './Home.css'
import pic from '../../assets/img/slide (2).jpg'
import pic1 from '../../assets/img/carosol (1).jpg'
import pic2 from '../../assets/img/slide (3).jpg'
import pic3 from '../../assets/img/slide (4).jpg'
import pic4 from '../../assets/img/image (2).jpeg'
import pic5 from '../../assets/img/image (3).jpeg'
import pic6 from '../../assets/img/Afridi (1).jpg'
import pic7 from '../../assets/img/image (4).jpg'
import pic8 from '../../assets/img/slide (4).jpg'
import pic9 from '../../assets/img/slide (3).jpg'
import pic10 from '../../assets/img/slide (2).jpg'
import pic11 from '../../assets/img/slide (1).jpg'
function Home() {
  
  return (
    <div>
     <div class="container">
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={pic} class="d-block cpic" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={pic1} class="d-block cpic" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={pic2} class="d-block cpic" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={pic3} class="d-block cpic" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<br/>
<div class="row">
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic7} alt=""/>
    <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic4} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic5} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic1} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>

  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic7} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic8} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic9} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic10} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic11} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic1} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>

  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic2} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic4} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic3} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic6} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic5} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic10} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic11} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
  <div class="col-4">
    <div class="card2">
      <img class="card-img-top" src={pic7} alt=""/>
      <span>Demu picture</span>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home