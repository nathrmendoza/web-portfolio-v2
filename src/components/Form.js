import React, {useState} from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'

import FormPopup from './FormPopup'

export default function Form() {

    const [popupOpen, setPopup] = useState(false);

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
                .required("Please enter your name")
                .min(2, "Please input valid last name"),
            lname: Yup.string()
                .required("Please enter your name")
                .min(2, "Please input valid last name"),
            email: Yup.string()
                .required("Please enter your email address")
                .email("Please enter a valid email"),
            subject: Yup.string()
                .required("Please enter a subject"),
            message: Yup.string()
                .required("Please enter a message")
        }),
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, values, process.env.REACT_APP_USER_ID)
                .then((result) => {
                    console.log(`Success: ${result.text}`);
                    setPopupState();
                }, (err) => {
                    console.log(`Error: ${err.text}`);
                });
    
            //reset form fields
            formik.resetForm();
        }
    });

    const setPopupState = () => {
        setPopup(true);
        setTimeout(() => {
            setPopup(false);
        }, 3000)
    }

    const disableEnterKey = (e) => {
        if((e.charCode || e.keyCode) === 13) {
            console.log('pass');
            e.preventDefault();
        }
    }

    return (
        <>
        <FormPopup isVisible={popupOpen}/>
        <form onKeyDown={e => disableEnterKey(e)}>
            <ul className='inputs'>
                <li>
                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="fname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fname} />
                    {formik.errors.fname ? <span className='field-error'>{formik.touched.fname && formik.errors.fname}</span> : null}
                </li>
                <li>
                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="lname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lname} />
                    {formik.errors.lname ? <span className='field-error'>{formik.touched.lname && formik.errors.lname}</span> : null}
                </li>
                <li>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <span className='field-error'>{formik.touched.email && formik.errors.email}</span> : null}
                </li>
                <li>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.subject} />
                    {formik.errors.subject ? <span className='field-error'>{formik.touched.subject && formik.errors.subject}</span> : null}
                </li>
                <li>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.message}></textarea>
                    {formik.errors.message ? <span className='field-error'>{formik.touched.message && formik.errors.message}</span> : null}
                </li>
            </ul>
            <div className='btn1'>
                <span className='shadow'></span>
                <input type="submit" value="SUBMIT" onClick={formik.handleSubmit} />
            </div>
        </form>
        </>
    )
}
