import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
    mobile: "",
  });

  const [validatedData, setValidatedData] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validate = () => {
    const { email, pass, mobile } = inputs;

    const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passvalidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const phoneno = /^\+[0-9]{12}$/;

    if (email === "" || !mail.test(email)) {
      alert("Please Enter Valid Email Id");
      return false; // Prevent form submission
    }

    if (!pass.match(passvalidate)) {
      alert("Please enter a valid password");
      return false; // Prevent form submission
    }

    if (!mobile.match(phoneno)) {
      alert("Please enter a valid mobile number");
      return false; // Prevent form submission
    }
    
    alert("Thank you"); // If all validations pass, show a success message
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    setValidatedData(inputs);
    
    // // Clear input fields after submission
    // setInputs({
    //     email: "",
    //     pass: "",
    //     mobile: "",
    //   });
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form action="" className="form" onSubmit={handleSubmit}>
        <label className="email">Email</label>
        <input type="text" name="email" onChange={handleChange} placeholder="Email" />
        <br />

        <label className="pass">Password</label>
        <input type="text" placeholder="Password" name="pass" onChange={handleChange} />
        <br />

        <label className="mobile">Mobile</label>
        <input type="text" placeholder="Mobile" name="mobile" onChange={handleChange} />
        <br />

        <button type="submit">Submit</button>
      </form>
      {validatedData && (
        <div>
          <h2>Validated Data</h2>
          <p>Email: {validatedData.email}</p>
          <p>Password: {validatedData.pass}</p>
          <p>Mobile: {validatedData.mobile}</p>
        </div>
      )} 
    </div>
  );
}

export default Form;