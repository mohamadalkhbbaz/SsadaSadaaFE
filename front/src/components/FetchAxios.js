import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchAxios = () => {
    
  const [data,SetData] = useState([]);
  const [dataAxios,SetDataAxios] = useState([]);
  const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/posts',
            { 
                method:'GET',
            }).then((respons) =>respons.json())
            .then((data)=>SetData(data))};

    const axiosData = async() => 
    {
        const respons = await axios.get('https://jsonplaceholder.typicode.com/posts');
        SetDataAxios(respons);
    }


  useEffect(()=>{
        fetchData();
        axiosData();
        console.log(dataAxios);
  }  ,[])

  return (
    <div>FetchAxios
    <ul>
        {dataAxios.map((item)=> <li key={item.id}>{item.id +' > '+ item.title}</li> )}
    </ul>

    </div>
  )
}

export default FetchAxios