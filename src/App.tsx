import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleSaveEdit = (editedUser: User) => {
    setUsers(users.map(user => user.id === editedUser.id ? editedUser : user));
    handleCloseModal();
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">User Profiles</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="row">
          {users.map(user => (
            <UserCard 
              key={user.id} 
              user={user} 
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
      
      {showEditModal && selectedUser && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveEdit(selectedUser);
                }}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedUser.name}
                      onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={selectedUser.email}
                      onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedUser.phone}
                      onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Website</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedUser.website}
                      onChange={(e) => setSelectedUser({ ...selectedUser, website: e.target.value })}
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
