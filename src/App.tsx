import React, { useEffect, useState } from "react";

const App = () => {
  const [datas, setData] = useState([]);

  //we use this useEffect for fetching api or side effects
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1 className="text-red-200">Hello fetch api</h1>
      {datas.map((res) => {
        return (
          <div className="bg-red-500">
            <div>{res.userId}</div>
            <div>{res.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
