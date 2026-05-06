import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AWS from '/img/rivermeadow_aws.png';
import Azure from '/img/rivermeadow_microsoft_azure.png';
import GCP from '/img/rivermeadow_gcp.png';
import HPE from '/img/hpe.svg';
import RiverMeadow from '/img/favicon.png';
import OpenShift from '/img/rivermeadow_openshift.png';
import Nutanix from '/img/rivermeadow_nutanix.png';
import RiverMeadowFundamentals from '/img/rivermeadow_fundamentals.png';
import RiverMeadowAdvanced from '/img/rivermeadow_advanced.png';
import RiverMeadowVME from '/img/rivermeadow_hpe_morpheus_vme.png';

//import React from 'react';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
</div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Workload Mobility Platform"
      description="Start learning how to migrate, optimize and modernize workloads using the RiverMeadow workload mobility platform.">
      <HomepageHeader />
      <main style={{padding: 24 +'px'}}>
        <div className="homecontent">
          <div className="workshops">
            <div>
              <div className="card-section-header">
                <h1 nav-label="General" id="general">Introduction to RiverMeadow</h1>
                <p className='subheader-text'>Learn about the fundamentals of the RiverMeadow platform and how it can be used to migrate, optimize, and modernize workloads.</p>
              </div>
              <ul className="demos-grid-list">
                <li>
                  <div className="workshop-card" style={{ padding: '0px'}}>
                    <a aria-label="Get Started" className="card-link-anchor" href="/courses/fundamentals/introduction"><span aria-hidden="true">&nbsp;</span></a>
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={RiverMeadowFundamentals} alt="RiverMeadow Fundamentals" style={{ objectFit: 'stretch',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                    <div className="workshop-card-content" style={{ padding: '16px' }}>
                      <div className="workshop-card-logo">
                        <h3>RiverMeadow Fundamentals</h3>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn about the RiverMeadow platform and the platform's migration, optimization, and modernization features.</span>
                      </div>
                    <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: '#0A76FD', borderColor: '#0A76FD' }}
                        onClick={() => setOpen(true)}
                    >Launch Course
                    </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card-disabled" style={{ padding: '0px'}}>
                    {/* <a aria-label="Get Started - AWS" className="card-link-anchor" href="/courses/fundamentals/introduction"><span aria-hidden="true">&nbsp;</span></a> */}
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={RiverMeadowAdvanced} alt="RiverMeadow Advanced" style={{ objectFit: 'stretch',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <h3>RiverMeadow Advanced</h3>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn about the technical details of the RiverMeadow platform such as architecture, components, and deployment.</span>
                      </div>
                      <div>
                         <span className="coming-soon-badge">Coming Soon</span>
                      </div>
                        <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: 'lightgray', borderColor: 'lightgray' }}
                    >Launch Course
                    </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="card-section-header">
                <h1 nav-label="Public Cloud" id="publiccloud">Public Cloud Workload Mobility</h1>
                <p className='subheader-text'>Migrate Windows and Linux servers from any environment (physical, virtual, or cloud) to one of the public clouds supported by the RiverMeadow platform.</p>
              </div>
              <ul className="demos-grid-list">
                <li>
                  <div className="workshop-card-disabled" style={{ padding: '0px'}}>
                    {/* <a aria-label="Get Started - AWS" className="card-link-anchor" href="/courses/fundamentals/introduction"><span aria-hidden="true">&nbsp;</span></a> */}
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={AWS} alt="Amazon Web Services (AWS)" style={{ objectFit: 'stretch',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <h3>Amazon Web Services (AWS)</h3>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to Amazon Web Services (AWS) utilizing the RiverMeadow platform.</span>
                      </div>
                      <div>
                         <span className="coming-soon-badge">Coming Soon</span>
                      </div>
                        <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: 'lightgray', borderColor: 'lightgray' }}
                    >Launch Course
                    </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card-disabled" style={{ padding: '0px'}}>
                    {/* <a aria-label="Get Started - Microsoft Azure" className="card-link-anchor" href="/courses/fundamentals/introduction"><span aria-hidden="true">&nbsp;</span></a> */}
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={Azure} alt="Microsoft Azure" style={{ objectFit: 'stretch',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <h3>Microsoft Azure</h3>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to Microsoft Azure utilizing the RiverMeadow platform.</span>
                      </div>
                      <div>
                         <span className="coming-soon-badge">Coming Soon</span>
                      </div>
                        <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: 'lightgray', borderColor: 'lightgray' }}
                    >Launch Course
                    </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card-disabled" style={{ padding: '0px'}}>
                    {/* <a aria-label="Get Started - Google Cloud Platform (GCP)" className="card-link-anchor" href="/courses/fundamentals/introduction"><span aria-hidden="true">&nbsp;</span></a> */}
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={GCP} alt="Google Cloud Platform (GCP)" style={{ objectFit: 'stretch',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <h3>Google Cloud Platform (GCP)</h3>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to Google Cloud Platform (GCP) utilizing the RiverMeadow platform.</span>
                      </div>
                      <div>
                         <span className="coming-soon-badge">Coming Soon</span>
                      </div>
                        <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: 'lightgray', borderColor: 'lightgray' }}
                    >Launch Course
                    </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="card-section-header">
                <h1 nav-label="Private Cloud" id="privatecloud">On-Premises Workload Mobility</h1>
                <p className='subheader-text'>Migrate Windows and Linux servers from any environment (physical, virtual, or cloud) to one of the on-premises or cloud hosted hypervisors supported by the RiverMeadow platform.</p>
              </div>
              <ul className="demos-grid-list">
                <li>
                  <div className="workshop-card" style={{ padding: '0px'}}>
                     <a aria-label="Get Started" className="card-link-anchor" href="/courses/hpe-morpheus-vm-essentials/introduction"><span aria-hidden="true">&nbsp;</span></a>
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={RiverMeadowVME} alt="HPE Morhpeus VM Essentials" style={{ objectFit: 'stretch',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                    <div className="workshop-card-content" style={{ padding: '16px' }}>
                      <div className="workshop-card-logo">
                        <h3>HPE Morpheus VM Essentials</h3>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn about the RiverMeadow platform and the platform's migration, optimization, and modernization features.</span>
                      </div>
                    <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: '#0A76FD', borderColor: '#0A76FD' }}
                    >Launch Course
                    </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card-disabled" style={{ padding: '0px'}}>
                    {/* <a aria-label="Get Started - OpenShift" className="card-link-anchor" href="/courses/openshift/introduction"><span aria-hidden="true">&nbsp;</span></a> */}
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={OpenShift} alt="Red Hat OpenShift" style={{ objectFit: 'stretch',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <h3>OpenShift Virtualization</h3>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to Red Hat OpenShift Virtualization utilizing the RiverMeadow platform.</span>
                      </div>
                      <div>
                         <span className="coming-soon-badge">Coming Soon</span>
                      </div>
                        <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: 'lightgray', borderColor: 'lightgray' }}
                    >Launch Course
                    </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card-disabled" style={{ padding: '0px'}}>
                    {/* <a aria-label="Get Started - Nutanix AHV" className="card-link-anchor" href="/courses/fundamentals/introduction"><span aria-hidden="true">&nbsp;</span></a> */}
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={Nutanix} alt="Nutanix AHV" style={{ objectFit: 'stretch',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <h3>Nutanix AHV</h3>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to Nutanix AHV utilizing the RiverMeadow platform.</span>
                      </div>
                      <div>
                         <span className="coming-soon-badge">Coming Soon</span>
                      </div>
                        <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: 'lightgray', borderColor: 'lightgray' }}
                    >Launch Course
                    </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
       {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
