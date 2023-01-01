import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>People List | Home</title>
      <meta name='keywords' content='people' />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Welcome to ThePeopleList, a company dedicated to providing top-quality services to our clients. Our team is made up of a diverse group of individuals who are passionate about their work and committed to delivering exceptional results.</p>
      <p className={styles.text}>At ThePeopleList, we believe that our employees are our greatest asset. We are proud to have a team of dedicated, talented, and hardworking individuals who are committed to excellence in everything they do. From our sales and marketing team to our technical experts, every member of our team is an integral part of our success.</p>
      <p className={styles.text}>We are always looking for talented and motivated individuals to join our team. If you are interested in becoming a part of ThePeopleList, we encourage you to explore the opportunities available to you. Whether you are looking for a challenging and rewarding career or just want to be a part of a dynamic and growing company, ThePeopleList is the perfect place for you. Thank you for visiting our website, and we hope to hear from you soon.</p>
      <Link href="/people/" legacyBehavior>
        <a className={styles.btn}>See People Listing</a>
      </Link>
    </div>
    </>
  )

}

