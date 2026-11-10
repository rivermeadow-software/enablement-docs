import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HeroScreenshot from '/img/hero_platform_inventory.png';
import AWS from '/img/rivermeadow_aws.png';
import Azure from '/img/rivermeadow_microsoft_azure.png';
import GCP from '/img/rivermeadow_gcp.png';
import OpenShift from '/img/rivermeadow_openshift.png';
import Nutanix from '/img/rivermeadow_nutanix.png';
import RiverMeadowFundamentals from '/img/rivermeadow_fundamentals.png';
import RiverMeadowAdvanced from '/img/rivermeadow_advanced.png';
import RiverMeadowVME from '/img/rivermeadow_hpe_morpheus_vme.png';
import styles from './index.module.css';

// Course catalog. A course without `to` is shown as "Coming soon".
const sections = [
  {
    id: 'general',
    label: 'General',
    title: 'Introduction to RiverMeadow',
    description:
      'Learn about the fundamentals of the RiverMeadow platform and how it can be used to migrate, optimize, and modernize workloads.',
    courses: [
      {
        title: 'RiverMeadow Fundamentals',
        description:
          "Learn about the RiverMeadow platform and the platform's migration, optimization, and modernization features.",
        image: RiverMeadowFundamentals,
        level: 'Beginner',
        to: '/courses/fundamentals/introduction',
      },
      {
        title: 'RiverMeadow Advanced',
        description:
          'Learn about the technical details of the RiverMeadow platform such as architecture, components, and deployment.',
        image: RiverMeadowAdvanced,
        level: 'Advanced',
      },
    ],
  },
  {
    id: 'publiccloud',
    label: 'Public cloud',
    title: 'Public Cloud Workload Mobility',
    description:
      'Migrate Windows and Linux servers from any environment (physical, virtual, or cloud) to one of the public clouds supported by the RiverMeadow platform.',
    courses: [
      {
        title: 'Amazon Web Services (AWS)',
        description:
          'Learn how to migrate, optimize and modernize workloads to Amazon Web Services (AWS) utilizing the RiverMeadow platform.',
        image: AWS,
        level: 'Intermediate',
        to: '/courses/aws/introduction',
      },
      {
        title: 'Microsoft Azure',
        description:
          'Learn how to migrate, optimize and modernize workloads to Microsoft Azure utilizing the RiverMeadow platform.',
        image: Azure,
        level: 'Intermediate',
      },
      {
        title: 'Google Cloud Platform (GCP)',
        description:
          'Learn how to migrate, optimize and modernize workloads to Google Cloud Platform (GCP) utilizing the RiverMeadow platform.',
        image: GCP,
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'privatecloud',
    label: 'On-premises',
    title: 'On-Premises Workload Mobility',
    description:
      'Migrate Windows and Linux servers from any environment (physical, virtual, or cloud) to one of the on-premises or cloud hosted hypervisors supported by the RiverMeadow platform.',
    courses: [
      {
        title: 'HPE Morpheus VM Essentials',
        description:
          'Learn how to migrate workloads from any source to the HVM hypervisor in HPE Morpheus VM Essentials utilizing the RiverMeadow platform.',
        image: RiverMeadowVME,
        level: 'Intermediate',
        to: '/courses/hpe-morpheus-vm-essentials/introduction',
      },
      {
        title: 'OpenShift Virtualization',
        description:
          'Learn how to migrate, optimize and modernize workloads to Red Hat OpenShift Virtualization utilizing the RiverMeadow platform.',
        image: OpenShift,
        level: 'Intermediate',
      },
      {
        title: 'Nutanix AHV',
        description:
          'Learn how to migrate, optimize and modernize workloads to Nutanix AHV utilizing the RiverMeadow platform.',
        image: Nutanix,
        level: 'Intermediate',
      },
    ],
  },
];

const features = [
  {
    title: 'Self-paced courses',
    description: 'Work through structured lessons on migration, optimization, and modernization at your own pace.',
    to: '#courses',
    cta: 'Browse courses',
    icon: (
      <>
        <path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z" />
        <path d="M4 21V5M9 8h7M9 12h5" />
      </>
    ),
  },
  {
    title: 'Guided product demos',
    description: 'Click through interactive tours and videos of real migrations on the RiverMeadow platform.',
    to: '/demos',
    cta: 'View demos',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="m10 8.5 4 2.5-4 2.5zM8 21h8M12 17v4" />
      </>
    ),
  },
  {
    title: 'Step-by-step guides',
    description: 'Follow task-focused guides for deploying, configuring, and running the platform.',
    to: '/guides/introduction',
    cta: 'Read guides',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </>
    ),
  },
];

