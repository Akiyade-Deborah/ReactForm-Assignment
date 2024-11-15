import { useState } from 'react';

  const UserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Username: ${username}\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>


      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;


