import React, { useState } from 'react'

function App() {
  const[userchoice, setuserchoice] = useState("")
  const[computerchoice, setcomputerchoice] = useState("")
  const[winner, setwinner] = useState("")
  

  const choicelist = [`ROCK`, `PAPER`, `SCISOR`]

  const startgame = (user)=>{
    setuserchoice(user)

    const randomNum = Math.floor(Math.random()*3)
    const localCompChoice = choicelist[randomNum]
    setcomputerchoice(localCompChoice)

    if(user==localCompChoice){
      setwinner("DRAW")
    }
    else if((user == "ROCK" && localCompChoice == "SCISOR") || (user == "PAPER" && localCompChoice == "ROCK") || (user == "SCISOR" && localCompChoice == "PAPER")){
      setwinner("USER")
    }
    else{
      setwinner("COMPUTER")
    }
    
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>CHOOSE :</div>
      <div className='flex gap-4'>
        <div onClick={()=>startgame("ROCK")}>ROCK</div>
        <div onClick={()=>startgame("PAPER")}>PAPER</div>
        <div onClick={()=>startgame("SCISOR")}>SCISOR</div>
      </div>
      <div>USER :{userchoice}</div>
      <div>CPMPUTER :{computerchoice}</div>
      <div>USER :{winner}</div>
    </div>
  )
}

export default App
