import FetchTodo from "./components/FetchTodo"
import { Suspense } from "react"

const App = () => {
  return (
    // <div>
    <Suspense>
      <FetchTodo />
    </Suspense>
    // </div>
  )
}

export default App