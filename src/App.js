import "./App.css";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import GrocieryLists from "./components/GrocieryLists";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import apiRequest from "./components/apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchItems = async()=>{
        try{
             const response = await fetch(API_URL);
             if(!response.ok) throw Error("Did not receive expected data!");
             const listItems = await response.json();
             setItems(listItems);
             setFetchError(null);
        }catch(err){
           setFetchError(err.message);
        }finally{
          setIsLoading(false);
        }
    }

    setTimeout(() => {
      fetchItems();
    }, 1000);

  }, []);

  const addItem = async(item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, item, checked: false };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);
    if(result)  setFetchError(result);

  };

  const handleCheck = async(id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myItem = listItems.filter(item => item.id === id);
    
    const url = `${API_URL}/${id}`;
    const updateOptions = {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked : myItem[0].checked} )
    }

    const result = await apiRequest(url, updateOptions);
    if(result) setFetchError(result);

  };

  const handleDelete = async(id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const url = `${API_URL}/${id}`;

    const deleteOptions = { method: 'DELETE'}
    
    const result = await apiRequest(url, deleteOptions);
    if(result) setFetchError(result);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <main className="app">
        <h2 className="title">Grocery Lists</h2>
        {/* <StateComp/> */}
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />

        <Search search={search} setSearch={setSearch} />
        <Footer length={items.length} />
        <section>
          {isLoading && <p>Loading Items...</p> }
          {fetchError && <p style={{color: 'red', fontSize: 19, margin:'1rem'}}>{`Error: ${fetchError}`}</p> }
          {!fetchError && !isLoading &&
        <GrocieryLists
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
 } 
</section>
      </main>
    </>
  );
}

export default App;
