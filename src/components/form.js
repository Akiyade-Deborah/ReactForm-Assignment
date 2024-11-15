import { useState } from 'react';

  const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [form, setForm] = useState('');
  const [formData, setFormData] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
     
    const handleSubmit = (e) =>{
      e.preventDefault(); 
      alert('Submitted: ${formData}');
    };
 
  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <p>{inputValue}</p>

      <select 
        value={selectedValue} 
        onChange={handleSelectChange}
      >
        <option value="">--Select an option---</option>
        <option value="Rice">Rice</option>
        <option value="Beans">Beans</option>
        <option value="Yam">Yam</option>
      </select>
      <p>{selectedValue}</p>

      <input type="text" value={formData} 
      onChange={(e)=>setFormData(e.target.value)}/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
  
    </div>
  );
};


export default FormComponent;
