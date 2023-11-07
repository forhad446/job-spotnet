import { Link, Navigate } from 'react-router-dom';
import logo from './../assets/img/logo.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const { user, createUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const notify = () => toast(signUpError);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const PhotoURL = form.PhotoURL.value;
        const user = { name, email, password, PhotoURL }

        // clear the state info
        setSignUpError('')

        if (password.length < 6) {
            setSignUpError('Password should be at least 6 characters');
            console.log(signUpError);
            return;
        } else if (name === '') {
            setSignUpError('Please give your name');
            console.log(signUpError);
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSignUpError('Password should have a capital letter');
            console.log(signUpError);
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setSignUpError('Password should have a special character');
            console.log(signUpError);
            return;
        } else {
            createUser(email, password)
                .then(() => setSignUpError('Account successfully created'))
                .catch(error => {
                    setSignUpError(error.message.slice(10, 50))
                })
            console.log(signUpError);
        }

    }
    return (
        <div>
            {
                user?.email && <Navigate to='/'></Navigate>
            }
            <section className="bg-gray-50 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                        Job Spotnet
                    </a>
                    <div className="w-full bg-white rounded-lg shadow d md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Create an account
                            </h1>
                            {/* registration form */}
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Forhad Islam" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                    <input type="email" name="email" placeholder="forhad@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">PhotoURL
                                    </label>
                                    <input type="text" name="PhotoURL" placeholder="https://i.ibb.co/xgm8BXf/IMG20220923170357.jpg" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input name="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="font-light text-gray-500 ">I accept the <a className="font-medium text-green-600 hover:underline " href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button onClick={notify} type="submit" className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register</button>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline ">Login here</Link>
                                </p>
                            </form>
                            <Toaster
                                toastOptions={{
                                    className: '',
                                    style: {
                                        border: '1px solid #713200',
                                        padding: '16px',
                                        color: '#713200',
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;