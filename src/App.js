import logo from './logo.svg';
import './App.css';
import AlbumTitle from './components/AlbumTitle.js'


const App = () => {
  return <div>
    <AlbumTitle text="DAMN." textColor="red" exists={true}></AlbumTitle>
    <AlbumTitle text="NATION." textColor="blue" exists={false} height={120}></AlbumTitle>
  </div>;
};

export default App;
