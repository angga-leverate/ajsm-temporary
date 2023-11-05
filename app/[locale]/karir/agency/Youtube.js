"use client"
import Slider from "react-slick"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useYoutube } from "../usecases/youtube";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
  const getIDfromURL = (url)=>{
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    }

    console.log('The supplied URL is not a valid youtube URL');

    return '';
  }
  const {loadYoutubeList, youtubeList, setCurrentVideo, currentVideo} = useYoutube()

  const [isDialogOpen, setDialogOpen] = useState()
  useEffect(()=>{
    loadYoutubeList()
  },[])
  return (
    <>
    <Slider {...settings}>
      {
        youtubeList && youtubeList.map((value, index)=>(
          <div className="card border-0 p-3" key={index}>

            <Image onClick={()=>{
              setCurrentVideo(getIDfromURL(value.link))
              setDialogOpen(true)
            }}
            style={{cursor: 'pointer'}}
            src={`https://img.youtube.com/vi/${getIDfromURL(value.link)}/mqdefault.jpg`}
            className="card-img-top img-fluid" alt="AJSM" width={154} height={100}/>
            <div className="pt-3 px-3 pb-0 d-flex" style={{"textAlign": "left"}}><p className=" d-inline">{value.title}</p></div>

          </div>
        ))
      }
    </Slider>
    <Modal isOpen={isDialogOpen} toggle={() => setDialogOpen(false)} size="xl">
      <ModalBody>
      <div className="video-responsive">
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
      </div>
      </ModalBody>
    </Modal>
    </>
  )
}
