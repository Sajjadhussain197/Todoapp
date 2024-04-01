import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [listText,setListText]=useState([]);
  const addlistitem=(inputText)=>{
    if(inputText!==''){
    setListText([...listText,inputText])
    }
  }
  const deleteitem=(key)=>{
    let newlist= [...listText];
    newlist.splice(key,1)
    setListText([...newlist])

  }
  return (
  //  <>
    <div className="main-container">

      <div className="center-container">
    <Input addlistitem={addlistitem}/>
      <h1 className='app-heading'>ToDo</h1>
      <hr />
      { listText.map((listitem,i)=>{
        return (  <TodoList key={i} index={i} item={listitem} delitem={deleteitem}/>
         ) })

      }
      </div>
    </div>
  //  </>
  );
}

export default App;
