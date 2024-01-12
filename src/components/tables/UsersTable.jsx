import React from 'react';
import UserRow from './UserRow';

function UsersTable({ users, isEditing, isDeleting }) {
  return (
    <section className='col-lg-6'>
      <h2>View users</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return <UserRow user={user} isEditing={isEditing} isDeleting={isDeleting} key={user.id} />;
          })}
        </tbody>
      </table>
    </section>
  );
}

export default UsersTable;
