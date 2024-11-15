import { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    email: '',
    newsletter: false,
    gender: '',
    foodPreference: '',
    bio: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Get in Touch</h2>
      
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 space-y-4"
      >
        <div>
          <label className="block font-semibold mb-1">Username:</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Age:</label>
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex items-center">
          <input 
            type="checkbox" 
            name="newsletter" 
            checked={formData.newsletter} 
            onChange={handleChange}
            className="mr-2"
          />
          <label className="font-semibold">Subscribe to Newsletter</label>
        </div>

        <div>
          <label className="block font-semibold mb-1">Gender:</label>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value="Male" 
                checked={formData.gender === 'Male'} 
                onChange={handleChange} 
                className="mr-2"
              />
              Male
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value="Female" 
                checked={formData.gender === 'Female'} 
                onChange={handleChange} 
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Food Preference:</label>
          <select 
            name="foodPreference" 
            value={formData.foodPreference} 
            onChange={handleChange} 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">--Select an option--</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Bio:</label>
          <textarea 
            name="bio" 
            value={formData.bio} 
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-2 mt-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-8 w-full max-w-lg bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Submitted Data:</h3>
          <p>Username: {submittedData.username}</p>
          <p>Age: {submittedData.age}</p>
          <p>Email: {submittedData.email}</p>
          <p>Subscribed to Newsletter: {submittedData.newsletter ? 'Yes' : 'No'}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Food Preference: {submittedData.foodPreference}</p>
          <p>Bio: {submittedData.bio}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