function Icon({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>{siteConfig.title}</span>
          <Heading as="h1" className={styles.heroTitle}>
            Master workload mobility with RiverMeadow
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroActions}>
            <Link className={clsx(styles.btn, styles.btnPrimary)} to="#courses">
              Explore courses
            </Link>
            <Link className={clsx(styles.btn, styles.btnGhost)} to="/demos">
              Watch a demo
            </Link>
          </div>
        </div>
        <div className={styles.heroArt}>
          <div className={styles.heroWindow}>
            <div className={styles.heroWindowBar} aria-hidden="true">
              <span className={styles.heroWindowDots}>
                <span />
                <span />
                <span />
              </span>
              <span className={styles.heroWindowTitle}>RiverMeadow Workload Mobility Platform</span>
            </div>
            <img
              className={styles.heroScreenshot}
              src={HeroScreenshot}
              width="1800"
              height="1129"
              alt="RiverMeadow platform Inventory page showing readiness and CPU, RAM and storage utilization summaries"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function CourseCard({ course }) {
  const available = Boolean(course.to);
  const body = (
    <>
      <div className={styles.cardImage}>
        <img src={course.image} alt="" loading="lazy" />
        {!available && <span className={styles.comingSoon}>Coming soon</span>}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.metaType}>Course</span>
          <span className={styles.metaLevel}>{course.level}</span>
        </div>
        <h3 className={styles.cardTitle}>{course.title}</h3>
        <p className={styles.cardDescription}>{course.description}</p>
        <span className={styles.cardFooter}>
          {available ? (
            <>
              Start course <span aria-hidden="true">→</span>
            </>
          ) : (
            'Available soon'
          )}
        </span>
      </div>
    </>
  );

  return available ? (
    <Link className={styles.card} to={course.to}>
      {body}
    </Link>
  ) : (
    <div className={clsx(styles.card, styles.cardDisabled)} aria-disabled="true">
      {body}
    </div>
  );
}

export default function Home() {
  // Register in-page anchors so Docusaurus' broken-anchor check knows about them.
  const brokenLinks = useBrokenLinks();
  ['courses', ...sections.map(section => section.id)].forEach(id => brokenLinks.collectAnchor(id));

  return (
    <Layout
      title="Workload Mobility Platform"
      description="Start learning how to migrate, optimize and modernize workloads using the RiverMeadow workload mobility platform.">
      <HomepageHero />
      <main>
        <section className={styles.features}>
          <div className={styles.container}>
            <ul className={styles.featureGrid}>
              {features.map(feature => (
                <li key={feature.title}>
                  <Link className={styles.feature} to={feature.to}>
                    <span className={styles.featureIcon}>
                      <Icon>{feature.icon}</Icon>
                    </span>
                    <span className={styles.featureTitle}>{feature.title}</span>
                    <span className={styles.featureDescription}>{feature.description}</span>
                    <span className={styles.featureCta}>
                      {feature.cta} <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="courses" className={styles.catalog}>
          <div className={styles.container}>
            <div className={styles.catalogHeader}>
              <Heading as="h2" className={styles.catalogTitle}>Course catalog</Heading>
              <nav className={styles.topics} aria-label="Browse by topic">
                <span className={styles.topicsLabel}>Browse by topic</span>
                {sections.map(section => (
                  <a key={section.id} className={styles.topic} href={`#${section.id}`}>
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>

            {sections.map(section => (
              <div key={section.id} id={section.id} className={styles.section}>
                <div className={styles.sectionHeader}>
                  <Heading as="h3" className={styles.sectionTitle}>{section.title}</Heading>
                  <p className={styles.sectionDescription}>{section.description}</p>
                </div>
                <ul className={styles.cardGrid}>
                  {section.courses.map(course => (
                    <li key={course.title}>
                      <CourseCard course={course} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaInner}>
              <div>
                <Heading as="h2" className={styles.ctaTitle}>See the platform in action</Heading>
                <p className={styles.ctaText}>
                  Take a guided tour of a real migration to VMware, AWS, Hyper-V, Nutanix, OpenShift and more.
                </p>
              </div>
              <Link className={clsx(styles.btn, styles.btnLight)} to="/demos">
                Browse demos
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
