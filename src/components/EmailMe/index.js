import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Field } from "formik";
import * as Yup from "yup";

export const EmailMe = ({ setModalOpen }) => {
  const EmailSchema = Yup.object().shape({
    subject: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string()
      .min(2, "Too Short!")
      .max(10240, "Too Long!")
      .required("Required"),
  });

  const SERVICE_ID = "service_bo7jytc";
  const TEMPLATE_ID = "template_wohedqv";
  const PUBLIC_KEY = "JRAcSIFkbRCAWyAxf";

  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setModalOpen(() => true);
  };

  return (
    <div className="flex justify-center px-3 sm:pt-4">
      <div className=" w-full sm:w-1/2 ">
        <Formik
          initialValues={{
            subject: "",
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={EmailSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            sendEmail();
            resetForm();
          }}
        >
          {({ errors, touched, isSubmitting, dirty, handleSubmit }) => (
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-4"
            >
              <div className="flex flex-col pt-4 ">
                <label className="flex text-left font-bold pb-2">
                  Subject
                  {errors.subject && touched.subject ? (
                    <div className="pl-1 font-bold italic text-red-600">
                      {errors.subject}
                    </div>
                  ) : null}
                </label>
                <Field
                  name="subject"
                  className="h-12 border border-gray-200 shadow-md pl-2 "
                />
              </div>

              <div className="flex flex-col">
                <label className="flex text-left font-bold pb-2">
                  Name
                  {errors.name && touched.name ? (
                    <div className="pl-1 font-bold italic text-red-600">
                      {errors.name}
                    </div>
                  ) : null}
                </label>
                <Field
                  name="name"
                  className="h-12 border border-gray-200 shadow-md pl-2"
                />
              </div>

              <div className="flex flex-col">
                <label className="flex text-left font-bold pb-2">
                  Email
                  {errors.email && touched.email ? (
                    <div className="pl-1 font-bold italic text-red-600">
                      {errors.email}
                    </div>
                  ) : null}
                </label>
                <Field
                  name="email"
                  className="h-12 border border-gray-200 shadow-md pl-2"
                />
              </div>

              <div className="flex flex-col">
                <label className="flex text-left font-bold pb-2 ">
                  Message
                  {errors.message && touched.message ? (
                    <div className="pl-1 font-bold italic text-red-600">
                      {errors.message}
                    </div>
                  ) : null}
                </label>

                <Field
                  component="textarea"
                  className="h-40 resize-none border border-gray-200 shadow-md pl-2 pt-2"
                  name="message"
                />
              </div>

              <button
                type="submit"
                value="Send"
                className="w-20 self-center bg-yellow-400 text-black rounded-lg mt-2 text-lg px-3 py-1 hover:bg-yellow-300 disabled:opacity-75 disabled:bg-yellow-400"
                disabled={!dirty || isSubmitting}
              >
                Send
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
