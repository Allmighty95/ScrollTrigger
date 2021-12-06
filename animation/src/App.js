import React, { useEffect } from "react";
import styled from "styled-components";
import { animation } from "./anmScripts/animationScripts";
import "./App.css";
//CAJA
const App = () => {
  useEffect(() => {
    animation();
  }, []);

  const Boxes = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    .box {
      width: 150px;
      height: 400px;
    }

    .box1 {
      background-color: #ffaaaa;
    }

    .box2 {
      background-color: #d46a6a;
    }

    .box3 {
      background-color: #801515;
    }

    .box4 {
      background-color: #550000;
    }
  `;
  //VISTA DE LA CAJA
  return (
    <div className="App">
      <Boxes>
        <div className="box box1">
          <h1> Box 1 </h1>{" "}
        </div>{" "}
      </Boxes>{" "}
    </div>
  );
};
export default App;
