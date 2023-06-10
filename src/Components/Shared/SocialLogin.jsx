// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
// import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const {handleGoogleLogin}=useContext(AuthContext)
const signInWithGoogle =()=>{
    handleGoogleLogin()
    .then(result => {
      const loggedInUser = result.user
      const saveUser ={name:loggedInUser.displayName, email:loggedInUser.email,role:"student"}
      fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(saveUser)
      })
      .then(res =>res.json())
      .then(data =>console.log(data))
      console.log(loggedInUser)
    })

    .catch(error =>console.log(error))
}
    return (
        <div>
             <div className="divider">OR</div>
              <div className="flex justify-center">
                <button
                  onClick={signInWithGoogle}
                  className="btn btn-ghost btn-circle "
                >
                  <FcGoogle className="h-8 w-8 " />
                </button>
              </div>
            
        </div>
    );
};

export default SocialLogin;