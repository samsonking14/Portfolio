import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import aqua from '/aqua.png';
import Gemini from '/gemini.png';
import Netflix from '/netflix.png';
import youtube from '/you_tube.png';

const items = [
  {
    id: 1,
    title: "Aquarium-Shop",
    img: aqua,
    desc: "Fish buy & sell E-commerce Site. My Final project of Full Stack web devlopment.Use tools for (Vite+React,ExpressJs,NodeJs,Mongodb).",
    href:'https://aquarium-shop.netlify.app/',
  },
  {
    id: 2,
    title: "Gemini-Clone",
    img: Gemini,
    desc: "Gemini AI Clone FrontEnd. use tools for (Vite+React,Google GeminiAPI)",
    href:'https://gemini-clone12.netlify.app/',
  },
  {
    id: 3,
    title: "Netflix-Clone",
    img: Netflix,
    desc: "Netflix Clone Full Stack web devlopment. use tools for (Vite+React,FirebaseAPI,ExpressJs,NodeJs)",
    href:'https://netflix-clone14.netlify.app/',
  },
  {
    id: 4,
    title: "Youtube-Clone",
    img: youtube,
    desc: "Youtube Clone FrontEnd. use tools for (Vite+React,GoogleAPI)",
    href:'https://you-vid.netlify.app/',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href}>
              <button>Live Preview</button>
              </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
