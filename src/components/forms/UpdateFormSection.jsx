import React from 'react';
import Form from './Form';

function UpdateFormSection({ onFormSubmit, userDatas, onCancel }) {
  return (
    <section className='col-lg-6'>
      <h2>Edit user</h2>
      <Form formType='updateForm' onFormSubmit={onFormSubmit} userDatas={userDatas} onCancel={onCancel} />
    </section>
  );
}

export default UpdateFormSection;
