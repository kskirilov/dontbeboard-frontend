import Nav from './components/nav';
import './about.css';
// import Footer from './components/footer.js';

function About() {
    return (
        <div>
        <Nav />
        <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
          <span>♞ DontBeBoard.</span>
            <span>SUBMIT A GAME</span>
            </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME"></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NUMBER OF PLAYERS"></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="TYPE"></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CATEGORY"></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="AGE"></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="ESTIMATED PLAY TIME"></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="DESCRIPTION"></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="RELEASE DATE"></input>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
</div>
    )
}
export default About;
