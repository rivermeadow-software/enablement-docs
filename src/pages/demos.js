import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import VMwareMigration from '/img/demo_vmware_migration.png';
import AWSMigration from '/img/demo_aws_migration.png';
import VMEMigration from '/img/demo_vme_migration.png';
import OpenShiftMigration from '/img/demo_openshift_migration.png';
import HyperVMigration from '/img/demo_hyperv_migration.png';
import Select from 'react-select'
import Heading from '@theme/Heading';
import styles from './index.module.css';

import React from 'react';

const options = [
  { value: 'mobility', label: 'Mobility' },
  { value: 'optimization', label: 'Optimization' },
  { value: 'modernization', label: 'Modernization' }
]

const technologies = [
    { value: 'aws', label: 'Amazon Web Services (AWS)' },
 //   { value: 'azure', label: 'Microsoft Azure' },
 //   { value: 'gcp', label: 'Google Cloud Platform (GCP)' },
    { value: 'hyperv', label: 'Microsoft Hyper-V' },
 //   { value: 'nutanix', label: 'Nutanix AHV' },
    { value: 'openshift', label: 'Red Hat OpenShift' },
    { value: 'vme', label: 'HPE Morpheus VM Essentials' },
    { value: 'vmware', label: 'VMware vSphere' },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          RiverMeadow Product Demos
        </Heading>
        <p className="hero__subtitle">Take a Guided Tour of the RiverMeadow Workload Mobility Platform — Explore key product capabilities with an interactive, point-and-click experience.</p>
</div>
    </header>
  );
}

const demos = [
    {
        title: 'VM migration to VMware vSphere',
        description: 'Experience a guided demo of migrating servers to VMware vSphere using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
        image: VMwareMigration,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/esajh5kbgml7?embed=popup',
        categories: ['vmware', "mobility","interactive"],
    },
    {
        title: 'VM migration to Amazon Web Services (AWS)',
        description: 'Experience a guided demo of migrating servers to Amazon Web Services (AWS) using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient cloud mobility.',
        image: AWSMigration,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/s7ci5jeropfx?embed=popup',
        categories: ['aws', "mobility","interactive"],
    },
/*    {
        title: 'Cloud migrations to Microsoft Azure',
        description: 'Experience a guided demo of migrating workloads to Microsoft Azure using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient cloud mobility.',
        image: 'https://www.techzine.eu/wp-content/uploads/2020/06/nutanix-prism.png',
        categories: ['azure', "mobility","interactive"],
  },
  {
    title: 'Cloud migrations to Google Cloud Platform',
    description: 'Experience a guided demo of migrating workloads to Google Cloud Platform (GCP) using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient cloud mobility.',
    image: 'https://www.techzine.eu/wp-content/uploads/2020/06/nutanix-prism.png',
    categories: ['gcp', "mobility","interactive"],
  },
*/
  {
    title: 'VM migration to HPE Morpheus VM Essentials',
    description: 'Experience a guided demo of migrating servers to HPE Morpheus VM Essentials using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
    image: VMEMigration,
    iframeSrc: 'https://rivermeadow.storylane.io/demo/tlywo8kgkklt?embed=popup',
    categories: ['vme', "mobility","interactive"],
  },
  {
    title: 'VM migration to Microsoft Hyper-V',
    description: 'Experience a guided demo of migrating servers to Microsoft Hyper-V using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
    image: HyperVMigration,
    iframeSrc: 'https://rivermeadow.storylane.io/demo/13gzntcd79dk?embed=popup',
    categories: ['hyperv', "mobility","interactive"],
  },
  /*
  {
    title: 'VM migrations to Nutanix AHV',
    description: 'Experience a guided demo of migrating workloads to Nutanix AHV using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
    image: NutanixMigration,
    categories: ['nutanix', "mobility","interactive"],
  },
  */
  {
    title: 'VM migration to Red Hat OpenShift',
    description: 'Experience a guided demo of migrating servers to Red Hat OpenShift using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
    image: OpenShiftMigration,
    iframeSrc: 'https://rivermeadow.storylane.io/demo/2koimciug9s1?embed=popup',
    categories: ['openshift', "mobility","interactive"],
  },
//  {
//    title: 'RHEL OS conversion to Amazon Linux',
//    description: 'Experience a guided demo of migrating servers to Red Hat OpenShift using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
//    image: OpenShiftMigration,
//    iframeSrc: 'https://rivermeadow.storylane.io/demo/gtcenwzprazs?embed=popup',
//    categories: ['aws', "modernization","interactive"],
 // },
  // Add additional demos as needed
];

function copyDemoLink(demoIframeSrc) {
    const shareableLink = demoIframeSrc.replace('?embed=popup', '');
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareableLink).then(() => {
          //  alert('Demo link copied to clipboard!');
        }, () => {
            alert('Failed to copy demo link.');
        });
    } else {
        // fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = shareableLink;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
          //  alert('Demo link copied to clipboard!');
        } catch (err) {
            alert('Failed to copy demo link.');
        }
        document.body.removeChild(textarea);
    }
}

