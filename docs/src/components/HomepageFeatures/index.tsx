import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Declarative',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will
        efficiently update and render just the right components when your data changes. <br /><br />
        Declarative views make your code more predictable and easier to debug.
      </>
    ),
  },
  {
    title: 'Component-Based',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Build encapsulated components that manage their own state, then compose them to make complex UIs.<br /><br />
        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
      </>
    ),
  },
  {
    title: 'Learn Once, Write Anywhere',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. <br /><br />
      React can also render on the server using Node and power mobile apps using React Native.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
