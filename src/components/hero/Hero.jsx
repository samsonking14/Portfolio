import "./hero.scss";
import { motion } from "framer-motion";
import world from '/dark.mp4';
import resume from '/SELVAPANDI.pdf';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {

  return (
    <div className="hero">
      <div className="wrapper">
        <video autoPlay muted loop className="hero-vid">
          <source src={world} type="video/mp4" />
        </video>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SELVAPANDI</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer<br /> (MERN)
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href='#Portfolio'>See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
            <motion.button variants={textVariants}>
              <a href={resume} download='SELVAPANDI.pdf'>Hire Me</a>
              </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="/header-img.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
