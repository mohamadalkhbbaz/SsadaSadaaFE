import './App.css';
import PostList from './components/PostsList';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <UserList />
      <hr></hr>
      <PostList />
    </div>
  );
}

export default App;
