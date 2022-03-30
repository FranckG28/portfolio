import Head from 'next/head'
import Image from 'next/image'

import { DocumentTextIcon, MailIcon } from '@heroicons/react/outline'

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

      <main className="container mx-auto flex flex-col justify-center min-h-screen items-center gap-5">

        <h1><span className="font-normal">FRANCK</span> GUTMANN</h1>

        <div className="flex flex-col gap-3 items-center" id="links">

          <IconTextLink text={"Mon CV"} link="https://drive.google.com/file/d/1MzYGLruaO9yYWd2MqmMlJoadk1T2ZM6H/view?usp=sharing">
            <DocumentTextIcon />
          </IconTextLink>

        </div>

        <div className='flex flex-row gap-5 items-center' id='iconLinks'>

          <IconLink link={"https://www.linkedin.com/in/franck-g/"}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='fill-current'>
              <path d="M17.633 17.633H15.2623V13.92C15.2623 13.0346 15.2464 11.8948 14.0293 11.8948C12.7945 11.8948 12.6055 12.8594 12.6055 13.8555V17.6327H10.2348V9.99729H12.5107V11.0407H12.5426C13.006 10.2484 13.8708 9.77334 14.7881 9.80741C17.191 9.80741 17.634 11.388 17.634 13.4443L17.633 17.633ZM7.55983 8.95356C6.8051 8.95356 6.18376 8.33254 6.18376 7.57775C6.18376 6.82295 6.80481 6.20186 7.55954 6.20186C8.31421 6.20186 8.93519 6.82281 8.93533 7.57746C8.93533 8.33211 8.31442 8.95349 7.55983 8.95356ZM8.74518 17.633H6.37198V9.99729H8.74518V17.633ZM18.8149 4.0001H5.18062C4.54061 3.99287 4.0078 4.51334 4 5.1534V18.8453C4.00751 19.4857 4.54025 20.0068 5.18062 19.9999H18.8149C19.4568 20.008 19.9914 19.487 20 18.8453V5.15247C19.9914 4.51105 19.4561 3.99166 18.8149 4.0001Z"/>
            </svg>
          </IconLink>

          <IconLink link={"https://www.youtube.com/channel/UCTJzfyoydwBqeuTz-DFDoDg"}>
            <svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" className='my-auto fill-current'>
              <path d="M7.95376 9.95935V4.04878L13.1826 7L7.95376 9.95122V9.95935ZM19.5816 2.18699C19.3525 1.3252 18.6733 0.650406 17.8141 0.414634C16.2512 0 9.99948 0 9.99948 0C9.99948 0 3.74776 0 2.18483 0.414634C1.32563 0.642276 0.646447 1.3252 0.417327 2.18699C0 3.74797 0 7 0 7C0 7 0 10.252 0.417327 11.813C0.646447 12.6748 1.32563 13.3496 2.18483 13.5854C3.74776 14 9.99948 14 9.99948 14C9.99948 14 16.2512 14 17.8141 13.5854C18.6733 13.3577 19.3525 12.6748 19.5816 11.813C19.999 10.252 19.999 7 19.999 7C19.999 7 19.999 3.74797 19.5816 2.18699Z"/>
            </svg>
          </IconLink>

          <IconLink link={"mailto:gutmann.franck@outlook.fr"}>
            <MailIcon />
          </IconLink>

        </div>

      </main>

    </div>
  )
}
