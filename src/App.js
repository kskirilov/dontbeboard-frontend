import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Games from './games.js';
import Results from './components/results.js'
import PlayersQuestion from './question-pages/PlayersQuestion.js';
import DurationQuestion from './question-pages/DurationQuestion.js';
import GameKindQuestion from './question-pages/GameKindQuestion.js';
import GameMoodQuestion from './question-pages/GameMoodQuestion.js';
import AgeGroupQuestion from './question-pages/AgeGroupQuestion.js';
import ViewAll from './viewAll';
import SingleGame from './SingleGame';
import AddGame from './containers/AddGame.js';



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
