import React, { useState } from 'react';
import FormInput from './FormInput';

function Form({ formType, onFormSubmit, userDatas, onCancel }) {
  const [inputsData, setInputsData] = useState([userDatas.firstname, userDatas.lastname]);

  function handleChange(e, inputType) {
    const currentInputsData = [...inputsData];
    if (inputType === 'firstname') {
      currentInputsData.splice(0, 1, e.target.value);
    } else {
      currentInputsData.splice(1, 1, e.target.value);
    }
    setInputsData(currentInputsData);
  }

  function handleCancel(e) {
    e.preventDefault();
    onCancel();
  }

  function handleSubmit(e) {
    const newUser = { id: formType === 'addForm' ? new Date().getTime() : userDatas.id, firstname: inputsData[0], lastname: inputsData[1] };
    setInputsData(['', '']);
    Array.from(e.target.elements).map(element => element.blur());
    onFormSubmit(newUser);
  }

  return (
    <form
      className='form'
      action='submit'
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <FormInput dataType={'firstname'} inputValue={inputsData[0]} onValueChange={handleChange} />
      <FormInput dataType={'lastname'} inputValue={inputsData[1]} onValueChange={handleChange} />
      {formType === 'addForm' ? (
        <button className='btn btn-info mx-1 my-3' type='submit'>
          Add new user
        </button>
      ) : (
        <>
          <button className='btn btn-success mx-1 my-3' type='submit'>
            Update user
          </button>
          <button className='btn btn-danger mx-1 my-3' onClick={handleCancel}>
            Cancel
          </button>
        </>
      )}
    </form>
  );
}

export default Form;
