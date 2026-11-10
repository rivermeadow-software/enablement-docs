import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import Layout from '@theme/Layout';
import VMwareMigration from '/img/demo_vmware_migration.png';
import AWSMigration from '/img/demo_aws_migration.png';
import AWSTransform from '/img/demo_aws_transform.png';
import VMEMigration from '/img/demo_vme_migration.png';
import OpenShiftMigration from '/img/demo_openshift_migration.png';
import HyperVMigration from '/img/demo_hyperv_migration.png';
import GoogleCloudMigration from '/img/google_cloud_migration.jpg';
import GCEMigration from '/img/demo_gcp_migration.png';
import VMEWindowsModernization from '/img/demo_vme_windows_modernization.png';
import AzureWindowsModernization from '/img/demo_azure_windows_modernization.png';
import NutanixMigration from '/img/demo_nutanix_migration.png';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import React, { useState } from "react";
import Tooltip from '../components/Tooltip';
const useCases = [
  { value: 'discovery', label: 'Discovery' },
  { value: 'mobility', label: 'Mobility' },
  { value: 'optimization', label: 'Optimization' },
  { value: 'modernization', label: 'Modernization' }
];

const formats = [
    { value: 'interactive', label: 'Interactive Demo' },
    { value: 'video', label: 'Video' },
];

const technologies = [
    { value: 'aws', label: 'Amazon Web Services (AWS)' },
    { value: 'azure', label: 'Microsoft Azure' },
    { value: 'gcp', label: 'Google Cloud Platform (GCP)' },
    { value: 'hyperv', label: 'Microsoft Hyper-V' },
    { value: 'nutanix', label: 'Nutanix AHV' },
    { value: 'openshift', label: 'Red Hat OpenShift' },
    { value: 'vme', label: 'HPE Morpheus VM Essentials' },
    { value: 'vmware', label: 'VMware vSphere' },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={clsx(styles.heroInner, styles.heroInnerSingle)}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Product demos</span>
          <Heading as="h1" className={styles.heroTitle}>
            RiverMeadow Product Demos
          </Heading>
          <p className={styles.heroSubtitle}>
            View video demos or take guided tours of the RiverMeadow Workload Mobility Platform — Explore key product capabilities.
          </p>
          <div className={styles.heroActions}>
            <Link className={clsx(styles.btn, styles.btnPrimary)} to="#demos">
              Browse demos
            </Link>
            <Link className={clsx(styles.btn, styles.btnGhost)} href="https://www.rivermeadow.com/contact-us">
              Schedule a live demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const demos = [   
    {
        title: 'VM Migration to VMware vSphere',
        description: 'Experience a guided demo of migrating servers to VMware vSphere using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
        image: VMwareMigration,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/esajh5kbgml7?embed=popup',
        demoType: 'interactive',
        categories: ['vmware', "mobility","interactive"],
    },
    {
        title: 'VM Migration to Amazon Web Services (AWS)',
        description: 'Experience a guided demo of migrating servers to Amazon Web Services (AWS) using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient cloud mobility.',
        image: AWSMigration,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/s7ci5jeropfx?embed=popup',
        demoType: 'interactive',
        categories: ['aws', "mobility","interactive"],
    },
    {
        title: 'RiverMeadow AWS Transform Integration',
        description: 'Gain optimization and modernization insights as well as accelerate AWS migrations by integrating AWS Transform with the RiverMeadow platform.',
        image: AWSTransform,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/ypbalenv94tc?embed=popup',
        demoType: 'interactive',
        categories: ['aws', "discovery","interactive"],
    },

//   {
//         title: 'Cloud migrations to Microsoft Azure',
//         description: 'Experience a guided demo of migrating workloads to Microsoft Azure using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient cloud mobility.',
//         image: AWSMigration,
//         iframeSrc: 'https://rivermeadow.storylane.io/demo/2hsmo1gf63dz?embed=popup',
//         demoType: 'interactive',
//         categories: ['azure', "mobility","interactive"],
//   },
    {
        title: 'VM Migration to HPE Morpheus VM Essentials',
        description: 'Experience a guided demo of migrating servers to HPE Morpheus VM Essentials using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
        image: VMEMigration,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/tlywo8kgkklt?embed=popup',
        demoType: 'interactive',
        categories: ['vme', "mobility","interactive"],
    },
    {
        title: 'VM Migration to Microsoft Hyper-V',
        description: 'Experience a guided demo of migrating servers to Microsoft Hyper-V using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
        image: HyperVMigration,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/13gzntcd79dk?embed=popup',
        demoType: 'interactive',
        categories: ['hyperv', "mobility","interactive"],
    },
    {
        title: 'VM Migration to Nutanix AHV',
        description: 'Experience a guided demo of migrating workloads to Nutanix AHV using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
        image: NutanixMigration,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/srpuqzqes5sk?embed=popup',
        demoType: 'interactive',
        categories: ['nutanix', "mobility","interactive"],
    },
    {
        title: 'VM Migration to Red Hat OpenShift',
        description: 'Experience a guided demo of migrating servers to Red Hat OpenShift using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
        image: OpenShiftMigration,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/2koimciug9s1?embed=popup',
        demoType: 'interactive',
        categories: ['openshift', "mobility","interactive"],
    },
    {
        title: 'VM Migration to Google Cloud Engine (GCE)',
        description: 'Experience a guided demo of migrating servers to Google Cloud Engine (GCE) using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
        image: GCEMigration,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/zj9pav67t252?embed=popup',
        demoType: 'interactive',
        categories: ['gcp', "mobility","interactive"],
    },
    {
        title: 'Google Cloud migration with OS upgrade',
        description: 'Watch a video demo of migrating servers to Google Cloud with an OS upgrade using the RiverMeadow platform.',
        image: GoogleCloudMigration,
        iframeSrc: '',
        videoLink: "https://player.vimeo.com/video/1169049532?title=0&amp;byline=0&amp;portrait=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        demoType: 'video',
        categories: ['gcp', "modernization","video"],
    }, 
    {
        title: 'HPE Morpheus VM Essentials Windows Modernization',
        description: 'Experience a guided demo of migrating servers from VMware to HPE Morpheus VM Essentials with Windows OS upgrade using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
        image: VMEWindowsModernization,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/kyfmbr1kj4ml?embed=popup',
        demoType: 'interactive',
        categories: ['vme', "modernization","interactive"],
    }, 
    {
        title: 'Microsoft Azure Windows Modernization',
        description: 'Experience a guided demo of migrating servers from VMware to Microsoft Azure with Windows OS upgrade using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
        image: AzureWindowsModernization,
        iframeSrc: 'https://rivermeadow.storylane.io/demo/liicn2y9ufuc?embed=popup',
        demoType: 'interactive',
        categories: ['azure', "modernization","interactive"],
    }, 

//  {
//    title: 'RHEL OS conversion to Amazon Linux',
//    description: 'Experience a guided demo of migrating servers to Red Hat OpenShift using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
//    image: OpenShiftMigration,
//    iframeSrc: 'https://rivermeadow.storylane.io/demo/gtcenwzprazs?embed=popup',
//    demoType: 'interactive',
//    categories: ['aws', "modernization","interactive"],
 // },
  // Add additional demos as needed
];

function copyDemoLink(demoIframeSrc, videoLink, setShow) {
    if (demoIframeSrc) {
        const shareableLink = demoIframeSrc.replace('?embed=popup', '');
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareableLink).then(() => {
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
            } catch (err) {
                alert('Failed to copy demo link.');
            }
            document.body.removeChild(textarea);
        }
    }
    if (videoLink) {
        const videoId = videoLink.match(/\/video\/(\d+)/)?.[1];
        const shareableLink = `https://vimeo.com/${videoId}`;
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
            } catch (err) {
                alert('Failed to copy demo link.');
            }
            document.body.removeChild(textarea);
        }
    }
    setShow(true);
}

