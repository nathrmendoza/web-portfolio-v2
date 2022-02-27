import React from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'

export default function Form() {
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            subject: "",
            message: ""
        },
        validationSchema: Yup.object({
            fname: Yup.string()
                .min(2, "Please input valid name")
                .required("Required field"),
            lname: Yup.string()
                .min(2, "Please input valid name")
                .required("Required field"),
            email: Yup.string()
                .email("Please input your valid email")
                .required("Required field"),
            subject: Yup.string()
                .required('Required subject for email'),
            message: Yup.string()
                .required("Required message for email")
                // .min(20, "Must be a minimum of 20 characters")
        }),
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, values, process.env.REACT_APP_USER_ID)
                .then((result) => {
                    console.log(`Success: ${result.text}`);
                }, (err) => {
                    console.log(`Error: ${err.text}`);
                });
    
            //reset form fields
            formik.resetForm();
        }
    });

    const disableEnterKey = (e) => {
        if((e.charCode || e.keyCode) === 13) {
            e.preventDefault();
        }
    }

    return (
        <form onKeyDown={e => disableEnterKey(e)}>
            <ul className='inputs'>
                <li>
                    <input type="text" placeholder="First Name" name="fname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fname} />
                    {formik.errors.fname ? <span className='field-error'>{formik.touched.fname && formik.errors.fname}</span> : null}
                </li>
                <li>
                    <input type="text" placeholder="Last Name" name="lname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lname} />
                    {formik.errors.lname ? <span className='field-error'>{formik.touched.lname && formik.errors.lname}</span> : null}
                </li>
                <li>
                    <input type="email" placeholder="Email Address" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <span className='field-error'>{formik.touched.email && formik.errors.email}</span> : null}
                </li>
                <li>
                    <input type="text" placeholder="Subject" name="subject" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.subject} />
                    {formik.errors.subject ? <span className='field-error'>{formik.touched.subject && formik.errors.subject}</span> : null}
                </li>
                <li>
                    <textarea name="message" placeholder="Message" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.message}></textarea>
                    {formik.errors.message ? <span className='field-error'>{formik.touched.message && formik.errors.message}</span> : null}
                </li>
            </ul>
            <input type="submit" value="SUBMIT" onClick={formik.handleSubmit} />
        </form>
    )
}
