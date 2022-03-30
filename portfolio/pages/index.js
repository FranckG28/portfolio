import Head from 'next/head'
import { DocumentTextIcon, MailIcon } from '@heroicons/react/outline'

// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import IconTextLink from '../components/iconTextLink'
import IconLink from '../components/iconLink'

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

        <div className="mt-10 flex flex-col gap-3 items-center" id="links">

          <IconTextLink text={"Mon CV"} link="https://drive.google.com/file/d/1MzYGLruaO9yYWd2MqmMlJoadk1T2ZM6H/view?usp=sharing">
            <DocumentTextIcon />
          </IconTextLink>

        </div>

        <div className='mt-10 flex flex-row gap-3 items-center' id='iconLinks'>

          <IconLink link={"mailto:gutmann.franck@outlook.fr"}>
            <MailIcon />
          </IconLink>

        </div>

      </main>

    </div>
  )
}
