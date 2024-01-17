import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  Heading,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import "../styles/ContactMe.css";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";


const ContactMeWithChakra_Formika = () => {
  const { isLoading, response, submit } = useSubmit();
  const { isOpen, type, message, onOpen, onClose } = useAlertContext();

  const initialValues = {
    name: "",
    email: "",
    enquiryType: "",
    message: "",
  };

  // useEffect(() => {
  //   console.log("isOpen in contact: ", isOpen);
  //   console.log("response in contact: ", response);
  // }, [isOpen, response]);

  const onSubmit = async(values, actions) => {
    
    await submit(values.name)
    onOpen(response.type, response.message);
      actions.resetForm();
      actions.setSubmitting(false);
    // console.log(values.name);
    // console.log("Form submitted");
    // return <Alert values={values} isOpen={true} />
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string().email("Invalid email format").required("Required"),
    message: Yup.string().required("Required"),
    enquiryType: Yup.string().required("Required"),
  });

  return (
    <div
      id="contact-me-section"
      className="ContactMe bg-outline-secondary text-white  d-flex justify-content-center align-items-center"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          // console.log("props of form", props);

          return (
            <Form>
              <Heading size="xl" className="d-flex mb-5 mt-5">
                Contact Me
              </Heading>

              {/* Name field */}
              <div className="field">
                <Field name="name">
                  {(prop) => {
                    const { field, form, meta } = prop;
                    // console.log(`props of name`, prop);
                    return (
                      <FormControl
                        className="field"
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>Name</FormLabel>
                        <Input {...field} name="name" className="mb-0" />
                        <FormErrorMessage className="ms-3">
                          {form.errors.name}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>
              </div>

              {/* email field */}
              <Field name="email">
                {(prop) => {
                  // console.log("props of email", prop);
                  const { field, form, meta } = prop;
                  return (
                    <FormControl
                      className="field"
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel>Email Address</FormLabel>
                      <Input {...field} name="email" className="mb-0" />
                      <FormErrorMessage className="ms-3">
                        {form.errors.email}
                      </FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>

              {/* Enquiry Type field */}
              <Field name="enquiryType">
                {(prop) => {
                  const { field, form, meta } = prop;
                  return (
                    <FormControl
                      className="field"
                      isInvalid={
                        form.errors.enquiryType && form.touched.enquiryType
                      }
                    >
                      <FormLabel>Type of Enquiry</FormLabel>
                      <Select
                        name="enquiryType"
                        className="mb-0"
                        placeholder="Select an option"
                        {...field}
                      >
                        <option value={"hireMe"}>
                          Freelance Project Proposal
                        </option>
                        <option value={"openSource"}>
                          Open source consultancy session
                        </option>
                        <option value={"other"}>Other</option>
                      </Select>
                      <FormErrorMessage className="ms-3">
                        {form.errors.enquiryType}
                      </FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>

              {/* Message field */}
              <Field name="message">
                {(prop) => {
                  const { field, form, meta } = prop;
                  // console.log("props of message: ", prop)
                  return (
                    <FormControl
                      className="field"
                      name="message"
                      isInvalid={form.errors.message && form.touched.message}
                    >
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        placeholder="Enter your message..."
                        className="mb-0"
                        rows={8}
                        size="md"
                        {...field}
                      />
                      <FormErrorMessage className="ms-3">
                        {form.errors.message}
                      </FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>

              {/* Button Field */}

              <Button
                type="submit"
                colorScheme="teal"
                className="ms-3 mb-4"
                width={"full"}
                isLoading={isOpen}
                // onClick={onOpen}
              >
                Submit
              </Button>

              {/* {props.isValid? <Alert name={props.values.name}/> :null} */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactMeWithChakra_Formika;
