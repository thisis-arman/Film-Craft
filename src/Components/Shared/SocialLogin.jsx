// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
// import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const {handleGoogleLogin}=useContext(AuthContext)
const signInWithGoogle =()=>{
    handleGoogleLogin()
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