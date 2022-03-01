import {UserList} from "./components/user-list"
import {TodoList} from "./components/todo-list"

export const App = () => {
  
  return (
    <div>
      <div>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    </div>
  )
}