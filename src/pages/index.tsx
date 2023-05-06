import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';

import { MyCarousel } from '../components/common/carousel';
import { About } from '../container/homePage/About/About';
import { Banner } from '../container/homePage/Banner/Banner';
import { Gallery } from '../container/homePage/Gallery/Gallery';
import { Skills } from '../container/homePage/Skills/Skills';

const Index = () => (
  <>
    <ReactFullpage
      lazyLoading
      animateAnchor
      parallax
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="section "
            >
              <Banner />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.5, scale: 0.2, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="section "
            >
              <About />
            </motion.div>
            <div className="section">
              <Skills />
            </div>
            <div className="section">
              <MyCarousel />
            </div>
            <div className="section">
              <Gallery />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
      // @ts-ignore
      credits=""
    />
  </>
);

export default Index;
