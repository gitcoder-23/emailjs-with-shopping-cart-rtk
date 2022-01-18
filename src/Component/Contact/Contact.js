import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
  const formik = useFormik({
    //we have created our initailValues object in a format EmailJS accepts
    initialValues: {
      name: '', //user name
      to_name: 'milanparua9999@gmail.com', //email id of the admin
      email: '', // user email
      phone: '', // user phone
      message: '', //user message
    },
    validationSchema: Yup.object({
      name: Yup.string().required('* Name field is required'),
      phone: Yup.string().required('* phone field is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('* Email field is required'),
      message: Yup.string().required('* Message field is required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log('values', values);
      // Email JS code will go here
      emailjs
        .send(
          'service_lbebnu9',
          'template_kgoddia',
          values,
          'user_3go4cBJdnoUmr6l7Ukkdh'
        )
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
          });
          setSubmitting(false);
          resetForm();
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          });
          setSubmitting(false);
        });
    },
  });

  return (
    <div>
      <div class="container contact-form">
        <div class="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <h3>Drop Us a Message</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  placeholder="Your Name *"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <div
                  className={`expandable ${
                    formik.touched.name && formik.errors.name ? 'show' : ''
                  }`}
                >
                  {formik.errors.name}
                </div>
              </div>

              <div class="form-group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="form-control"
                  placeholder="Your Email *"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div
                  className={`expandable ${
                    formik.touched.email && formik.errors.email ? 'show' : ''
                  }`}
                >
                  {formik.errors.email}
                </div>
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  class="form-control"
                  placeholder="Your Phone Number *"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                <div
                  className={`expandable ${
                    formik.touched.phone && formik.errors.phone ? 'show' : ''
                  }`}
                >
                  {formik.errors.phone}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  placeholder="Your Message *"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>
                <div
                  className={`expandable ${
                    formik.touched.message && formik.errors.message
                      ? 'show'
                      : ''
                  }`}
                >
                  {formik.errors.message}
                </div>
              </div>
            </div>
            <input
              disabled={formik.isSubmitting}
              type="submit"
              value="Send query"
              className="form-control btn btn-primary"
              style={{ marginTop: '30px' }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
