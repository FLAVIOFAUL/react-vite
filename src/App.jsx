import  { useState } from `react`;


import { v4 as uuid } from `uuid`;

import { Container, TodoList} from `./styles.js`;


function App() {

 const  [list, setList ] = useState([{id: uuid(), task: `Nada`}]);
 const  [inputTask,setInputTask ] = useState(``);
    
  function inputMudou(event){
  setInputTask(event.target.value)
 
   console.log(task)
  
}
function cliqueiNoBotao(){
 setList([ ...list,{id: uuid(), task: inputTask}])
}

  return (
    
      <Container>
        <input  onChange={inputMudou} placeholder="O que tenho pra fazer..." />
        <button onClick={cliqueiNoBotao}>Adicionar</button>

        <ul>

           {
              list.map( item => (
                   <li key= {item.id}>{item.task}</li>

              ) )

           }

        </ul>
      </Container>
     
  )
}

export default App
