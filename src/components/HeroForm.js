import React from "react";
import { Link } from "react-router-dom";
import HeroesList from "./HeroesList";

const heroForm = (props) => {
  // console.log(props);
  // merging heroes from API and new heroes created and removing duplicates
  Array.prototype.push.apply(props.newHeroes, props.heroSquad.members);
  const allHeroes = props.newHeroes.filter((item, index) => {
    return props.newHeroes.indexOf(item) === index;
  });

  // Filter Heroes on Search
  // const filteredHeroes = allHeroes.find((hero) =>
  //   hero.powers.find(
  //     (power) => console.log(power.toLowerCase())
  //     // power.toLowerCase() === props.searchField.toLowerCase()
  //   )
  // );

  // console.log(filteredHeroes);
  return (
    <div className='container'>
      <h3>Squad name : {props.heroSquad.squadName}</h3>
      <h3>Hometown : {props.heroSquad.homeTown}</h3>
      <h3>Year founded : {props.heroSquad.formed}</h3>
      <h3>Secret base location : {props.heroSquad.secretBase}</h3>
      <form>
        <div className='input-icons'>
          <input
            type='text'
            className='form-input'
            id='search'
            name='search'
            placeholder='Search By Power'
            onChange={props.handleHeroSearchChange}
          />
          <i className='fas fa-search'></i>
        </div>
        <HeroesList
          allHeroes={allHeroes}
          handleNumberOfHeroes={props.handleNumberOfHeroes}
        />
        <button
          className='btn'
          disabled={props.heroButton}
          onClick={props.handleButtonSubmit}>
          <Link to='/summary' style={{ color: "white" }}>
            Request Heroes
          </Link>
        </button>
      </form>
    </div>
  );
};

export default heroForm;
