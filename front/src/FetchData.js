import React, { useEffect, useState } from "react";
import fetchData from "./fetch";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(data);
        setIsloading(false);
      } catch (err) {
        setError(err);
        setIsloading(false);
      }
    }
    or;
    //     declare the async data fetching function
    //     const fetchData = async () => {
    //     // get the data from the api
    //     const data = await fetch(`https://yourapi.com?param=${param}`);
    //     // convert the data to json
    //     const json = await response.json();
    //     // set state with the result

    getData();
  }, []);

  let resultComponent;
  if (isLoading) resultComponent = <div>Loading...</div>;
  else if (error) resultComponent = <div>ERROR : {error.message}</div>;
  else
    resultComponent = (
      <>
        <ul>
          {data.map((item) => (
            <>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.body}</li>
            </>
          ))}
        </ul>
      </>
    );

  return resultComponent;
};

export default FetchData;
