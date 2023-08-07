import './App.css';
import AddItem from './components/AddItem';
import Footer from './components/Footer';
import GrocieryLists from './components/GrocieryLists';
import { useState } from 'react';


function App() {
    
  let initialItems = [
    {
        id:1,
        item: "item-1",
        checked: false
    },
    {
        id:2,
        item: "item-2",
        checked:false
    },
    {
        id:3,
        item: "item-3",
        checked: true
    }
]

const [items, setItems] = useState(initialItems);
const [newItem, setNewItem] = useState('');

const setAndSaveItems = (newItems)=>{
  setItems(newItems);
  localStorage.setItem('shoppingList', JSON.stringify(newItems));
}

const addItem = (item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, item, checked:false};
  const listItems = [...items, myNewItem];
  setAndSaveItems(listItems);
}

const handleCheck = (id)=>{
    const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked}: item);
    setAndSaveItems(listItems);

}

const handleDelete = (id)=>{
    const listItems = items.filter((item)=> item.id !== id);
    setAndSaveItems(listItems);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  if(!newItem) return;
  console.log(newItem);
  addItem(newItem);
  setNewItem('');
 
}

  return (
    <>
    <main className='app'>
    <h2>Grocery Lists</h2>
      {/* <StateComp/> */}
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <GrocieryLists
       title={"Grocery Lists"}
       items = {items}
       handleCheck = {handleCheck}
       handleDelete = {handleDelete}
       />
       <Footer length = {items.length} />
    </main>
    </>
  );
}

export default App;
