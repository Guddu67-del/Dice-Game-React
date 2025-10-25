import { NumberSelector } from "./NumberSelector";
import RollDice from "./RollDice";
import { TotalScore } from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

  const GamePlay = () => {
  const [Score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState("");
   const [showRules,setshowRules] = useState(false);

const generateRandomNumber =(min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const rolldice = () =>{
  if(!selectedNumber) {
    setError("You have not selected any Number")
    return;
  }
  


  setError("");
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);

    if (selectedNumber === randomNumber){
      setScore((prev)=>prev+randomNumber)
    }else{
       setScore((prev)=>prev-2)
    }
    setSelectedNumber(undefined);
}
 const resetScore = () => {
    setScore(0);
  };



  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={Score}/>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        CurrentDice={CurrentDice}
        rolldice={rolldice} />
        <div className="btns">
          <OutlineButton
          onClick={resetScore}
          >Reset</OutlineButton>
          <Button onClick={() => setshowRules(prev => !prev)}>
              {showRules ? "Hide" : "Show"} Rules
             </Button>

        </div>
    {showRules && <Rules />}
    </MainContainer>
  )
}


const MainContainer = styled.div`
padding-top:70px;
  .top_section{
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
  .btns{
    margin-top:40px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
  }
`

export default GamePlay;



