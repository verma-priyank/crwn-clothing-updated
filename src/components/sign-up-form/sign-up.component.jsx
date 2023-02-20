import {   useState } from "react";


import {
  createAuthUserWithEmailAndPassword,
  CreateUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss"
const SignUp = () => {
  const [formfields, setformFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { displayName, email, password, confirmpassword } = formfields;
  
  const handlechange = (e) => {
    const { value, name } = e.target;

    setformFields({ ...formfields, [name]: value });
    
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
         await CreateUserDocumentFromAuth(user, { displayName });
        setformFields({
          displayName: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
      } catch (error) {
        alert(error.code);
      }
    }
  };

  return (
    <div className="sign-up-container">
    <h2>Don't have an account ?</h2>
    <span>Sign up with your email and Password</span>
      <form onSubmit={handlesubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handlechange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          onChange={handlechange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handlechange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handlechange}
          name="confirmpassword"
          value={confirmpassword}
        />
        <Button type="submit" buttonType="">SignUp</Button>
      </form>
    </div>
  );
};
export default SignUp;
