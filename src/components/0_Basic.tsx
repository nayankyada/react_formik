import React from "react";
import { useFormik } from "formik";
const Index: React.FC = (props) => {
  const formik = useFormik({
    initialValues: { firstname: "", lastname: "" },
    onSubmit: (v) => {
      console.log(v);
    },
  });
  console.log(formik)
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <label>FirstName</label>
          <input className="border-2 border-indigo-300 p-2 outline-none rounded-md "></input>
        </div>
        <div className="flex flex-col">
          <label>LastName</label>
          <input className="border-2 border-indigo-300 p-2 outline-none rounded-md "></input>
        </div>
        <button type="submit" className=" p-2 bg-indigo-500 hover:bg-indigo-700 rounded-md my-2 text-white">Submit</button>
      </div>
    </div>
  );
};

export default Index;
