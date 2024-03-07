import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import world2 from '/tech.mp4';
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xh061gn",
        "template_jx3aw0d",
        formRef.current,
        "5DGV-D1rfgZA3Bc5T"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Let’s Work Together</motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>selvapandi322@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>Madurai,TamilNadu</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span>+91 9092264342</span>
          </motion.div>
        </motion.div>
        <div className="vid-con">
        <video autoPlay muted loop className="con-vid">
          <source src={world2} type="video/mp4" />
        </video>
        </div>
        <div className="formContainer">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>SUBMIT</button>
            {error && "Error"}
            {success && "Success"}
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
