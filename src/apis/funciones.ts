import multer from 'multer'
import { NextApiRequest, NextApiResponse } from 'next'
import {file} from '../types/interfaces'

interface nameRequest extends Express.Request {
    originalname: string;
  }

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void


/* const  storage = multer.diskStorage({
    destination:  (req : NextApiRequest ,
                  file : Express.Multer.File, 
                  cb : DestinationCallback){
                            cb(null,'./public')
    },
    filename: function(req : nameRequest,file : file,cb : Function){
       
        req.originalname = file.originalname
        cb(null,file.fieldname + '-' + Date.now() + '.jpg')
       
        }
    })*/

    const storage = multer.diskStorage({
        destination: function (req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) {
         callback(null, './public');
     },
     filename: function (req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
      
     }
 });

export const  imagenes = multer({storage:storage})
 
