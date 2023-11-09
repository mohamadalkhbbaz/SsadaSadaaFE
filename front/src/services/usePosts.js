import {useQuery} from 'react-query';
import consts from '../consts'

const fetchData = async (endpoint) =>
{
    const response = await fetch(consts+endpoint);
    return response.json(); 
}
 
const usePosts = (endpoint)=>{
    return useQuery( endpoint,() => fetchData(endpoint));
}

export default usePosts;