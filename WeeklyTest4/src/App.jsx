
import './App.css'
import './counter.css'
import './todo.css'
import './passwordtoggle.css'
import './api.css'
import './scroll.css'

import AutoIncrementCounter from './assets/components/Autoincrementcounter'
import TodoApp from './assets/components/Todolist'
import PasswordToggle from './assets/components/Passwordtoggle'
import APIDataFetch from './assets/components/APIdatafetcher'
import ScrollTopBtn from './assets/components/ScrollTopBtn'

function App() {
 

  return (
    <>
      <AutoIncrementCounter/>
      <TodoApp/>
      <PasswordToggle/>
      <APIDataFetch/>
      <ScrollTopBtn/>

    </>
  )
}

export default App
