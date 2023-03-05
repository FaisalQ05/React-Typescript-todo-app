import Todo from "./components/Todo"
import TodoContext from "./context/TodoContext"

function App() {
  return (
    <>
      <TodoContext>
        <Todo />
      </TodoContext>
    </>
  )
}

export default App
