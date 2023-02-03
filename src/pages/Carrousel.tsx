
import { useEffect, useState } from "react";
import {apiGet} from '../apis/traeImagenes'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "./carrousel.css"
import type { NextPage } from "next";
import styles from '../app/page.module.css'
import "../app/globals.css" 
import "../app/form.css" 

const Carrousel: NextPage  =  ()  => {
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
        
      

  return (  <div className='principal'>
  
  <div className="form-group">
                       <label htmlFor="formFile" className="form-label mt-2">SUBI TUS FOTOS!</label>
                       <form action="../api/uploads" encType="multipart/form-data" method="POST"  >
                       <div className='form-group-input'>
                       <input className="form-control" type="file" id="formFile"name="archivos" multiple></input>
                       <input type="submit" className="btn btn-info" value="Enviar" ></input>
                       </div>
                       </form>
                     </div> 
 <div className={styles.imagenes} >

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
  

       
</Carousel>  
 
  </div>

</div>
  )
 
}

export default Carrousel
  