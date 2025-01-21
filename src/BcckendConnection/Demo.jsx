import  { useState, useEffect } from 'react';

import putSecureData from '../api/putData';
import deleteSecureData from '../api/deleteData';
import { getSecureData } from './getData';
import { postSecureData } from './postData';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: ''
  });
  const [editUser, setEditUser] = useState({
    id: null,
    name: '',
    email: ''
  });

  // Fetch users using a secure GET request
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getSecureData('/users');  // Secure endpoint
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle creating a new user (Secure POST request)
  const handleCreate = async () => {
    try {
      const data = await postSecureData('/users', newUser); // Secure POST request
      setUsers([...users, data]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Handle updating an existing user (Secure PUT request)
  const handleUpdate = async () => {
    try {
      const data = await putSecureData(`/users/${editUser.id}`, editUser);
      setUsers(users.map((user) => (user.id === editUser.id ? data : user)));
      setEditUser({ id: null, name: '', email: '' });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Handle deleting a user (Secure DELETE request)
  const handleDelete = async (id) => {
    try {
      await deleteSecureData(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>

      {/* Create User Form */}
      <div>
        <h2>Create New User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleCreate}>Create User</button>
      </div>

      {/* Display list of users */}
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => setEditUser(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Edit User Form */}
      {editUser.id && (
        <div>
          <h2>Edit User</h2>
          <input
            type="text"
            placeholder="Name"
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={editUser.email}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
          />
          <button onClick={handleUpdate}>Update User</button>
          <button onClick={() => setEditUser({ id: null, name: '', email: '' })}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
