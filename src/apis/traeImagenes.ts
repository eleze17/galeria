import axios from 'axios';


const apis = axios.create({
    baseURL: '/api'
})



export async function apiGet() {

    const {data}  = await apis.get('/getImagenes');
  	
    console.log(data)
    		
	return (data)
}
