import { useContext, useEffect, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import SocialLogin from '../../Components/Shared/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';

const SignIn = () => {
    // const [disabled, setDisabled] = useState(true);
    

    const {signIn}=useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

 
    const handleSignIn =(event)=>{
        event.preventDefault()
        const form = event.target
        const password = form.password.value;
        const email = form.email.value;
        console.log(password, email)
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            if(loggedUser){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged In successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            navigate(from, {replace:true})
        })
    }

    return (
        <>
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <img className="md:w-full w-1/2 text-center mx-auto" src="https://i.ibb.co/xL07jRB/Tablet-login-cuate.png" alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">


                        <form onSubmit={handleSignIn}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                             {/*    <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                      {/*       <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div> */}
                            <div className="form-control mt-6">
                                <input  className="cursor-pointer py-2 primary-design" type="submit" value="Login" />
                            </div>
                        </form>
                            <SocialLogin/>
                        <p className='p-4'><small>New Here? <Link className="text-blue-600 underline font-bold" to="/sign-up">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;