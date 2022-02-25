// field level validation
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Index: React.FC = (props) => {
  const validateFirstname = (value) => {
    let error;
    if (!value) {
      error = "Required";
    }
    if (value.length > 15) {
      error = "Max 15 char allowed !";
    }
    return error;
  };
  const validateLastname = (value) => {
    let error;
    if (!value) {
      error = "Required";
    }
    if (value.length > 15) {
      error = "Max 15 char allowed !";
    }
    return error;
  };
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "" }}
      onSubmit={(v) => {
        console.log(v);
      }}
    >
      <div>
        <div className="flex flex-col justify-center items-center">
          <Form>
            <div className="flex flex-col">
              <label>FirstName</label>
              <Field
                name="firstname"
                className="border-2 border-indigo-300 p-2 outline-none rounded-md "
                validate={validateFirstname}
              />

              <ErrorMessage
                name="firstname"
                render={(e) => <p className="text-red-500">{e}</p>}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label>LastName</label>
              <Field
                name="lastname"
                className="border-2 border-indigo-300 p-2 outline-none rounded-md "
                validate={validateLastname}
              ></Field>
              <ErrorMessage
                name="lastname"
                render={(e) => <p className="text-red-500">{e}</p>}
              />
            </div>
            <button
              type="submit"
              className=" p-2 bg-indigo-500 hover:bg-indigo-700 rounded-md my-2 text-white"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default Index;
