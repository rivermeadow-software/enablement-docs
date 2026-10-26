import clsx from 'clsx';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function TroubleshooterHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          RiverMeadow Troubleshooter
        </Heading>
        <p className="hero__subtitle">
          Work through guided diagnostic paths for common migration issues — each one ends in a likely cause, fix
          steps, and an escalation option with your full trace attached.
        </p>
      </div>
    </header>
  );
}

export default function TroubleshooterPage() {
  return (
    <Layout
      title="RiverMeadow Troubleshooter"
      description="Guided troubleshooting for the RiverMeadow Workload Mobility Platform.">
      <TroubleshooterHeader />
      <main style={{ padding: 24 + 'px' }}>
        <div className="homecontent">
          <div className="workshops">
            <BrowserOnly fallback={<div>Loading troubleshooter…</div>}>
              {() => {
                const Troubleshooter = require('@site/src/components/Troubleshooter').default;
                return <Troubleshooter />;
              }}
            </BrowserOnly>
          </div>
        </div>
      </main>
    </Layout>
  );
}
