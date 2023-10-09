import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Board(){

  function GetPosition(index){
    return Square(index).property
  }
  return(
    <div className='board'>
      <div className='boardLine'>
        <Square index="0"></Square>
        <Square index="1"></Square>
        <Square index="2"></Square>
        <Square index="3"></Square>
        <Square index="4"></Square>
        <Square index="5"></Square>
        <Square index="6"></Square>
      </div>
      <div className='boardLine'>
        <RedStart index="7"></RedStart>
        <Square index="8"></Square>
        <Square index="9"></Square>
        <Square index="10"></Square>
        <Square index="11"></Square>
        <Square index="12"></Square>
        <BlueStart index="13"></BlueStart>
      </div>
      <div className='boardLine'>
        <RedStart index="14"></RedStart>
        <Square index="15"></Square>
        <EmpoweredSquare index="16"></EmpoweredSquare>
        <EmpoweredSquare index="17"></EmpoweredSquare>
        <EmpoweredSquare index="18"></EmpoweredSquare>
        <Square index="19"></Square>
        <BlueStart index="20"></BlueStart>
      </div>
      <div className='boardLine'>
        <RedStart index="21"></RedStart>
        <Square index="22"></Square>
        <EmpoweredSquare index="23"></EmpoweredSquare>
        <CoreSquare index="24"></CoreSquare>
        <EmpoweredSquare index="25"></EmpoweredSquare>
        <Square value="26"></Square>
        <BlueStart value="27"></BlueStart>
      </div>
      <div className='boardLine'>
        <RedStart index="28"></RedStart>
        <Square index="29"></Square>
        <EmpoweredSquare index="30"></EmpoweredSquare>
        <EmpoweredSquare index="31"></EmpoweredSquare>
        <EmpoweredSquare index="32"></EmpoweredSquare>
        <Square index="33"></Square>
        <BlueStart index="34"></BlueStart>
      </div>
      <div className='boardLine'>
        <RedStart index="35"></RedStart>
        <Square index="36"></Square>
        <Square index="37"></Square>
        <Square index="38"></Square>
        <Square index="39"></Square>
        <Square index="40"></Square>
        <BlueStart index="41"></BlueStart>
      </div>
      <div className='boardLine'>
        <Square index="42"></Square>
        <Square index="43"></Square>
        <Square index="44"></Square>
        <Square index="45"></Square>
        <Square index="46"></Square>
        <Square index="47"></Square>
        <Square index="48"></Square>
      </div>
    </div>
  )
}

function Square(value, type){
  return(
    <button className="square"></button>
    );
}
function RedStart(value, type){
  return(
    <button className="redStart"> <Token team='red'> </Token></button>
    );
}
function BlueStart(value, type){
  return(
      <button className="blueStart"> <Token team='blue'></Token> </button>
    );
}
function EmpoweredSquare(value, type){
  return(
    <button className="empoweredSquare"></button>
    );
}
function CoreSquare(value, type){
  return(
    <button className="coreSquare"></button>
    );
}
function Token(team){
  const[selected, setSelected] = useState(false);
  const[health, setHealth] = useState(2);

  function handleClick(){
    setSelected(true);
  }

  return(
    <button className="token" onClick={handleClick}></button>
    );
}
function Status() {
  const [status, setStatus] = useState('red')

  function handleClick(){
    if (status == 'red'){
      setStatus('blue');
    }
    else{
      setStatus('red');  
    }
  }
  return(
  <div>
  <p> {status} </p>
  <button onClick={handleClick}> Swap Turn</button>
  </div>
)
}
function Game(){

  const[redIsNext, setRedIsNext] = useState(true)
  const[tokenSelected, setSelected] = useState(false)

  function onTokenClick(red){
    if(redIsNext && red){
      this.selected=true;
      setSelected(!tokenSelected);
    }

  

  }
  function MoveToken(tokenToMove, squareToGo){

  }
  return(
    <div className='main'>
      <div>
        <Board></Board>
      </div>
      <div>
        <Status></Status>
      </div>
    </div>
  )
}

export default Game;
