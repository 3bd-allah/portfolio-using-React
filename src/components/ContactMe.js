import React, { useState } from "react";
import "../styles/ContactMe.css";
import { useFormik } from "formik";
import {FormControl, FormLabel, FormErrorMessage,FormHelperText,} from '@chakra-ui/react'
import * as Yup from 'yup'
const initialValues = {
  name: "",
  email: "",
  enquiryType: "hireMe",
  message: "",
};

const onSubmit = (values, actions) => {
  console.log(values);
  alert(JSON.stringify(values));
  actions.resetForm();
 
};

// validation by my own logic
const validate = (values) => {
  let errors = {};

  // check name 
  if (!values.name) {
    errors.name = "Required";
  }

  // check email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gim.test(values.email)) {
    errors.email = "Invalid Email Format";
  }

  // check enquiry type 
  if (!values.enquiryType) {
    errors.enquiryType = "Required";
  }

  // check message
  if (!values.message) {
    errors.message = "Required";
  }
  return errors;
};


// validation by Using Yup
const validationSchema = Yup.object({
  name:Yup.string().required('Required'), 
  email:Yup.string().email("Invalid Email Format").required('Required'),
  message:Yup.string().required('Required'),
})



const ContactMe = () => {
  const [isValid, setIsValid] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log( formik.touched);

  return (
    <div
      id="contact-me-section"
      className="ContactMe bg-outline-secondary text-white  d-flex justify-content-center align-items-center"
    >
      <form onSubmit={formik.handleSubmit} className="m-auto w-50 p-5 ">
        {/* title area */}
        <legend className="fs-2 fw-bolder d-flex row">Contact Me</legend>

        <fieldset className="col-lg-10 ms-5 ">
          <div className="row">
            {/* Name area */}

            {/* Name field with plain html and bootstrap for styling and Responsiveness and Formik for form validation */}
            <div className="field row">
              <label htmlFor="name" className="row form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="row ms-1 form-control"
                // required
                name="name"
                {...formik.getFieldProps("name")}
              />
                {formik.errors.name && formik.touched.name && <div className="d-flex mb-2 text-danger">{formik.errors.name}</div> }
                
            </div>

            {/* Name field with Chakra UI and Formik for form validation */}
            {/* <FormControl >
              <FormLabel>First name</FormLabel>
              <input placeholder="First name" />
            </FormControl> */}

            {/* Email area */}
            <div className="field row">
              <label htmlFor="emailAddress" className="row form-label">
                Email Address
              </label>
              <input
                className="row ms-1 form-control"
                id="emailAddress"
                type="email"
                name="email"
                {...formik.getFieldProps('email')}
                // required
              />
                {formik.errors.email && formik.touched.email && <div className="d-flex mb-2 text-danger">{formik.errors.email}</div> }

            </div>

            {/* type of enquiry */}
            <div className="field row">
              <label className="row" htmlFor="typeOfEnquiry">
                Type of enquiry
              </label>
              <select
                id="typeOfEnquiry"
                className="row ms-1 form-select"
                {...formik.getFieldProps("enquiryType")}
                // required
              >
                <option value={"hireMe"}>Freelance project proposal</option>
                <option value={"openSource"}>Open source consultancy session</option>
                <option value={"other"}>Other</option>
              </select>
            </div>


            {/* Message area */}
            <div className="field row">
              <label className="row" htmlFor="message">
                Your message
              </label>
              <textarea
                className="row ms-1 form-control"
                cols={30}
                rows={8}
                name="message"
                {...formik.getFieldProps("message")}
                // required
              />
                {formik.errors.message && formik.touched.message && <div className="d-flex mb-2 text-danger">{formik.errors.message}</div> }

            </div>

            {/* button area */}
            <div className="row">
              <button
                className="btn btn-outline-primary ms-1 mt-2 col-12 fw-semibold "
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactMe;
