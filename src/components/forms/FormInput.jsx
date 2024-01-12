import React, { useState } from 'react';

function FormInput({ dataType, inputValue, onValueChange }) {
  return (
    <div className='mt-4'>
      <label className='form-label' htmlFor={`input-${dataType}`}>
        {dataType}
      </label>
      <input
        className='form-control'
        type='text'
        id={`input-${dataType}`}
        value={inputValue}
        required
        onChange={e => {
          onValueChange(e, dataType);
        }}
      />
    </div>
  );
}

export default FormInput;
