"use client"
import Slider from "react-slick"
import awardFrame from "../../../../public/img/award-frame.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block",  borderRadius: '100px' }}
        onClick={onClick}
        ><i className="fa-solid fa-angle-left"></i></div>
    )
}
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block",  borderRadius: '100px' }}
        onClick={onClick}
        ><i className="fa-solid fa-angle-right"></i></div>
    )
}
export default function() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "grey",
            height: "3px",
            backgroundColor: "#333 !important",
            opacity: 0.5,
            marginLeft: "3px",
            marginRight: "3px"
          }}
        >
          
        </div>
    )
  };   
  return (
    <Slider {...settings}>
      <div className="card border-0 awardtxt">
          <Image src={awardFrame} className="card-img-top img-fluid" alt="AJSM" width={154} height={100}/>
            <div className="overlay-text"><span className="award-issuer">The Iconomics Indonesia's</span> <span>Popular Digital Products Awards 2023</span></div>
      </div>
      <div className="card border-0 awardtxt">
        <Image src={awardFrame} className="card-img-top img-fluid" alt="AJSM" width={154} height={100}/>
            <div className="overlay-text"><span className="award-issuer">Warta Ekonomi</span> <span>Indonesia CSR Awards 2023</span></div>
        </div>
        <div className="card border-0 awardtxt">
        <Image src={awardFrame} className="card-img-top img-fluid" alt="AJSM" width={154} height={100}/>
            <div className="overlay-text"><span className="award-issuer">Warta Ekonomi</span> <span>Indonesia Financial Top Leader Awards 2023</span></div>
        </div>
        <div className="card border-0 awardtxt">
        <Image src={awardFrame} className="card-img-top img-fluid" alt="AJSM" width={154} height={100}/>
            <div className="overlay-text"><span className="award-issuer">The Iconomics</span> <span>Indonesia Best CEO Awards 2023 Most Popular CEO</span></div>
        
        </div>
        <div className="card border-0 awardtxt">
            <Image src={awardFrame} className="card-img-top img-fluid" alt="AJSM" width={154} height={100}/>
                <div className="overlay-text"><span className="award-issuer">Majalah Investor</span> <span>Unit Link Awards 2023</span></div>
        </div>
        <div className="card border-0 awardtxt">
            <Image src={awardFrame} className="card-img-top img-fluid" alt="AJSM" width={154} height={100}/>
                <div className="overlay-text"><span className="award-issuer">Media Asuransi</span> <span>Unit Link Awards 2023</span></div>
        </div>
    </Slider>
  )
}