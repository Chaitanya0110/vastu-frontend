import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputField from "../shared/InputField";
import Spinners from "../shared/Spinners";
import { registerNewUser } from "../../store/actions";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { FaUserPlus } from "react-icons/fa";

function Register(){
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    }) ;

    const registerHandler = async (data) => {
        console.log("Register Clicked");
        dispatch(registerNewUser(data, toast, reset, navigate, setLoader));
    }

    return(
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form onSubmit={handleSubmit(registerHandler)}
                className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded"
            >
                <div className="flex flex-col items-center justify-center space-y-4">
                    <FaUserPlus className="text-slate-800 text-5xl" />
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        Register Here
                    </h1>
                </div>
                <hr className="mt-2 mb-5 text-black" />
                <div className="flex flex-col gap-3">
                    <InputField
                        label="UserName"
                        required
                        id="username"
                        type="text"
                        message="*UserName is required"
                        register={register}
                        errors={errors}
                    />

                    <InputField
                        label="Email"
                        requirede
                        id="email"
                        type="email"
                        message="*Email is required"
                        register={register}
                        errors={errors}
                    />

                    <InputField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        register={register}
                        errors={errors}
                        min={6}
                    />
                </div>

                <button 
                    disabled={loader}
                    className="bg-button-gradient flex gap-2 items-center justify-center text-white font-semibold w-full py-2 hove:text-slate-400 transition-colors duration-100 rounded-sm my-3"
                    type="submit"
                >
                    {loader ? (
                        <> <Spinners />Loading...</>
                    ) : (
                        <>Register</>
                    )}
                </button>

                <p className="text-center text-sm text-slate-700 mt-6">
                    Already have an account?
                    <Link className="font-semibold underline hover:text-black" to="/login">
                        <span>Login</span>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register;