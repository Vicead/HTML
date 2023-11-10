import React, { useState } from "react";
import { doctorData, hastaData } from "../helper/Data";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
const Home = () => {
  const [patients, setPatients] = useState(hastaData);
  const [docs, setDocs] = useState(doctorData);
  const [click, setClick] = useState(true);
  const docClick = (e) => {
    setClick(!click);
    setDocs(click ? docs.filter((i) => i.id === e) : doctorData);
  };
  return (
    <div style={{ display: click ? "block" : "flex" }}>
      <div>
        <header className="header">
          <h1>HOSPITAL</h1>
          <div className="dr">
            {docs.map((dr) => (
              <div key={dr.id}>
                <img
                  src={dr.doctorImg}
                  alt=""
                  width={180}
                  height={150}
                  className="btn"
                  style={{ backgroundColor: "aqua" }}
                  onClick={() => docClick(dr.id)}
                />
                <h4
                  style={{
                    backgroundColor: click ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${click ? "blue" : "green"}`,
                  }}
                >
                  {dr.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>
        {!click && (
          <HastaEkle
            patients={patients}
            setPatients={setPatients}
            docs={docs}
          />
        )}
      </div>
      <HastaListe patients={patients} setPatients={setPatients} docs={docs}/>
    </div>
  );
};

export default Home;
