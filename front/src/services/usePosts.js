import {useQuery} from 'react-query';
import {baseUrl, authToken } from '../consts'

const fetchData = async (endpoint) =>
{
    const response = await fetch( baseUrl + endpoint,{
        method: 'Get',
        headers : {
            'Content-Type' : 'application-',
            'Authorization' : `Bearer ${authToken}`
        }
    });
    return response.json(); 
}
 
const usePosts = (endpoint)=>{
    return useQuery( endpoint,() => fetchData(endpoint));
}

export default usePosts;