import React, { useEffect, useState } from "react";

type userType = {
  userId: string;
  title: string;
  body: string;
  id: string;
};

const App = () => {
  const [datas, setData] = useState<userType[]>([]); //typescript from userType
  //we use this useEffect for fetching api or side effects
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Hello fetch api</h1>
      {datas.map((res) => {
        return (
          <div>
            <div>{res.title}</div>
            <div>{res.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
