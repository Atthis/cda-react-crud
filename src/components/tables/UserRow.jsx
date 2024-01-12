import React from 'react';

function UserRow({ user, isEditing, isDeleting }) {
  return (
    <tr>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>
        <button
          className='btn btn-dark mx-1'
          onClick={() => {
            isEditing(user.id);
          }}
        >
          Edit
        </button>
        <button
          className='btn btn-light mx-1'
          onClick={() => {
            isDeleting(user.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
