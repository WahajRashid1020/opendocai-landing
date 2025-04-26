import Head from "next/head";
import Hero from "../components/hero";

import Features from "../components/features";
import LogoClouds from "../components/logo-clouds";
import Testimonials from "../components/testimonialscard";
import SectionTitle from "../components/sectionTitle";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <LogoClouds />
      <Features />
      <Testimonials />
      <SectionTitle pretitle="" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
    </>
  );
};

export default Home;
