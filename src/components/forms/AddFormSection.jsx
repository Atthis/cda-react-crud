import React from 'react';
import Form from './Form';

function AddFormSection({ onFormSubmit }) {
  return (
    <section className='col-lg-6'>
      <h2>Add user</h2>
      <Form formType='addForm' onFormSubmit={onFormSubmit} userDatas={{ firstname: '', lastname: '' }} />
    </section>
  );
}

export default AddFormSection;
