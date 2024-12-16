"use client"
import { faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import React, { useState } from 'react'
import { Metadata } from 'next';
import { faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: "Contact us"
}

const ContactForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [submitSucess, setSubmitSucess] = useState<Boolean>(false)

  const handleSelectChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
      queryType: ""
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
      queryType: Yup.string().required('Please select a query type'),
    }),
    onSubmit: (values) => {
      console.log(values)
      formik.resetForm()
      setSubmitSucess(true)
      setTimeout(() => {
        setSubmitSucess(false)
      }, 3000);
    }
  })
  return (
    <div className="min-h-screen flex">
       <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            // backgroundImage: "url('/clinbolt_bg.jpeg')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(29, 78, 216, 0.7)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-customDarkpurple  to-custompurple2 pointer-events-none z-[-1]"></div>
      <div className="container mx-auto flex-1 flex flex-col justify-center">
        <div className="mt-[80px]"></div>
        <div className="grid grid-cols-4 gap-2">
          <div className="overflow-auto col-span-2 bg-opacity-10 py-9 px-2">
            <div className="inline-block w-full">
              <div className={`relative bg-green-300 w-full h-auto p-4 rounded-md text-customBlue ${submitSucess ? null : 'hidden'}`}>
                <button
                  aria-label="Close message"
                  className="absolute right-4 top-4 text-customBlue hover:text-blue-800 focus:outline-none"
                  onClick={() => setSubmitSucess(false)}
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>

                <div role="alert" className="text-center">
                  <p className="text-lg font-semibold mb-1">Thank you for reaching out to us!</p>
                  <p className="text-md mb-1">We will follow up with you within 24-48 hours.</p>
                  <p className="text-md font-light">We appreciate your patience!</p>
                </div>
              </div>

              <form onSubmit={formik.handleSubmit} >
                <label htmlFor="fullName" className="block text-sm font-medium text-lightText">Full Name</label>
                <input
                  id="fullName"
                  className="block w-full p-2 my-3 mx-0 outline outline-gray-400 rounded-lg"
                  placeholder="Full Name"
                  type="text"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
                ) : null}

                <label htmlFor="email" className="block text-sm font-medium text-lightText">Email</label>
                <input
                  id="email"
                  className="block w-full p-2 my-3 mx-0 outline outline-gray-400 rounded-lg"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}

                <label htmlFor="message" className="block text-sm font-medium text-lightText">Message</label>
                <textarea
                  id="message"
                  className="block w-full p-2 my-3 mx-0 outline outline-gray-400 rounded-lg"
                  rows={5}
                  placeholder="Message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-sm">{formik.errors.message}</div>
                ) : null}

                <label htmlFor="queryType" className="block text-sm font-medium text-lightText">Query Regarding</label>
                <div className="relative">
                  <select
                    id="queryType"
                    className="block w-full p-2 my-3 mx-0 outline outline-gray-400 appearance-none pr-8 rounded-lg"
                    name="queryType"
                    value={formik.values.queryType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" disabled hidden>Query regarding</option>
                    <option value="Careers">Careers</option>
                    <option value="Open Source">Open Source</option>
                    <option value="Sass">Sass</option>
                    <option value="Community">Community</option>
                  </select>
                  {formik.touched.queryType && formik.errors.queryType ? (
                    <div className="text-red-500 text-sm">{formik.errors.queryType}</div>
                  ) : null}
                  <FontAwesomeIcon icon={faChevronDown} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5 text-gray-400" />
                </div>
                <button className="px-4 py-2 bg-purple-500 rounded-full text-white shadow-lg transition duration-300" type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-span-2 h-full flex flex-col justify-center border-white border-l-2 p-4">
          <h1 className="text-[50px] text-white">Boltzmann Labs</h1>
          <h1 className="text-[30px] text-white">Aisan Sun city, Hyderabad, Telangana, India, 500084</h1>
          <div className="hidden md:flex space-x-3 text-white mt-2">
                    <button className="rounded-full">
                        <FontAwesomeIcon icon={faXTwitter} className="text-4xl" />
                    </button>
                    <button className="rounded-full">
                        <FontAwesomeIcon icon={faYoutube} className="text-4xl" />
                    </button>
                    <button className="rounded-full">
                        <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
                    </button>
                    <button className="rounded-full">
                        <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
                    </button>
                </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactForm