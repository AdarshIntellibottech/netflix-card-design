import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import CardScreen from './Screens/CardScreen';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <CardScreen />}  />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
