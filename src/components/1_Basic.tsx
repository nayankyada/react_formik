// with simple input field
import React from "react";
import { useFormik } from "formik";
const Index: React.FC = (props) => {
  const formik = useFormik({
    initialValues: { firstname: "", lastname: "" },
    onSubmit: (v) => {
      console.log(v);
    },
  });
  console.log(formik);
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
              className="border-2 border-indigo-300 p-2 outline-none rounded-md "
            ></input>
          </div>
          <div className="flex flex-col">
            <label>LastName</label>
            <input
              name="lastname"
              id="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              className="border-2 border-indigo-300 p-2 outline-none rounded-md "
            ></input>
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
