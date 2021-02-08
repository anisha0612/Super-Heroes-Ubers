import React from "react";

const SummaryPage = (props) => {
  console.log(props);
  return (
    <div className='container'>
      <h2 className='App-header'>Customer Details</h2>
      <h4>Name : {props.childObj.name}</h4>
      <h4>Email : {props.childObj.email}</h4>
      <h4>Phone : {props.childObj.phone}</h4>
      <h4>ZipCode : {props.childObj.zipCode}</h4>

      <h2 className='App-header'>Heroes Selected</h2>
      {props.childObj.heroSelected.map((hero) => (
        <div>
          {" "}
          <h4>*********</h4>
          <h4>Hero Name : {hero.name}</h4>
          <h4>Hero Quantity : {hero.number}</h4>
        </div>
      ))}
    </div>
  );
};

export default SummaryPage;
