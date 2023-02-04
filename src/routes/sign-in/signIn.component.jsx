import { SignInwithGooglePopup  , CreateUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn =() =>{


  const LogGoogleSignIn  = async() =>{
  const {user} = await SignInwithGooglePopup() ;
  
  console.log(user)
  CreateUserDocumentFromAuth(user)

  }


    return(<>
        <h1>This is sign In Page</h1>
        <button onClick={LogGoogleSignIn}>Sign In</button>
        </>)
}

export default SignIn;