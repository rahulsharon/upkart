import React, { useState } from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [receiveEmails, setReceiveEmails] = useState(true);
  const [profilePicture, setProfilePicture] = useState('');

  const handleSaveChanges = () => {
    // Handle saving changes to the server or API
    // For example, update the user's account settings
    console.log('Changes saved!');
  };

  return (
    <div className="account-settings">
      <h1>Account Settings</h1>

      <div className="settings-group">
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="settings-group">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="settings-group">
        <h2>Password Change</h2>
        <div>
          <label>Current Password</label>
          <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        </div>
        <div>
          <label>New Password</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
      </div>

      <div className="settings-group">
        <h2>Notification Preferences</h2>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={receiveEmails}
            onChange={(e) => setReceiveEmails(e.target.checked)}
          />
          Receive Email Notifications
        </label>
      </div>

      <div className="settings-group">
        <h2>Update Profile Picture</h2>
        <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} />
      </div>

      <button className="save-button" onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default AccountSettings;
