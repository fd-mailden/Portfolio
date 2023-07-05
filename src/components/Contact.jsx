import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from "../styles.js";
import EarthCanvas from "./canvas/Earth.jsx";
import {SectionWrapper} from "../hoc/SectionWrapper.jsx";
import {slideIn} from "../utils/motion.js";
import ContactSchema from '../schems/ContactShema'
import {useFormik} from 'formik'
import {toast} from 'react-toastify';
import {
    MAIL_PUBLIC_KEY,
    MAIL_TEMPlATE_ID,
    MAIL_SERVICE_ID,
    MAIL_TO_EMAIL,
    MAIL_TO_NAME
} from "../constants/variables.js";

const initialFormValue = {
    name: '',
    email: '',
    message: ''
};

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formValue) => {
        setLoading(true)
        try {
            await emailjs.send(
                MAIL_SERVICE_ID,
                MAIL_TEMPlATE_ID,
                {
                    from_name: formValue.name,
                    to_name: MAIL_TO_NAME,
                    from_email: formValue.email,
                    to_email: MAIL_TO_EMAIL,
                    message: formValue.message
                },
                MAIL_PUBLIC_KEY
            )
            setLoading(false)
            formik.resetForm();
            toast.success('🦄 Wow so easy!',);

        } catch (error) {
            setLoading(false)
            console.log(error)
            toast.error('🦄 Wow so easy!',);
        }
    }

    const formik = useFormik({
        validationSchema: ContactSchema(),
        onSubmit: handleSubmit,
        initialValues: initialFormValue,
    });

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef}
                      onSubmit={formik.handleSubmit}
                      className="mt-12 flex flex-col gap-8"
                >
                    <label className={`flex flex-col relative`}>
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input type="text"
                               name="name"
                               value={formik.values.name}
                               onChange={formik.handleChange}
                               placeholder="What`s your name ?"
                               className={`bg-tertiary py-4 px-6 placeholder:text-secondary
                               text-white rounded-lg outlined-none
                               border-none font-medium mb-[10px]`}
                               onBlur={formik.handleBlur}
                        />
                        <p className="absolute bottom-[-25px] l-0 border-b-2 border-b-red">{formik.errors.name}</p>

                    </label>
                    <label className="flex flex-col relative">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input type="email"
                               name="email"
                               value={formik.values.email}
                               onChange={formik.handleChange}
                               placeholder="What`s your email ?"
                               className="bg-tertiary py-4 px-6 placeholder:text-secondary
                               text-white rounded-lg outlined-none
                               border-none font-medium mb-[10px]"
                               onBlur={formik.handleBlur}
                        />
                        <p className="absolute bottom-[-25px] l-0 border-b-2 border-b-red">{formik.errors.email}</p>
                    </label>
                    <label className="flex flex-col relative">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            placeholder="What`s your want to say ?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary
                               text-white rounded-lg outlined-none
                               border-none font-medium mb-[20px] resize-none"
                            onBlur={formik.handleBlur}
                        />
                        <p className="absolute bottom-[-15px] l-0 border-b-2 border-b-red">{formik.errors.message}</p>
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white
                        font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas/>


            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, 'contact')