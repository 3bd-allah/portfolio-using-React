import React, { useState } from "react";
import "../styles/ContactMe.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";


const initialValues = {
  name: "",
  email: "",
  enquiryType: "hireMe",
  message: "",
};

const onSubmit = (values, actions) => {
  setTimeout(()=>{
    console.log(values);
    alert(JSON.stringify(values));
    // actions.setSubmitting(false)
    actions.resetForm();
} ,2000)
};

// validation by Using Yup.object()
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  message: Yup.string().required("Required"),
});

const ContactMeWithFormikLib = () => {
  return (
    <div
      id="contact-me-section"
      className="ContactMe bg-outline-secondary text-white d-flex justify-content-center align-items-center"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        
        <Form className="m-auto w-50 p-5 ">
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
                <Field
                  id="name"
                  type="text"
                  className="row ms-1 form-control"
                  name="name"
                />
                {/* Error message by ErrorMessage component  */}
                <ErrorMessage name="name">
                  {(errorMsg) => (
                    <p className="d-flex text-danger mb-2">{errorMsg}</p>
                  )}
                </ErrorMessage>
              </div>

              {/* Email area */}
              <div className="field row">
                <label htmlFor="emailAddress" className="row form-label">
                  Email Address
                </label>
                <Field
                  className="row ms-1 form-control"
                  id="emailAddress"
                  type="email"
                  name="email"
                />
                <ErrorMessage name="email" component={TextError} />
              </div>

              {/* type of enquiry */}
              <div className="filed row">
                <label className="row" htmlFor="typeOfEnquiry">
                  Type of enquiry
                </label>
                <Field
                  as="select"
                  id="typeOfEnquiry"
                  className="row ms-1 form-select"
                  name="enquiryType"
                >
                  <option value={"hireMe"}>Freelance project proposal</option>
                  <option value={"openSource"}>
                    Open source consultancy session
                  </option>
                  <option value={"other"}>Other</option>
                </Field>
              </div>

              {/* Message area */}
              <div className="field row">
                <label className="row" htmlFor="message">
                  Your message
                </label>
                <Field
                  as="textarea"
                  id='message'
                  className="row ms-1 form-control"
                  cols={30}
                  rows={8}
                  name="message"
                />

                <ErrorMessage name="message" component={TextError} />
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
        </Form>
      </Formik>
    </div>
  );
};

export default ContactMeWithFormikLib;
