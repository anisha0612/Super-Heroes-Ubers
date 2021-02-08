import React from "react";
import "./App.css";
import Heroes from "./components/heroes";
import { Switch, Route } from "react-router-dom";
import HeroService from "./pages/heroService";
import SummaryPage from "./pages/summaryPage";

const allHeroes = Heroes.filter((item, index) => {
  return Heroes.indexOf(item) === index;
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childObj: {},
      heroes: allHeroes,
    };
  }
  handlePageChange = (data) => {
    // console.log(data);
    this.setState({ childObj: data });
  };
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <HeroService handlePageChange={this.handlePageChange} />
          </Route>
          <Route path='/summary'>
            <SummaryPage {...this.state} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
