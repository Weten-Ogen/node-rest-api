/* eslint-disable react-hooks/rules-of-hooks */

import {useState, useEffect} from 'react';


const Form = () => {
    const [name, useName] = useState({
      name : '',
    });

    const handleChange = (e) => {
      const {value} = e.target;
      useName(name => {
        return {
          [name]: value
        }
      })
    }
  return (
    <form>
      <h1>React Form</h1>
      <input
        value={name.name}
        name='name'
        type='text'
        placeholder='Enter Name'
        onChange={ handleChange}
        autoFocus
      />
      <button
      type='button'
      >Submit
      </button>
    </form>
  )
}

export default Form
