import {  useState } from "react";


import {
  CreateUserDocumentFromAuth,
  SignInwithGooglePopup,
  signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
const SignIn = () => {
  const [formfields, setformFields] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formfields;
  
  const GoogleSignIn = async () => {
    await SignInwithGooglePopup();

    
    
    
  };
  const handlechange = (e) => {
    const { value, name } = e.target;

    setformFields({ ...formfields, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try{
         await signInAuthWithEmailAndPassword(email,password)
        
        setformFields({
            email:"",
            password:""
        })
        
    }catch(error){
        alert(error.code)
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and Password</span>
      <form onSubmit={handlesubmit}>
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

        <div className="buttons-container">
        
        <Button type="submit" buttonType="">
          Sign In
        </Button>
        <Button type="button" onClick={GoogleSignIn} buttonType="google">
          Google Sign In
        </Button></div>
      </form>
    </div>
  );
};
export default SignIn;
