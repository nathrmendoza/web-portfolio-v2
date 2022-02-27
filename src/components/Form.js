import React, {useState} from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'

import FormPopup from './FormPopup'

export default function Form() {

    const [popupOpen, setPopup] = useState(false);

    const formik = useFormik({
        initialValues: {
            person_name: "",
            person_email: "",
            email_subject: "",
            email_message: ""
        },
        validationSchema: Yup.object({
            person_name: Yup.string()
                .required("Please enter your name"),
            person_email: Yup.string()
                .required("Please enter your email address")
                .email("Please enter a valid email"),
            email_subject: Yup.string()
                .required("Please enter a subject"),
            email_message: Yup.string()
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
                    <label htmlFor="person_name">Your name</label>
                    <input type="text" id="person_name" name="person_name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.person_name} />
                    {formik.errors.person_name ? <span className='field-error'>{formik.touched.person_name && formik.errors.person_name}</span> : null}
                </li>
                <li>
                    <label htmlFor="person_email">Email Address</label>
                    <input type="email" id="person_email" name="person_email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.person_email} />
                    {formik.errors.person_email ? <span className='field-error'>{formik.touched.person_email && formik.errors.person_email}</span> : null}
                </li>
                <li>
                    <label htmlFor="email_subject">Subject</label>
                    <input type="text" id="email_subject" name="email_subject" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email_subject} />
                    {formik.errors.email_subject ? <span className='field-error'>{formik.touched.email_subject && formik.errors.email_subject}</span> : null}
                </li>
                <li>
                    <label htmlFor="email_message">Message</label>
                    <textarea name="email_message" id="email_message" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email_message}></textarea>
                    {formik.errors.email_message ? <span className='field-error'>{formik.touched.email_message && formik.errors.email_message}</span> : null}
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
