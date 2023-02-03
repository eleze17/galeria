import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Grid, Card, Text } from "@nextui-org/react";
import "./form.css" 
import "./globals.css" 

import Carrousel from '../pages/Carrousel'

export default function Home() {
  return (
   <div className='principal'>
  
   <div className="form-group">
                        <label htmlFor="formFile" className="form-label mt-2">SUBI TUS FOTOS!</label>
                        <form action="./api/uploads" encType="multipart/form-data" method="POST" >
                        <div className='form-group-input'>
                        <input className="form-control" type="file" id="formFile"name="archivos" multiple></input>
                        <input type="submit" className="btn btn-info" value="Enviar" ></input>
                        </div>
                        </form>    
                      </div> 
  <div className={styles.imagenes} >
  <Carrousel></Carrousel>
 
   </div>
 
 </div>
  )
}

