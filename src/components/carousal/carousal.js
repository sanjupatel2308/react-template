function Carousal()
 {
    return <> <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <div className="single-slider pt-125 pb-130 bg-img ban" >
       
                    <div className="row ">
                        <div className="col-lg-5 ">
                            <div className="slider-content slider-animated-1 text-center ">
                                <h1>Huge Sale</h1>
                                <h2>Pushtakalaya</h2>
                                <h3>Now starting at Rs 99.00</h3>
                                <a href="# ">Shop now</a>
                            </div>
                        </div>
                    </div>
                    </div>
            
      </div>
      <div className="carousel-item">
      <div className="single-slider slider-h1-2 pt-215 pb-100 bg-img  ban1" >
       
        <div className="container ">
                    <div className="slider-content slider-content-2 slider-animated-1 ">
                        <h1>We can help get your</h1>
                        <h2>Books in Order</h2>
                        <a href="# ">Contact Us Today!</a>
                    </div>
                </div>
                </div>

      </div>
      <div className="carousel-item">
        <img className="d-block w-100" style={{height:"400px"}} src="https://www.mypustak.com/_next/image?url=https%3A%2F%2Fd239pyg5al708u.cloudfront.net%2Fuploads%2Fhomebanner%2FHOME_1_2_79.webp&w=3840&q=75" alt="First slide"/>

        {/* <img className="d-block w-100" style={{height:"400px"}} src="" alt="Third slide" /> */}
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
    </>
} 


export default Carousal;