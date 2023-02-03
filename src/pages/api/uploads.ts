import nextConnect from "next-connect";
import {  NextApiRequest, NextApiResponse } from 'next'
import { imagenes } from "@/apis/funciones";

 interface nameRequest extends NextApiRequest {
  originalname: string;
}
const apiRoute = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req: NextApiRequest, res:NextApiResponse) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
  });
const uploadMiddleware =  imagenes.array('archivos')
  
     apiRoute.post (uploadMiddleware,(req:Express.Request, res:NextApiResponse)=> {
   /* if (req.file?.originalname === undefined) {
        let respuesta = 'por favor cargar imagenes'
       res.send("cargar imagenes")
    }
    else*/
    res.redirect('../')}
)
    
       
    export const config = {
        api: {
          bodyParser:false,
            //sizeLimit: '5mb',
          },
      } 
    
     

export default apiRoute