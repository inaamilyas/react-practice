import { useEffect, useState } from 'react'
import './App.css'
import ToDoTable from './components/ToDoTable'


function App() {
  const [todoTitle, setTodoTitle] = useState("")
  const [date, setDate] = useState("")
  const [allTodos, setAllTodos] = useState(new Array())

  function addTodoHandler(e) {
    console.log("submitting");
    e.preventDefault()
    let todoitem = {
      title: todoTitle,
      status: "Incomplete",
      date: date,
    }
    let newArr = [...allTodos];
    newArr.push(todoitem)
    console.log(newArr);
    setAllTodos(newArr)
    console.log(allTodos);
  }

  function handleDragover(e) {
    e.preventDefault()
    console.log("on drag over");
    console.log(e);
  }
  function handleDrop(e) {
    e.preventDefault()
    console.log("on drop");
    console.log(e.dataTransfer.files);
  }

  useEffect(function () {
    console.log("changes in all to dos");
  }, [allTodos, date])


  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };


  return (
    <>
      <h1>To Do App Using React</h1>
      <form onSubmit={addTodoHandler}>
        <label htmlFor="">Item</label>
        <input type="text" placeholder='Enter details about your todo' onChange={function (e) { setTodoTitle(e.target.value) }} />
        <input type="date" onChange={function (e) { setDate(e.target.value) }} />
        <button>Submit</button>
      </form>

      {/* <ToDoTable allTodos={allTodos}/> */}
      <div className="show-todo-container">
        <table>
          <thead>
            <tr><th>Sr No </th>
              <th>Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th></tr>
          </thead>

          <tbody>

            {allTodos && allTodos.map(function (todoItem, idx) {
              return (
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{todoItem.title}</td>
                  <td>{todoItem.status}</td>
                  <td>{todoItem.date}</td>
                  <td>
                    <button>Complete</button>
                    <button>Delete</button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>

      <div className="dragfile" style={{ width: "200px", height: "200px", backgroundColor: "red" }}
        onDragOver={handleDragover}
        onDrop={handleDrop}
      >
        <p>drag file here</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <select class="form-select form-select-lg mb-3 custom-select" aria-label="Large select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-4">
            <div>
              <ul>
                <li className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>Home</li>
                <li className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('about')}>About</li>
                <li className={activeItem === 'services' ? 'active' : ''} onClick={() => handleItemClick('services')}>Services</li>
                <li className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')}>Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div class="custom-select">
              <div class="selected-option">Open this select menu</div>
              <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-4 first-word">
            <p>This is the first line.</p>
            <p>Here is the second line.</p>
            <p>And this is the third line.</p>
            <button disabled={false ? true : false}>Title</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
