import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

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

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false);
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="text-center p-3">
          <img src={avatarUrl} alt={user.name} className="rounded-circle" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{user.name}</h5>
          <div className="card-text">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          </div>
          <div className="d-flex justify-content-around mt-3">
            <button 
              className="btn btn-light" 
              onClick={handleLike}
              style={{ color: isLiked ? '#dc3545' : '#6c757d' }}
            >
              <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} />
            </button>
            <button 
              className="btn btn-light" 
              onClick={() => onEdit(user)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button 
              className="btn btn-light" 
              onClick={() => onDelete(user.id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
