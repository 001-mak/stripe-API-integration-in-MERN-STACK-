import React , {useState}from 'react'

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        isBusinessOwner: 'No', // Default value is "No"
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log("formData"); // Replace this with your actual form submission logic
      };
  return (

    <div className='form-container'>
  <form onSubmit={handleSubmit}target="_blank">
  <div>
    <label>Name:</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div>
    <label>Email:</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div>
    <label>Phone Number:</label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </div>

  <div>
    <label>Country:</label>
    <input
      type="text"
      name="country"
      value={formData.country}
      onChange={handleChange}
      required
    />
  </div>

  <div>
    <label>Are you a business owner?</label>
    <select
      name="isBusinessOwner"
      value={formData.isBusinessOwner}
      onChange={handleChange}
      required
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <button onClick={handleSubmit}>Submit</button>
</form>
</div>
  )
}

export default RegistrationForm

