// insted of using <input/> formik provide <Field/>,<Form/>,<ErrorMessage component which auto bind all props
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Index: React.FC = (props) => {
  const validateSchema = Yup.object({
    firstname: Yup.string().required("Required").max(15, "Max 15 char allowed"),
    lastname: Yup.string().required("Required").max(15, "Max 15 char allowed"),
  });
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "" }}
      onSubmit={(v) => {
        console.log(v);
      }}
      validationSchema={validateSchema}
    >
      <div>
        <div className="flex flex-col justify-center items-center">
          <Form>
            <div className="flex flex-col">
              <label>FirstName</label>
              <Field
                name="firstname"
                className="border-2 border-indigo-300 p-2 outline-none rounded-md "
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
