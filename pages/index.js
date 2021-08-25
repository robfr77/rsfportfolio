import React from 'react';
import Layout, { siteTitle } from '../components/layout';
import AppIcon from '../components/app-icon';
import AppCard from '../components/app-card';
import styles from '../styles/home.module.scss';
import { colors } from '../utils/helpers';

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className="columns is-mobile is-centered">
          <div className="column is-full">
            <h1 className="subtitle">{siteTitle}</h1>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column has-text-centered">
            <AppIcon name={['fas', 'coffee']} color={colors.green} />
          </div>
        </div>
        <section className={styles.about}>
          <h2>About</h2>
          <p>
            Hello! My name is Rob and I'm a programmer living in northern
            Virginia. I'm that web developer who prefers{' '}
            <span id="guayusa">guayusa</span> to{' '}
            <span id="coffee">coffee</span>. I specialize in front-end
            development and have a solid knowledge of back-end as well.
          </p>
        </section>
        <section className={styles.work}>
          <h2>Work</h2>
          <div className="columns is-multiline">
            <div className="column is-half">
              <AppCard
                project={{
                  title: 'R&W',
                  link: 'www.r-wgroup.com',
                  time: '2019',
                }}
              >
                Handled update of third party user portal for staffing agency.
                Deepened understanding of browser security protocols. Helped
                ensure a smooth transition for users.
              </AppCard>
            </div>
            <div className="column is-half">
              <AppCard
                project={{
                  title: 'GetLoyal',
                  link: 'www.usetrolley.com',
                  time: '2019',
                }}
              >
                Connecting to a REST API, developed single page application for
                business owners. Utilized validated authentication, state
                management, dynamic modals and file uploads.
              </AppCard>
            </div>
            <div className="column is-half">
              <AppCard
                project={{
                  title: 'Psychedelic Experience',
                  link: 'www.psychedelicexperience.net',
                  time: '2017',
                }}
              >
                This site provides an online community with privacy features,
                supporting safe connections, integration of healing and sharing
                of indigenous wisdom.
              </AppCard>
            </div>
            <div className="column is-half">
              <AppCard
                project={{ title: 'Google Trends', link: '', time: '2017' }}
              >
                Prototype application based on{' '}
                <a href="https://github.com/GeneralMills/pytrends">Pytrends</a>,
                in which user search terms are passed to a Python API. Google
                search trends displayed via a custom-built React and D3 charting
                application.
              </AppCard>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <h2>Contact</h2>
        <nav className="columns is-mobile">
          <div className="column">
            <a
              className="link"
              href="https://www.cellular-clarity.com"
              aria-label="Web application"
            >
              <AppIcon name={['fas', 'blog']} size="2x" color="black" />
            </a>
          </div>
          <div className="column">
            <a
              className="link"
              href="https://www.upwork.com/freelancers/~01c0007495264267a0?suggest-vem-skills"
              aria-label="Upwork"
            >
              <AppIcon
                name={['fas', 'file-contract']}
                size="2x"
                color="black"
              />
            </a>
          </div>
          <div className="column">
            <a
              className="link"
              href="https://www.linkedin.com/in/robert-friedman-581095184/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Linked In"
            >
              <AppIcon name={['fab', 'linkedin-in']} size="2x" color="black" />
            </a>
          </div>
          <div className="column">
            <a
              className="link"
              href="https://www.github.com/robfr77"
              aria-label="Github"
            >
              <AppIcon name={['fab', 'github']} size="2x" color="black" />
            </a>
          </div>
        </nav>
      </footer>
    </Layout>
  );
}
