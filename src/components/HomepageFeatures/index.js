import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Built by the Community",
    Svg: require("@site/static/img/undraw_pair-programming_up7w.svg").default,
    description: (
      <>
        BryanBot is built by the Community, for the Community. We are very open
        for feedback and suggestions for new features.
      </>
    ),
  },
  {
    title: "Innovative Features",
    Svg: require("@site/static/img/undraw_version-control_eiam.svg").default,
    description: (
      <>
        BryanBot has a lot of innovative features that make sure that
        development for the bot is as easy and fast.
      </>
    ),
  },
  {
    title: "New Features",
    Svg: require("@site/static/img/undraw_adventure-map_8hg8.svg").default,
    description: (
      <>
        BryanBot is always getting new features and updates to make make
        everyone's experience better.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
