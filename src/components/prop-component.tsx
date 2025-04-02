import React from "react";

type personType = {
  name: string;
  age: number;
  grade: number;
  subject: string;
};

const PropCompoent = ({ name, age, grade, subject }: personType) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{grade}</h1>
      <h1>{subject}</h1>
    </div>
  );
};

export default PropCompoent;
