"use client"
import { useFormik } from "formik";
import loginSchema from "@/app/validation/login";
import Link from "next/link";
import { useSignInMutation } from "@/app/store/login/loginApi";
import Loading from "@/app/components/Loading";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "@/app/store/login/loginSlice";
import { useState } from "react";
import { ErrorMessage } from "@/app/components/ErrorMessage";

export default function LoginForm() {

    
  const dispatch = useDispatch()
  const [signIn, { isLoading }] = useSignInMutation();
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState(false)


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const res = await signIn(values);
      if (res.data) {
        dispatch(setUser(values));
        dispatch(setToken(res.data.idToken))
      } else {
        setError(true)
        setErrorMessage(res.error.data.error.message)
      }
      formik.resetForm();
    },
  })


  return (
    <>
               {error && <ErrorMessage errorMessage={errorMessage} />}

<form method="#" action="#" className="mt-10" onSubmit={formik.handleSubmit}>
  <div className="mt-7">
    <input
      onChange={formik.handleChange}
      value={formik.values.email}
      name="email"
      type="email"
      placeholder="Email"
      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
    />
    <div className="text-[red] text-sm">{formik.errors.email}</div>
  </div>

  <div className="mt-7">
    <input
      onChange={formik.handleChange}
      value={formik.values.password}
      name="password"
      type="password"
      placeholder="Password"
      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
    />
    <div className="text-[red] text-sm">
      {formik.errors.password}
    </div>
  </div>

  <div className="mt-7">
    <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
      {isLoading ? <Loading /> : 'Login'}
    </button>
  </div>



  <div className="mt-7">
    <div className="flex justify-center items-center">
      <label htmlFor="" className="mr-2">
        Dont have an account?
      </label>
      <Link href="register"
        className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
      >
        Sign up
      </Link>
    </div>
  </div>
</form>
    </>
  )
}
