import { useQuery } from "react-query";
import baseUrl from "../consts";

const fetchData = async (t) => {
    const response = await fetch(baseUrl + t);
    return response.json();
} 

const useGeneric = ( t ) =>{
     return useQuery(t, () => fetchData(t));
}
export default useGeneric;