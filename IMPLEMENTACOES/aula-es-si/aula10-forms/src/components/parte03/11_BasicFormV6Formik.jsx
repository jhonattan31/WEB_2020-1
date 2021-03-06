import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

export default () => {
    return (
        <Formik
            initialValues={
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                }
            }
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                })
            }
            onSubmit={
                (values, { setSubmitting }) => {
                    setTimeout(
                        () => {
                            console.log(values.firstName)
                            console.log(values.lastName)
                            console.log(values.email)
                            setSubmitting(false)
                        },
                        2000
                    )
                }
            }
        >
            {
                formik => (
                    <div>
                        <h1>Formulário Básico 11</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name: </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    className={formik.touched.firstName ? (formik.errors.firstName ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
                                    {...formik.getFieldProps('firstName')}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? <div className="invalid-feedback">{formik.errors.firstName}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name: </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    className={formik.touched.lastName ? (formik.errors.lastName ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
                                    {...formik.getFieldProps('lastName')}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? <div className="invalid-feedback">{formik.errors.lastName}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address: </label>
                                <input
                                    id="email"
                                    name="email"
                                    className={formik.touched.email ? (formik.errors.email ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
                                    {...formik.getFieldProps('email')}
                                />
                                <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                {formik.touched.email && formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit" disabled={formik.isSubmitting?true:false}>Submit</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </Formik>
    )
}