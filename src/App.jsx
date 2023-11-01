import './App.css'
import Counter from '../Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
function App() {

  function handleClick(){
    alert ('hello')
  }

  return (
    <>
    
      <h3> React</h3>

    <Friends></Friends>

    <Users></Users>

    <Team></Team>

    <Counter></Counter>
    
      {/* <button onclick="handleClick">click me</button> for normal */} 
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me</button>
      <button onClick={()=>{alert('third click')}}>third click</button>
      <button onClick={()=>addToFive(3)}>Add to five</button>

    </>
  )
}

export default App
const handleClick2 =()=>{
  alert('button 2 have clicked')
}

const addToFive = (number) =>{
  alert(number + 5);
}
