import classes from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about_section" className={classes.container}>
      <h1 className={classes.heading}>About Me</h1>
      <div className={classes.content}>
        <p className={classes.description}>
          I’m a front-end developer with around 3 years of experience working
          with React.js and React Native, building clean, responsive, and
          high-performance applications. I care deeply about user experience and
          love crafting smooth, modern interfaces that just work — whether it’s
          a mobile app or a web dashboard.
        </p>
        <p className={classes.description}>
          My journey began in 2022, and since then, I’ve had the chance to work
          on a variety of projects, from hybrid mobile apps to scalable web
          platforms. I’ve worked extensively with TypeScript, Redux Toolkit, RTK
          Query, and RESTful APIs, and I enjoy solving real-world problems with
          clean, maintainable code.
        </p>
        <p className={classes.description}>
          Currently, I'm working as a Senior Engineer at Nagarro, where I
          collaborate with cross-functional teams to deliver reliable and fast
          user experiences. From integrating WebSockets for live ride tracking
          to building reusable UI components, I’m always looking to push things
          a bit further.
        </p>
        <p className={classes.description}>
          I'm comfortable using tools like Vite, ESLint, Git, Figma, Postman,
          and Testing Libraries, and I strive to write code that’s both testable
          and scalable.
        </p>
        <p className={classes.description}>
          I’m open to freelance opportunities and side gigs — feel free to reach
          out!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
