import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Games from './view-filtered-games/games.js';
import Results from './components/results.js'
import PlayersQuestion from './question-pages/PlayersQuestion.js';
import DurationQuestion from './question-pages/DurationQuestion.js';
import GameKindQuestion from './question-pages/GameKindQuestion.js';
import GameMoodQuestion from './question-pages/GameMoodQuestion.js';
import AgeGroupQuestion from './question-pages/AgeGroupQuestion.js';
import ViewAll from './view-all-games/viewAll';
import AddGame from './add-game/AddGame.js';
import SingleGame from './view-single-game/SingleGame.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={PlayersQuestion}/>
      <Route path="/h2/" component={DurationQuestion}/>
      <Route path="/h3/" component={GameKindQuestion}/>
      <Route path="/h4/" component={GameMoodQuestion}/>
      <Route path="/h5/" component={AgeGroupQuestion}/>
      <Route path="/games" component={Games}/>
      <Route exact path="/add-game" component={AddGame} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/view-all" component={ViewAll} />
      <Route exact path="/single-game" component={SingleGame} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
