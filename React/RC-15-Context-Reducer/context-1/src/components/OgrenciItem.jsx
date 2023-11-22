import React, { useContext } from "react";
import { StudentContext } from "../App";

const OgrenciItem = () => {
  const { student, changeColor } = useContext(StudentContext);
  return (
    <div>
      {student.map((i) => {
        return (
          <div style={{ background: i.color }}>
            <h3>NAME:{i.name} </h3>
            <h4>EMAIL:{i.email} </h4>
            <h4>AGE:{i.age} </h4>
            Color: <input type="text" value={i.color} onChange={(e)=>changeColor(i.id,e.target.value)}/>
          </div>
        );
      })}
    </div>
  );
};

export default OgrenciItem;