function DemoCardWithModal({demoTitle, demoDescription, demoImage, demoIframeSrc, categories}) {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <div className="workshop-card" style={{ padding: '0px'}}>
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={demoImage} alt={demoTitle} style={{ objectFit: 'cover',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                <div className="workshop-card-content" style={{ padding: '16px' }}>
                    <div className="workshop-card-logo">
                        <h3>{demoTitle}</h3>
                    </div>
                    <div className="workshop-card-description">
                        <span className="workshop-card-text">
                            {demoDescription}
                        </span>
                        <div className="badgeRow">
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                {categories.map((category, index) => (
                                    <span key={index} className="badge">{category}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: '#0A76FD', borderColor: '#0A76FD' }}
                        onClick={() => setOpen(true)}
                    >
                        Launch Demo
                    </button>
                </div>
            </div>
            {open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div className='demoModal'
                        style={{
                            background: '#fff',
                            padding: 8,
                            width: '80%',
                            borderRadius: 8,
                            boxShadow: '0 2px 16px rgba(0,0,0,0.2)'
                        }}
                    >
                        <div className="demoModalHeader" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
                        <h2 style={{ margin: 0 }}>{demoTitle}</h2>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <p>Copied!</p>
                            <button
                                className="button button--secondary"
                                onClick={() => copyDemoLink(demoIframeSrc)}
                                style={{backgroundColor: '#000000', borderColor: '#000000', color: '#FFFFFF', marginRight: '8px'}}
                            >
                                Share Demo
                            </button>
                            <button
                                className="button button--secondary"
                                onClick={() => setOpen(false)}
                                style={{backgroundColor: '#0A76FD', borderColor: '#0A76FD', color: '#FFFFFF'}}
                            >
                                Close
                            </button>
                        </div>
                        </div>
                        <div className='demoModalIFrame'>
                            <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
                            <div className="sl-embed" style={{position:'relative',paddingBottom:'calc(62.76% + 0px)',width:'100%',height:0,transform:'scale(1)'}}>
                                <iframe loading="lazy" className="sl-demo" src={demoIframeSrc} name="sl-embed" allow="fullscreen" style={{position:'absolute',top:0,left:0,width:'100%!important',height:'100%!important',border:'1px solid rgba(63,95,172,0.35)',boxShadow:'0px 0px 18px rgba(26, 19, 72, 0.15)',boxSizing:'border-box'}}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const {siteConfig} = useDocusaurusContext();
  const [filter, setFilter] = React.useState(false);
  const [filteredDemos, setFilteredDemos] = React.useState(demos);

  function handleFilterChange(selectedOptions) {
    if (selectedOptions && selectedOptions.length > 0) {
        const selectedValues = selectedOptions.map(option => option.value);
        //demos.filter(demo => console.log('Demo categories:', demo.categories));
        setFilter(true);
        // Change filtering to match ANY selected value, not ALL
        const filtered = demos.filter(demo =>
            demo.categories.some(category => selectedValues.includes(category))
        );
        setFilteredDemos(filtered);
    } else {
        setFilteredDemos(demos);
    }
  }

  const demosToShow = filter ? filteredDemos : demos;

  return (
    <Layout
      title="RiverMeadow Product Demos"
      description="Start learning how to migrate, optimize and modernize workloads using the RiverMeadow workload mobility platform.">
      <HomepageHeader />
      <main style={{padding: 24 +'px'}}>
        <div className="homecontent">
          <div className="workshops">
            <div>
              <div className="demoFiltersGroup">
                <div className="demoFilters">
                    {/* <div className="demoFilterItem">
                        <div className="demoFilterItemTitle">Capability</div>
                         <Select id="capability-select" className="basic-multi-select" classNamePrefix="select" isMulti options={options} onChange={handleFilterChange} />
                    </div> */}
                    <div className="demoFilterItem">
                        <div className="demoFilterItemTitle">Technology</div>
                         <Select id="technology-select" className="basic-multi-select" classNamePrefix="select" isMulti options={technologies} onChange={handleFilterChange} />
                    </div>
                </div>
                </div>
              <ul className="cards-grid-list">
                {demosToShow.map((demo, index) => (
                  <li key={index}>
                    <DemoCardWithModal demoTitle={demo.title} demoDescription={demo.description} demoImage={demo.image} demoIframeSrc={demo.iframeSrc} categories={demo.categories} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="demoJourney">
          <div className="demoJourneyCard">
            <div className="demoJourneyBody">
                <div className="demoJourneyTitle">
                    <h2 style={{ color: "#ffffff", fontSize: "3.5rem", maxWidth: "80%"}}>Experience the RiverMeadow Workload Mobility Platform</h2>
                    <p style={{ color: "#ffffff", fontSize: "1.5rem", lineHeight: "150%", fontFamily: "Archivo, sans-serif"}}>Schedule a personalized demo to explore the full capabilities of the RiverMeadow platform and how it can meet your workload mobility needs.</p>
                </div>
                    <button
                        className="button button--primary"
                        style={{ marginTop: 16, height: '3.25rem', backgroundColor: '#ffffff', borderColor: '#ffffff', color: '#000000', fontWeight: '600' }}
                        onClick={() => window.open('https://www.rivermeadow.com/contact-us', '_blank')}
                    >
                        Schedule Demo
                    </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
