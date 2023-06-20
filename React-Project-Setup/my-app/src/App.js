//import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Section from "./components/Section";
import Tab from "./components/Tab";
import Entries from "./components/Entries";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Journal</h1>
      </header>
      <>
        {" "}
        <Section />
      </>
      <section className="tab1">
        <Tab type="All Entries" number="3" />
        <Tab type="Favorites" number="1" />
      </section>

      <div>
        <Entries
          date="FEB 27, 2028"
          title="That's life in the city"
          paragraph="Si sine causa? quae fuerit causa, mox videro;
interea hoc tenebo, si mihi.
Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />

        <Entries
          date="FEB 26, 2028"
          title="That's life in the city"
          paragraph="Si sine causa? quae fuerit causa, mox videro;
interea hoc tenebo, si mihi.
Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />

        <Entries
          date="FEB 25, 2028"
          title="That's life in the city"
          paragraph="Si sine causa? quae fuerit causa, mox videro;
interea hoc tenebo, si mihi.
Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
      </div>

      <footer className="footer">Journal App -- 2028</footer>

      {/* <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </div>
  );
}

export default App;
