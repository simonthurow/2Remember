import './App.css';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './pages/Home';
import { Login } from './pages/Login';
import { DeckSettings } from './pages/DeckSettings';
import { Decks } from './pages/Decks';
import { Learn } from './pages/Learn';
import { Account } from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/decks" element={<Decks />}/>
        <Route path="/learn" element={<Learn />}/>
        <Route path="/addDeck" />
        <Route path="/account" element={<Account />}/>
        <Route path="/deckSettings" element={<DeckSettings />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
