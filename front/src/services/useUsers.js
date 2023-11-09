import { useQuery } from "react-query";
import {baseUrl} from '../consts'

const fetchData = async ()=>
{
    const response = await fetch(baseUrl+'users');
    return response.json();
}

const useUsers =() => ( useQuery('users',fetchData));
export default useUsers; 