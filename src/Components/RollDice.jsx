
import styled from 'styled-components'

 export const RollDice = ({rolldice,CurrentDice}) => {


  return (
    <DiceContainer>
      <div className='dice' onClick={rolldice}>
        <img src={`/Images/Dices/dice_${CurrentDice}.png`} alt='dice 1'/>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}



export default RollDice

const DiceContainer = styled.div`
margin-top:48px;
    display:flex;
    flex-direction:column;
    align-items:center;
    .dice{
        cursor: pointer;
    }
    p{
        font-size:24px;
    }
`;