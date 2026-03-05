import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./StudentRegistrationForm.css";

export default class StudentRegistrationForm extends Component {

  constructor(props){
    super(props)

    this.state={
      studentData:null
    }
  }

  render() {

    const initialValues = {
      name: "",
      email: "",
      qualification: ""
    }

    const validateForm = (values) => {

      const errors = {}

      if(!values.name){
        errors.name = "Name is required"
      }

      if(!values.email){
        errors.email = "Email is required"
      } 
      else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Invalid email format"
      }

      if(!values.qualification){
        errors.qualification = "Qualification is required"
      }

      return errors
    }

    const handleSubmit = (values, {resetForm}) => {

      this.setState({
        studentData: values
      })

      resetForm()
    }

    return (

      <div className="container">

        <h2>Student Registration Form</h2>

        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleSubmit}
        >

        <Form className="form">

          <div className="form-group">
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error"/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error"/>
          </div>

          <div className="form-group">
            <label>Qualification</label>
            <Field type="text" name="qualification" />
            <ErrorMessage name="qualification" component="div" className="error"/>
          </div>

          <button type="submit">Register</button>

        </Form>

        </Formik>

        {this.state.studentData && (

          <div className="result">

            <h3>Submitted Data</h3>

            <p><b>Name:</b> {this.state.studentData.name}</p>
            <p><b>Email:</b> {this.state.studentData.email}</p>
            <p><b>Qualification:</b> {this.state.studentData.qualification}</p>

          </div>

        )}

      </div>
    )
  }
}