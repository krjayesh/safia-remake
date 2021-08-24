import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Safia - Collect Customer Feedbacks</title>
        <meta
          name="description"
          content="A simple tool to collect product feedback and keep your customers in the loop."
        />
        <meta
          property="og:title"
          content="Safia - Collect Customer Feedbacks"
        />
        <meta
          property="og:description"
          content="A simple tool to collect product feedback and keep your customers in the loop."
        />
      </Helmet>
      <div className={styles['container1']}>
        <img
          alt="image"
          src="/playground_assets/logo.svg"
          className={styles['image']}
        />
        <button
          className={` ${styles['Button']} ${projectStyles['thqButton']} `}
        >
          <span className={styles['text']}>Login</span>
        </button>
      </div>
      <div className={styles['container2']}>
        <h1 className={styles['text01']}>
          <span>Landing</span>
          <br></br>
          <span>Template for</span>
          <br></br>
          <span>Startups</span>
        </h1>
        <div className={styles['container3']}>
          <span className={styles['text07']}>
            <span>Our landing page template works on all</span>
            <br></br>
            <span>devices, so you only have to set it up</span>
            <br></br>
            <span>once, and get beautiful results forever.</span>
          </span>
          <button
            className={` ${styles['Button1']} ${projectStyles['thqButton']} `}
          >
            <span className={styles['text13']}>Pricing and Plans</span>
          </button>
        </div>
      </div>
      <img
        src="/playground_assets/dashboard%20safia.svg"
        alt="image"
        className={styles['image1']}
      />
      <div className={styles['container4']}>
        <img
          src="/playground_assets/google.svg"
          alt="image"
          className={styles['image2']}
        />
        <img
          src="/playground_assets/slack.svg"
          alt="image"
          className={styles['image3']}
        />
        <img
          src="/playground_assets/amazon.svg"
          alt="image"
          className={styles['image4']}
        />
        <img
          src="/playground_assets/zoom.svg"
          alt="image"
          className={styles['image5']}
        />
        <img
          src="/playground_assets/netflix.svg"
          alt="image"
          className={styles['image6']}
        />
      </div>
      <div className={styles['container5']}>
        <h1 className={styles['text14']}>
          <span>Features</span>
        </h1>
        <span className={styles['text16']}>
          <span>Our landing page template works on all</span>
          <br></br>
          <span>devices, so you only have to set.</span>
        </span>
      </div>
      <div className={styles['container6']}></div>
    </div>
  )
}

export default Home
