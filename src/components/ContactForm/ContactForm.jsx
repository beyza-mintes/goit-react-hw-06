import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from 'nanoid';
import *as Yup from 'yup'
import styles from './ContactForm.module.css'

const ContactForm = ({ onAddContact }) => {

    const initialValues = { name: '', number: '' }

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required')
            .min(3, 'Min 3 characters')
            .max(50, 'Max 50 characters'),
        number: Yup.string()
            .required('Required')
            .min(3, 'Min 3 characters')
            .max(50, 'Max 50 characters'),
    });

    const handleSubmit = (values, { resetForm }) => {

        const newPerson = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        onAddContact(newPerson);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form className={styles.form}>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" />

                <label htmlFor="number">Number</label>
                <Field id="number" name="number" />
                <ErrorMessage name="number" component="div" />

                <button type='submit'>Add Contact</button>

            </Form>
        </Formik>
    )
}

export default ContactForm