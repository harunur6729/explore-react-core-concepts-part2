import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert ('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num+5)

  }

  return (
    <>
      <h3>React core concepts 2</h3>
      <Friends/>
      <Users/>
      <Team/>
      <Counter/>
      
      <button onClick={handleClick}>Click me</button>

      <button onClick={ handleClick2}>click2</button>
     
     <button onClick={()=>{alert('third clicked')}}>third</button>
    {/* vajailla */}
     <button onClick={ () => addToFive(4)}>Four</button>
    </>
  )
}

export default App
