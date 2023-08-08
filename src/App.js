import './App.css';
import AddItem from './components/AddItem';
import Footer from './components/Footer';
import GrocieryLists from './components/GrocieryLists';
import { useState, useEffect } from 'react';
import Search from './components/Search';


function App() {
    
  const initialItems = JSON.parse(localStorage.getItem('shoppingList'));

const [items, setItems] = useState(initialItems || []);
const [newItem, setNewItem] = useState('');
const [search, setSearch] = useState('');

useEffect(()=>{
  localStorage.setItem('shoppingList', JSON.stringify(items));

}, [items])


const addItem = (item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, item, checked:false};
  const listItems = [...items, myNewItem];
  setItems(listItems);
}

const handleCheck = (id)=>{
    const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked}: item);
    setItems(listItems);

}

const handleDelete = (id)=>{
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  if(!newItem) return;
  addItem(newItem);
  setNewItem('');
 
}

  return (
    <>
    <main className='app'>
    <h2 className='title'>Grocery Lists</h2>
      {/* <StateComp/> */}
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />

      <Search 
        search={search}
        setSearch={setSearch}
        />
       <Footer length = {items.length} />
      <GrocieryLists
       items = {items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
       handleCheck = {handleCheck}
       handleDelete = {handleDelete}
       />
       
    </main>
    </>
  );
}

export default App;
