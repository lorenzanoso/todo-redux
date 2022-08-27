import { useSelector } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import Auth from './components/authentication/Auth';

function App() {

  const activeUser = useSelector((state) => state.activeUser)

  return (
    <div className="App">
      {activeUser.email ? <TodoList /> : <Auth />}
    </div>
  );
}

export default App;
