"use client"
import { useEffect, useState } from "react";
import {apiGet} from '../apis/traeImagenes'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "./carrousel.css"


 const Carrousel  =  ()  => {
  const [imagenes, setimagenes] = useState([]);
  

      useEffect(() => {
        apiGet().then((res) => {
          
          setTimeout(() => {
            setimagenes(res.data)   
          }, 10000);
          });
        }, [imagenes]);
  
      const [index, setIndex] = useState(0);
      const handleSelect = (selectedIndex:number) => {
        setIndex(selectedIndex);
      };
        
      

  return (  
  
  <Carousel activeIndex={index} onSelect={handleSelect}> 
   {imagenes.map((img:string)=>(

  <Carousel.Item key={img} interval={2000} className="car-item">
    <div className="div_relative">
        <Image src =  {`/../public/${img}`} alt = "imagen" 
        priority
        fill
        sizes="(min-width: 66em) 33vw,
        (min-width: 44em) 50vw,
        100vw"
        className="imagenes"></Image>          
    </div>  
  </Carousel.Item>
  ))
          }   
  

       
</Carousel>  )
}

export default Carrousel