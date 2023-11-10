import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const HastaListe = ({ patients, setPatients, docs }) => {
  return (
    <div>
      {patients.map((patient) => (
        <div>
          {docs.map(
            (a) =>
              a.doctorName === patient.myDoctor && (
                <div
                  className={
                    patient.isDone ? "trueBittiStil" : "falseBitmediStil"
                  }
                  onDoubleClick={() =>
                    setPatients(
                      patients.map((ptt) =>
                        ptt.id === patient.id
                          ? { ...ptt, isDone: !ptt.isDone }
                          : ptt
                      )
                    )
                  }
                >
                  <div>
                    <h2>{patient.text} </h2>
                    <h4>{patient.day} </h4>
                    <h3>{patient.myDoctor} </h3>
                  </div>
                  <FaTimesCircle
                    style={{ color: "red" }}
                    onClick={() =>
                      setPatients(patients.filter((a) => a.id !== patient.id))
                    }
                  />
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default HastaListe;
