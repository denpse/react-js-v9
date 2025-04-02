import React from "react";
import PropCompoent from "../components/prop-component";

const StateComponent = () => {
  const person = {
    name: "Lisa",
    age: 12,
    subject: "WMAD",
    grade: 9,
  };
  return (
    <div>
      <h1 className="text-center">Welcome to normal portfolio</h1>
      <PropCompoent
        name={person.name}
        grade={person.grade}
        subject={person.subject}
        age={person.age}
      />
    </div>
  );
};

export default StateComponent;
