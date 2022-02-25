// here formik validate on each keystrock and display errors of each field whether field is changed by user or not so we can track this field by touched also we have to pass onblur to track touched
import React from "react";
import { useFormik } from "formik";
const Index: React.FC = (props) => {
  const validate = (values) => {
    const errors: { firstname: string; lastname: string } = {
      firstname: "",
      lastname: "",
    };
    if (!values.firstname) {
      errors.firstname = "Required";
    } else if (values.firstname.length > 15) {
      errors.firstname = "Max 15 char allowed";
    }
    if (!values.lastname) {
      errors.lastname = "Required";
    } else if (values.lastname.length > 15) {
      errors.lastname = "Max 15 char allowed";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: { firstname: "", lastname: "" },
    onSubmit: (v) => {
      console.log(v);
    },
    validate: validate,
  });
  console.log(formik)
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <label>FirstName</label>
            <input
              name="firstname"
              id="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border-2 border-indigo-300 p-2 outline-none rounded-md "
            ></input>

            {(formik.touched.firstname && formik.errors.firstname) ? (
              <p className="text-red-500">{formik.errors.firstname} </p>
            ) : ""}
          </div>
          <div className="flex flex-col mt-2">
            <label>LastName</label>
            <input
              name="lastname"
              id="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              onBlur={formik.handleBlur}

              className="border-2 border-indigo-300 p-2 outline-none rounded-md "
            ></input>
            {(formik.touched.lastname && formik.errors.lastname) ? (
              <p className="text-red-500">{formik.errors.lastname}</p>
            ):""}
          </div>
          <button
            type="submit"
            className=" p-2 bg-indigo-500 hover:bg-indigo-700 rounded-md my-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
