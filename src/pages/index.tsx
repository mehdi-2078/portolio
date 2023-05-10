import ReactFullpage from '@fullpage/react-fullpage';
import { motion, useScroll } from 'framer-motion';

import { MyCarousel } from '../components/common/carousel';
import { Experiences } from '../components/experiences/experiences';
import { About } from '../container/homePage/About/About';
import { Banner } from '../container/homePage/Banner/Banner';
import { Contact } from '../container/homePage/Contact/Contact';
import { Gallery } from '../container/homePage/Gallery/Gallery';
import { Skills } from '../container/homePage/Skills/Skills';

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ReactFullpage
        lazyLoading
        animateAnchor
        parallax
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <motion.path
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ pathLength: scrollYProgress }}
              />
              <motion.div className="section" id="home">
                <Banner />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5, scale: 0.2, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="section "
                id="about"
              >
                <About />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5, scale: 0.2, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="section "
              >
                <Skills />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5, scale: 0.2, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="section "
              >
                <MyCarousel />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5, scale: 0.2, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="section "
              >
                <Experiences />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5, scale: 0.2, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="section "
              >
                <Gallery />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5, scale: 0.2, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="section "
              >
                <Contact />
              </motion.div>
            </ReactFullpage.Wrapper>
          );
        }}
        // @ts-ignore
        credits=""
      />
    </>
  );
};
export default Index;
