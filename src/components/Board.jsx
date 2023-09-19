import React, { useState } from 'react'
import Button from './Button'
import '../css/board.css'
const Board = () => {

  const [move,setMove] = useState(true);
  const [button,setButton] = useState(Array(9).fill(null));

  function handleClick(i) {
    if ( calculateWinner(button) ||button[i]) {
      return;
    }

    const nextButton = button.slice();
    
    if (move) {
      nextButton[i] = 'X';
    } else {
      nextButton[i] = 'O';
    }

    setButton(nextButton);
    setMove(!move);
    // alert('Clicked');
  }

  function calculateWinner(buttons) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
        return buttons[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(button);
  let message;
  if (winner) {
    message = winner + ' ' + 'Wins';    
  } 
  else {
    message = 'Next player: ' + (move ? 'X' : 'O');
  }

  return ( 
    <>
        <h1> Welcome To Tic Tac Toe</h1>
        <div className="row">
            <Button value={button[0]} onButtonClick = {() => handleClick(0)}/>
            <Button value={button[1]} onButtonClick = {() => handleClick(1)}/>
            <Button value={button[2]} onButtonClick = {() => handleClick(2)}/>
        </div>
        <div className="row">
            <Button value={button[3]} onButtonClick = {() => handleClick(3)}/>
            <Button value={button[4]} onButtonClick = {() => handleClick(4)}/>
            <Button value={button[5]} onButtonClick = {() => handleClick(5)}/>
        </div>
        <div className="row">
            <Button value={button[6]} onButtonClick = {() => handleClick(6)}/>
            <Button value={button[7]} onButtonClick = {() => handleClick(7)}/>
            <Button value={button[8]} onButtonClick = {() => handleClick(8)}/>
        </div>
        <h1> { message } </h1>
    </>
  )
}

export default Board