import React, { useState } from "react";

const HastaEkle = ({ patients, setPatients, docs }) => {
  const [patientName, setName] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setPatients([
      ...patients,
      {
        id: 7,
        text: patientName,
        day: date,
        isDone: false,
        myDoctor: docs[0].doctorName,
      },
    ]);
    setName("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Patient Information</label>
          <input
            type="text"
            id="text"
            onChange={(e) => setName(e.target.value)}
            value={patientName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            type="datetime-local"
            id="day"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div>
          <button className="dok" type="submit">
            Make an Appointment for{" "}
            <span style={{ color: "#6a0707" }}>{docs[0].doctorName}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default HastaEkle;