function DemoCardWithModal({demoTitle, demoDescription, demoImage, demoIframeSrc, categories, demoType, videoLink}) {
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);

    return (
        <div>
            <div className="workshop-card" style={{ padding: '0px'}}>
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={demoImage} alt={demoTitle} style={{ objectFit: 'stretch',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                <div className="workshop-card-content" style={{ padding: '16px' }}>
                    <div className="demo-card-logo">
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
                        {demoType === 'video' && (
                            <>Watch Demo</>
                        )}
                        {demoType === 'interactive' && (
                            <>Launch Demo</>
                        )}
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
                            borderRadius: 8,
                            boxShadow: '0 2px 16px rgba(0,0,0,0.2)'
                        }}
                    >
                        <div className="demoModalHeader" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
                        <h2 style={{ margin: 0 }}>{demoTitle}</h2>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div style={{ position: "relative", display: "inline-block" }}>
                                <button
                                    className="button button--secondary"
                                    onClick={() => copyDemoLink(demoIframeSrc, videoLink, setShow)}
                                    style={{backgroundColor: '#000000', borderColor: '#000000', color: '#FFFFFF', marginRight: '8px'}}
                                >
                                    Share Demo
                                </button>
                                <Tooltip
                                    visible={show}
                                    onClose={() => setShow(false)}
                                    position="top"
                                    timeout={5000}
                                >
                                    Shareable demo link copied to clipboard!
                                </Tooltip>
                            </div>
                            <button
                                className="button button--secondary"
                                onClick={() => setOpen(false)}
                                style={{backgroundColor: '#0A76FD', borderColor: '#0A76FD', color: '#FFFFFF'}}
                            >
                                Close
                            </button>
                        </div>
                        </div>
                        {demoType === 'video' && (
                            <div className='videoModalIFrame'>
                                <div style={{padding:'51.41% 0 0 0',position:'relative'}}><iframe src={videoLink} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} title="Google Cloud + OS Upgrade Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </div>
                        )}
                        {demoType === 'interactive' && (
                        <div className='demoModalIFrame'>
                            <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
                            <div className="sl-embed" style={{position:'relative',paddingBottom:'calc(62.76% + 0px)',width:'100%',height:0,transform:'scale(1)'}}>
                                <iframe loading="lazy" className="sl-demo" src={demoIframeSrc} name="sl-embed" allow="fullscreen" style={{position:'absolute',top:0,left:0,width:'100%!important',height:'100%!important',border:'1px solid rgba(63,95,172,0.35)',boxShadow:'0px 0px 18px rgba(26, 19, 72, 0.15)',boxSizing:'border-box'}}></iframe>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

// Sidebar filter groups. Each group's values are matched against a demo's
// `categories`. Options within a group are OR'd; groups are AND'd together.
const filterGroups = [
    { id: 'useCase', title: 'Use case', options: useCases },
    { id: 'technology', title: 'Technology', options: technologies },
    { id: 'format', title: 'Format', options: formats },
];

const emptySelection = Object.fromEntries(filterGroups.map(group => [group.id, []]));

function demoMatches(demo, selected, skipGroupId) {
    return filterGroups.every(group => {
        if (group.id === skipGroupId) return true;
        const values = selected[group.id];
        return values.length === 0 || values.some(value => demo.categories.includes(value));
    });
}

function FilterGroup({ group, selected, onToggle }) {
    const [expanded, setExpanded] = useState(true);
    // Count what each option would show given the other groups' selections.
    // Every option is listed; ones with no matching demos are dimmed.
    const available = demos.filter(demo => demoMatches(demo, selected, group.id));
    const options = group.options.map(option => ({
        ...option,
        count: available.filter(demo => demo.categories.includes(option.value)).length,
    }));

    return (
        <div className="demoFilterGroup">
            <button
                type="button"
                className="demoFilterGroupHeader"
                aria-expanded={expanded}
                onClick={() => setExpanded(!expanded)}
            >
                <span>{group.title}</span>
                <span className={clsx('demoFilterChevron', !expanded && 'demoFilterChevronCollapsed')} aria-hidden="true" />
            </button>
            {expanded && (
                <ul className="demoFilterOptions">
                    {options.map(option => {
                        const checked = selected[group.id].includes(option.value);
                        return (
                            <li key={option.value}>
                                <label className={clsx('demoFilterOption', option.count === 0 && !checked && 'demoFilterOptionEmpty')}>
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => onToggle(group.id, option.value)}
                                    />
                                    <span className="demoFilterOptionLabel">{option.label}</span>
                                    <span className="demoFilterOptionCount">{option.count}</span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default function Home() {
  const [selected, setSelected] = useState(emptySelection);
  // Register the in-page anchor so Docusaurus' broken-anchor check knows about it.
  useBrokenLinks().collectAnchor('demos');

  function toggleFilter(groupId, value) {
    setSelected(prev => {
        const values = prev[groupId];
        return {
            ...prev,
            [groupId]: values.includes(value) ? values.filter(v => v !== value) : [...values, value],
        };
    });
  }

  const hasFilters = filterGroups.some(group => selected[group.id].length > 0);
  const demosToShow = demos.filter(demo => demoMatches(demo, selected));

  return (
    <Layout
      title="RiverMeadow Product Demos"
      description="Start learning how to migrate, optimize and modernize workloads using the RiverMeadow workload mobility platform.">
      <HomepageHeader />
      <main style={{padding: 24 +'px'}}>
        <div id="demos" className="demosLayout">
          <aside className="demoSidebar">
            <div className="demoSidebarHeader">
              <span>Filter by</span>
              {hasFilters && (
                <button type="button" className="demoSidebarClear" onClick={() => setSelected(emptySelection)}>
                  Clear all
                </button>
              )}
            </div>
            {filterGroups.map(group => (
              <FilterGroup key={group.id} group={group} selected={selected} onToggle={toggleFilter} />
            ))}
          </aside>
          <div className="demoResults">
            {demosToShow.length > 0 ? (
              <ul className="demos-grid-list">
                {demosToShow.map(demo => (
                  <li key={demo.title}>
                    <DemoCardWithModal demoTitle={demo.title} demoDescription={demo.description} demoImage={demo.image} demoIframeSrc={demo.iframeSrc} categories={demo.categories} demoType={demo.demoType} videoLink={demo.videoLink} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="demoResultsEmpty">
                <p>No demos match the selected filters.</p>
                <button type="button" className="button button--primary" onClick={() => setSelected(emptySelection)}>
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
        {/* <div className="demoJourney">
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
        </div> */}
      </main>
    </Layout>
  );
}
