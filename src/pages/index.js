import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Footer from "../components/footer"
import Card from "../components/card"

import "../utils/fontawesome.js"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Rob Friedman" />
      <div className="image-wrapper">
        <Image />
        <h5 className="subtitle">
          I'm a Cybersecurity Analyst from Boston, Massachusetts with a
          background in web development.
        </h5>
      </div>
      <h2>About</h2>
      <p>
        I'm a multiskilled IT professional who recently completed a
        cybersecurity{" "}
        <a
          className="link"
          href="/flatiron.pdf"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="View my Flatiron bootcamp certificate"
        >
          bootcamp
        </a>
        . For over 4 years, I've been developing websites as a{" "}
        <a
          href="https://www.upwork.com/freelancers/~01c0007495264267a0"
          target="_blank"
          rel="noopener noreferrer"
        >
          freelancer
        </a>
        . This month, you'll find me launching a{" "}
        <a
          href="http://www.cellular-clarity.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          blog
        </a>{" "}
        and studying ethical hacking.
      </p>
      <p>
        I want to help you turn your ideas into reality. Dedication, intuition
        and interpersonal engagement are some of my strongest attributes. I'm
        currently in the market for full-time work.
      </p>
      <div className="has-text-centered">
        <FontAwesomeIcon icon={["fas", "coffee"]} size="2x" color="#7B714F" />
      </div>
      <h2>Work</h2>
      <div className="columns is-multiline">
        <div className="column is-half">
          <Card title="R&W" link="https://www.r-wgroup.com/" time="2019">
            Handled update of third party user portal, ensuring a smooth
            transition for users. Deepen understand of browser protocols such as
            iframe same-origin policy.
          </Card>
        </div>
        <div className="column is-half">
          <Card title="GetLoyal" link="https://usetrolley.com/" time="2019">
            Developed client-side CRUD capacity for an business' locations and
            offers. User home route features validated authentication, reactive
            modals and file uploads.
          </Card>
        </div>
        <div className="column is-half">
          <Card title="Cinchapi" link="https://cinchapi.com/" time="2017">
            Gained experience working as a front end developer for a large Vue /
            D3.js based charting application, working with Docker, jQuery and
            Lodash.
          </Card>
        </div>
        <div className="column is-half">
          <Card title="Google Trends" link={null} time="2017">
            User selected search terms are passed to a Python Flask API. Google
            search trends are displayed via a React / D3.js charting
            application.
          </Card>
        </div>
      </div>
      <Footer>
        <h2>Contact</h2>
        <nav className="columns is-mobile">
          <div className="column">
            <a
              className="link"
              href="mailto: rfr22@protonmail.com"
              aria-label="Email me"
            >
              <FontAwesomeIcon icon={["far", "envelope"]} size="2x" />
            </a>
          </div>
          <div className="column">
            <a
              className="link"
              href="/resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="View my resume"
            >
              <FontAwesomeIcon icon={["far", "file-pdf"]} size="2x" />
            </a>
          </div>
          <div className="column">
            <a
              className="link"
              href="https://www.linkedin.com/in/robert-friedman-581095184/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Visit my Linked In"
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
            </a>
          </div>
          <div className="column">
            <a
              className="link"
              href="https://github.com/robfr77"
              aria-label="Visit my Github"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </div>
        </nav>
      </Footer>
    </Layout>
  )
}

export default IndexPage
