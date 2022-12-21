import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function App() {
  const data={
    name: 'Danny McLoan',
    profession: 'Senior Journalist',
    url: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
    followers:54,
    articles:4
  }
  return (
    <div className="App">
      <Profile data={data}></Profile>
    </div>
  );
}

export default App;
