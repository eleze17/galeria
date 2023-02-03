import path from 'path';
import fs from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next'

export async function getImagenes () {
const  directoryPath = './public'
let filearray:string[] =[]

try {
     const files = await fs.readdir(directoryPath);
     for (const file of files)
       filearray.push(file)
   } catch (err) {
     console.error(err);
   }
   return filearray
}

export default async  function handler(req: NextApiRequest, res: NextApiResponse) {
    
     switch ( req.method ) {
         case 'GET':
           
        let  file =  await getImagenes();
       
         res.status(200).json ({"data":file});

         break;
                 
        
         default:
             return res.status(400).json({message: 'Endpoint no existe'}) ;
     }
 }