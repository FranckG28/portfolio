import Head from 'next/head'
import { DocumentTextIcon } from '@heroicons/react/solid'

// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex-1">
      <Head>
        <title>Franck G.</title>
        <meta name="description" content="Franck GUTMANN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col justify-center min-h-screen items-center">

        <h1><span className="font-normal">FRANCK</span> GUTMANN</h1>

        <h4>Étudiant en informatique</h4>

        <div className="mt-10">
          <a href="https://drive.google.com/file/d/1MzYGLruaO9yYWd2MqmMlJoadk1T2ZM6H/view?usp=sharing" target={'_blank'} rel="noreferrer" className={styles.iconLink}>
            <p>Mon CV</p>
            <DocumentTextIcon />
          </a>
        </div>

      </main>

    </div>
  )
}
