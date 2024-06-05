import { useState } from 'react';

import { v4 as uuid } from 'uuid';



import { Container, ToDolist, Input, Button, ListItem, Trash, Transit } from './styles.js';


function App() {

   const [list, setList] = useState([]);
   const [inputTask, setInputTask] = useState('');

   function inputMudou(event) {
      setInputTask(event.target.value)

      console.log(task)

   }
   function cliqueiNoBotao() {
      if (inputTask) {
         setList([...list, { id: uuid(), task: inputTask, finished: false }])
      }
      function finalizarTarefa(id) {

         const newList = list.map(item => (
            item.id === id ? { ...item, finished: !item.finished } : item

         ))

         setList(newList)

      }

      function deletarItem(id) {
         const newlist = list.filter(item => item.id !== id)

         setList(newlist)


      }


   }

   return (

      <Container>
         <ToDolist>
            <Input onChange={inputMudou} placeholder="O que tenho pra fazer..." />
            <Button onClick={cliqueiNoBotao}>Adicionar</Button>

            <ul>

               {
                  list.length > 0 ? (
                     list.map(item => (
                        < ListItem isFinished={item.finished} key={item.id} >
                           < Transit onClick={() => finalizarTarefa(item.id)} />
                           <li>{item.task}</li>
                           <Trash onClick={() => deletarItem(item.id)} />
                        </ListItem>
                     ))
                  ) : (
                     <h3>Não há itens na lista</h3>
                  )
               }

            </ul>
         </ToDolist>
      </Container>

   )
}

export default App
