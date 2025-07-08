import { ArrowCircleDownIcon, OrgamiVectorIcon } from '@/assets/Icons';
import classes from './HeroSection.module.css';

const Hero = () => {
  return (
    <section id="hero_section" className={classes.container}>
      <div className={classes.content}>
        <p className={classes.fullName}>Sirajul Arfin</p>
        <p className={classes.title}>
          And I’m a <strong>Frontend Developer</strong>
        </p>
        <p className={classes.subtitle}>
          with around 3 years of experience in <strong>React.js</strong> and{' '}
          <strong>React Native</strong>. I love creating clean, responsive UIs
          and building fast, user-friendly apps for web and mobile.
        </p>
        <div className={classes.buttonWrapper}>
          <button
            aria-label="Download Resume"
            className={classes.getResumeButton}
          >
            Get My Resume
            <ArrowCircleDownIcon />
          </button>
        </div>
      </div>
      <OrgamiVectorIcon />
    </section>
  );
};

export default Hero;
