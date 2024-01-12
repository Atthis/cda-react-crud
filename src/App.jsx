import { useState } from 'react';
import UsersTable from './components/tables/UsersTable';
import UpdateFormSection from './components/forms/UpdateFormSection';
import AddFormSection from './components/forms/AddFormSection';

function App() {
  const startingUsers = [
    { id: 0, firstname: 'Bob', lastname: 'Dylan' },
    { id: 1, firstname: 'Guy', lastname: 'Farant' },
    { id: 2, firstname: 'Pacôme', lastname: 'Dupond' },
  ];
  const [users, setUsers] = useState(startingUsers);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedUserDatas, setUpdatedUserDatas] = useState({ id: null, firstname: '', lastname: '' });
  const [showAlert, setShowAlert] = useState(false);

  function handleSubmit(newUser) {
    const currentUsers = [...users];
    if (isUpdating) {
      let updatedUserArrayId = currentUsers.findIndex(user => user.id === newUser.id);
      currentUsers.splice(updatedUserArrayId, 1, newUser);
      setUpdatedUserDatas({ id: null, firstname: '', lastname: '' });
      setShowAlert(false);
      setIsUpdating(false);
    } else {
      currentUsers.push(newUser);
    }
    setUsers(currentUsers);
  }

  function handleEditing(id) {
    if (isUpdating) {
      setShowAlert(true);
      return;
    }
    setIsUpdating(true);

    const currentUsers = [...users];
    const updatedUser = currentUsers.find(user => user.id === id);
    setUpdatedUserDatas(updatedUser);
  }

  function handleCancel() {
    setUpdatedUserDatas({ id: null, firstname: '', lastname: '' });
    setShowAlert(false);
    setIsUpdating(false);
  }

  function handleDeletion(id) {
    const currentUsers = [...users];
    const updatedUsers = currentUsers.filter(user => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <main className='row'>
        {isUpdating ? <UpdateFormSection onFormSubmit={handleSubmit} userDatas={updatedUserDatas} onCancel={handleCancel} /> : <AddFormSection onFormSubmit={handleSubmit} />}
        <UsersTable users={users} isEditing={handleEditing} isDeleting={handleDeletion} />
      </main>
      {showAlert && (
        <aside className='px-3 py-2 bg-warning rounded'>
          <p className='m-0'>Please finish current user edition before editing another user</p>
        </aside>
      )}
    </div>
  );
}

export default App;
