import React from 'react'
import { Link } from "react-router-dom"
import Login from "./Login.jsx"
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[600px]  dark:bg-white dark:text-black p-10">
                <div className=" modal-box border-2 dark:bg-white dark:text-black shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-white dark:text-black">✕</Link>

                        <h3 className="font-bold text-lg dark:bg-white dark:text-black">Signup</h3>
                        {/* Name */}
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input type='text' placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black ' {...register("email", { required: true })}></input>
                            <br/>
                            {errors.password && (<span className='text-sm text-red-600'>This field is required</span>)}
                        </div>
                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black ' {...register("email", { required: true })}></input>
                            <br />
                            {errors.email && (<span className='text-sm text-red-600'>This field is required</span>)}
                        </div>
                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black' {...register("password", { required: true })}></input>
                            <br/>
                            {errors.password && (<span className='text-sm text-red-600'>This field is required</span>)}
                        </div>
                        {/* Button */}
                        <div className='flex justify-around mt-6'>
                            <button className='bg-pink-500 text-white rounded-3xl px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                            <p>Have Account ? <button to={"/"} className='text-blue-400 cursor-pointer underline' onClick={() => document.getElementById("my_modal_3").showModal()}> Login</button>
                                <Login />
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup