import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <section className={`${classes.hero}`}>
      <div className={classes["hero__background"]}>
        <div className={classes["hero__text"]}>
          <h1> ClearMyPantry</h1>
          <div className={classes["hero__description"]}>
            <p>Not sure what to do with ingredients left in your pantry?</p>
            <p>
              Don't let it go to waste and use this simple recipe generator for
              ideas!
            </p>
          </div>
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
