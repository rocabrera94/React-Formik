import React, {useState} from 'react'
import { useFormik } from 'formik'
import './Signup.css'
import { convertLength } from '@mui/material/styles/cssUtils'
import * as Yup from 'yup'

const Signup = () => {
    
    
    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15,'Must be 15 characters or less').required('Required'),
            lastName: Yup.string().max(20,'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    console.log(formik.errors)
  return (
    <form onSubmit={formik.handleSubmit}>
        <div className='input-container'>
            <input 
                id='firstName'
                name='firstName'
                type='text'
                placeholder='First Name'
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
            />
            {(formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p>:null)}

            <input 
                id='lastName'
                name='lastName'
                type='text'
                placeholder='Last Name'
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
            />
            {(formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p>:null)}
            <input 
                id='email'
                name='email'
                type='text'
                placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
            {(formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>:null)}
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Signup