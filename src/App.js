import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import { Alert } from 'react-bootstrap';

function App() {
  const data={
    name: 'Danny McLoan',
    profession: 'Senior Journalist',
    followers:54,
    articles:4
  }
  const handleAlert = (x) =>
    alert(x );

  const url= "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp";
  return (
    <div className="App">
      <Profile data={data} handleAlert={handleAlert}> {url} </Profile>
    </div>
  );
}

export default App;
