import './App.css';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import './style/landingPage.css';
import Health from './components/Health';
import Fitur from './components/Fitur';
import Question from './components/Question';
import Habit from './components/Habit';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      {/*intro section*/}
      <div className="myBG">
        <NavigationBar />
        <div className="intro">
          <Intro />
          <div className="health">
            <Health />
            <div className="Fitur">
              <Fitur />
              <div className="Question">
                <Question />
                <div className="Habit">
                  <Habit />
                  <div className="Footer">
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end of intro*/}
    </div>
  );
}

export default App;
