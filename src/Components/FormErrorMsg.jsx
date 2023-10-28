import { useState } from "react";

const FormErrorMsg = () => {
  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
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

    // Clear the error message when the user starts typing
    setErrors((prev) => {
      return { ...prev, [name]: "" };
    });
  };

  const validate = () => {
    const { email, pass, mobile } = inputs;

    const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passvalidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const phoneno = /^\+[0-9]{12}$/;

    const newErrors = {};

    if (email === "" || !mail.test(email)) {
      newErrors.email = "Please Enter Valid Email Id";
    }

    if (!pass.match(passvalidate)) {
      newErrors.pass = "Please enter a valid password";
    }

    if (!mobile.match(phoneno)) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (Object.values(newErrors).every((error) => error === "")) {
      // If there are no errors, store the validated data and clear input fields
      setValidatedData(inputs);
      setInputs({
        email: "",
        pass: "",
        mobile: "",
      });
    }

    setErrors(newErrors);
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form action="" className="form" onSubmit={(e) => { e.preventDefault(); validate(); }}>
        <label className="email">Email</label>
        <input type="text" name="email" value={inputs.email} onChange={handleChange} placeholder="Email" />
        <div className="error">{errors.email}</div>
        <br />

        <label className="pass">Password</label>
        <input type="text" value={inputs.pass} placeholder="Password" name="pass" onChange={handleChange} />
        <div className="error">{errors.pass}</div>
        <br />

        <label className="mobile">Mobile</label>
        <input type="text" value={inputs.mobile} placeholder="Mobile" name="mobile" onChange={handleChange} />
        <div className="error">{errors.mobile}</div>
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

export default FormErrorMsg;
