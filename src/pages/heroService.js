import React from "react";
import Collapsible from "../components/Collapsible";

const apiUrl =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

class HeroService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroSquad: {},
      isDisabled: true,
      isValid: false,
      buttonDisabled: true,
      searchField: "",
      name: "",
      phone: "",
      email: "",
      zipCode: "",
heroButton: true,
      heroSelected: [],
    };
  }

  // add functions to fetch and return data from the API
  componentDidMount() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ heroSquad: data }))
      .catch((err) => console.log(err));
  }

  // Get the customer Name from customer form
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  // Get the customer Email from customer form
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  // Get the customer Phone from customer form
  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  // Get the customer Zip code from customer form
  handleZipCodeChange = (e) => {
    this.setState({
      zipCode: e.target.value,
    });
    // enable customer button
    if (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.phone
    ) {
      this.setState({ buttonDisabled: false });
    } 
  };

// handle customer form submit(continue button)
  handleCustomerFormSubmit = (event) => {
    event.preventDefault();

    this.setState({ isDisabled: false });
    console.log(this.state);
  };

// handle search in the searbar
  handleHeroSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

// handle request heroes in heroes form
  handleButtonSubmit = (e) => {
    // e.preventDefault();
    this.props.handlePageChange(this.state);
  };

// fetch the number of heroes selected by customer
  handleNumberOfHeroes = (e) => {
    // console.log(e.target.name, e.target.value);
    let newValue = { name: e.target.name, number: e.target.value };
    let joinedArray = this.state.heroSelected.concat(newValue);
    this.setState(
      {
        heroSelected: joinedArray,
      },
      () => {
        console.log(this.state.heroSelected);
        if (this.state.heroSelected.length > 0) {
          this.setState({ heroButton: false });
        }
      }
    );
  };

  render() {
    return (
      <div>
        <h1 className='App-header'>Uber For Supers</h1>
        <div>
          <Collapsible
            {...this.state}
            handleHeroList={this.handleHeroList}
            handleHeroSearchChange={this.handleHeroSearchChange}
            handleZipCodeChange={this.handleZipCodeChange}
            handlePhoneChange={this.handlePhoneChange}
            handleEmailChange={this.handleEmailChange}
            handleNameChange={this.handleNameChange}
            handleCustomerFormSubmit={this.handleCustomerFormSubmit}
            handleNumberOfHeroes={this.handleNumberOfHeroes}
            handleButtonSubmit={this.handleButtonSubmit}
          />
        </div>
      </div>
    );
  }
}

export default HeroService;
