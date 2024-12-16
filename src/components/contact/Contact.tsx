import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    // Define validation schema using Yup
    const validationSchema = Yup.object({
        fullName: Yup.string()
            .required('Full Name is required')
            .min(3, 'Full Name must be at least 3 characters long'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        message: Yup.string()
            .required('Message is required')
            .min(10, 'Message must be at least 10 characters long'),
    });

    return (
        <Formik
            initialValues={{ fullName: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                // Handle form submission (e.g., send form data to a server)
                console.log(values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="h-screen">
                    <div className="container mx-auto h-full flex items-end justify-center">
                        <div className="h-3/4 w-full">
                            <div className="h-full pt-4 flex items-center justify-center flex-col gap-4">
                                <Field
                                    type="text"
                                    name="fullName"
                                    className="outline-none p-3 w-2/4 bg-white shadow-lg border-customBlue border-t-2 focus:shadow-2xl"
                                    placeholder="Full Name"
                                />
                                <ErrorMessage name="fullName" component="div" className="text-red-500" />
                                
                                <Field
                                    type="email"
                                    name="email"
                                    className="outline-none p-3 w-2/4 bg-white shadow-lg focus:shadow-2xl"
                                    placeholder="Email"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                                
                                <Field
                                    as="textarea"
                                    name="message"
                                    className="outline-none p-3 w-2/4 bg-white shadow-lg focus:shadow-2xl"
                                    placeholder="Enter your message"
                                    rows={10}
                                />
                                <ErrorMessage name="message" component="div" className="text-red-500" />

                                <button
                                    className="md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-green-400 hover:bg-green-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </button>

                                <div className="p-2 mt-4 w-full h-2/4 flex items-center justify-center">
                                    <address className="text-customBlue text-2xl">
                                        Asian Sun City, 309, B Block,<br />
                                        <span className="text-lg"> Forest Dept Colony, Kondapur,<br />
                                            Hyderabad, Telangana 500084</span> <br />
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Contact;
