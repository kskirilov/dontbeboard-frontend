import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PlayersQuestion from './PlayersQuestion.js';
import Games from './games.js';
import About from './about.js';
import Results from './components/results.js'
import DurationQuestion from './DurationQuestion.js';
import GameKindQuestion from './GameKindQuestion';
import GameMoodQuestion from './GameMoodQuestion';
import AgeGroupQuestion from './AgeGroupQuestion'
import ViewAll from './viewAll';
import SingleGame from './SingleGame';
import AddGame from './AddGame';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" component={PlayersQuestion} exact/>
      <Route path="/h2/" component={DurationQuestion}/>
      <Route path="/h3/" component={GameKindQuestion}/>
      <Route path="/h4/" component={GameMoodQuestion}/>
      <Route path="/h5/" component={AgeGroupQuestion}/>
      <Route path="/games" component={Games}/>
      <Route path="/add-game" component={AddGame} exact />
      <Route path="/results" component={Results} exact />
      <Route path="/view-all" component={ViewAll} exact />
      <Route path="/single-game" component={SingleGame} exact />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
