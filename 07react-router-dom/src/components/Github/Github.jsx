import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch("https://api.github.com/users/ritik2727")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("hello",data);
//         setData(data);
//       });
//   }, []);

  return (
    // <h1>heloo</h1>
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data?.followers}
      <img className="mx-auto" src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ritik2727");
  return response.json();
};
