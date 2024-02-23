"use client"
import { useFormik } from "formik"
import addproductSchema from "@/app/validation/addProducts"
import { useProductsAddMutation } from "@/app/store/products/productsApi"
import Loading from "@/app/components/Loading"
import toast, { Toaster } from 'react-hot-toast';

export default function Add() {

    const [productsAdd, { isLoading }] = useProductsAddMutation()

    const formik = useFormik({
      initialValues: {
        title: '',
        link: '',
        price: '',
        brand: '',
        description: '',
        status: "false"
      },
      validationSchema: addproductSchema,
      onSubmit: async values => {
       const res = await productsAdd(values);
       if(res?.data){
        toast('Successfully')
       }
        formik.resetForm();
      },
    })
  

  return (
  <>
   <form action="" onSubmit={formik.handleSubmit} >
            <div className="mb-5">
              <label htmlFor="base-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Title</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.title}
                type="text"
                name="title"
                id="base-input"
                className=
                {
                  formik.touched.title && formik.errors.title ? "bg-red-100 border border-red-200 text-red-900 text-sm rounded-lg focus:ring-red-200 focus:border-red-500 block w-full p-2.5 dark:bg-gary-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                } />

            </div>
            <div className="mb-5">
              <label htmlFor="base-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image Link</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.link}
                type="text"
                name="link"
                id="base-input"

                className=
                {
                  formik.touched.link && formik.errors.link ? "bg-red-100 border border-red-200 text-red-900 text-sm rounded-lg focus:ring-red-200 focus:border-red-500 block w-full p-2.5 dark:bg-gary-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                } />
            </div>
            <div className="mb-5">
              <label htmlFor="base-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.price}
                name="price"
                type="text"
                id="base-input"
                className=
                {
                  formik.touched.price && formik.errors.price ? "bg-red-100 border border-red-200 text-red-900 text-sm rounded-lg focus:ring-red-200 focus:border-red-500 block w-full p-2.5 dark:bg-gary-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                } />
            </div>
            <div className="mb-5">
              <label htmlFor="base-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Brand</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.brand}
                type="text"
                name="brand"
                id="base-input"
                className=
                {
                  formik.touched.brand && formik.errors.brand ? "bg-red-100 border border-red-200 text-red-900 text-sm rounded-lg focus:ring-red-200 focus:border-red-500 block w-full p-2.5 dark:bg-gary-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                } />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
              <textarea
                onChange={formik.handleChange}
                value={formik.values.description}
                id="message"
                name="description"
                rows="4"
                className={
                  formik.touched.description && formik.errors.description ? "bg-red-100 border border-red-200 text-red-900 text-sm rounded-lg focus:ring-red-200 focus:border-red-500 block w-full p-2.5 dark:bg-gary-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                }


                placeholder="Leave a comment..."></textarea>

            </div>
            <div className="flex justify-end">
              <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                {isLoading ? <Loading /> : 'Add'}
              </button>
            </div>
          </form>
          <Toaster />
  </>
  )
}
