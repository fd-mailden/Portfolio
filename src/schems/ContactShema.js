import {object, string,} from "yup";

const ContactSchema = () =>
    object().shape({
        name: string()
            .min(4, 'min size 4 letters ')
            .max(20, 'max size 20 letters')
            .required('empty field'),
        email: string()
            .email()
            .required('empty field'),
        message: string()
            .min(20, 'min size 20 letters')
            .max(200, 'error')
            .required('empty field'),

    });

export default ContactSchema;
