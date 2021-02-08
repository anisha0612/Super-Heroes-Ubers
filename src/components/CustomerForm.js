import React from "react";

const customerForm = (props) => {
  // console.log(props);
  return (
    <div className='container'>
      <form id='form'>
        {/* <!-- Full Name --> */}
        <div className='mb-3 required'>
          <label htmlFor='fullName' className='form-label'>
            Full Name
          </label>
          <div className='input-icons'>
            <input
              type='text'
              className='form-input'
              id='fullName'
              name='fullName'
              placeholder='Full Name'
              required
              minLength='3'
              maxLength='100'
              onChange={props.handleNameChange}
            />
            <i className='fas fa-user' aria-hidden='true'></i>
          </div>
        </div>
        {/* <!-- Phone number --> */}
        <div className='mb-3 required'>
          <label htmlFor='phone' className='form-label'>
            Phone Number
          </label>
          <div className='input-icons'>
            <input
              type='tel'
              className='form-input'
              id='phone'
              placeholder='minimum 7 digits'
              required
              name='phone'
              pattern='[0-9]{7,}'
              onChange={props.handlePhoneChange}
            />
            <i className='fas fa-phone-square-alt'></i>
          </div>
        </div>
        {/* <!-- Email address --> */}
        <div className='mb-3 required'>
          <label htmlFor='email' className='form-label'>
            Email Address
          </label>
          <div className='input-icons'>
            <input
              type='email'
              className='form-input'
              id='email'
              placeholder='email@address.com'
              name='email'
              required
              onChange={props.handleEmailChange}
            />
            <i className='fas fa-envelope-square'></i>
          </div>
        </div>
        {/* <-- Zip Code --> */}
        <div className='mb-3 required'>
          <label htmlFor='phone' className='form-label'>
            Phone Number
          </label>
          <div className='input-icons'>
            <input
              type='number'
              className='form-input'
              id='zipCode'
              placeholder='12345'
              name='zipCode'
              pattern='[0-9]{5}'
              required
              onChange={props.handleZipCodeChange}
            />
            <i className='fas fa-location-arrow'></i>
          </div>
        </div>
        {/* Register Button */}
        <button
          type='submit'
          className='btn'
           disabled={props.buttonDisabled}
          onClick={props.handleCustomerFormSubmit}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default customerForm;
