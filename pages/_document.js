import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Fernando Higuera | Redefining Innovation, Sustainability, and Leadership',
    description: 'Fernando Higuera redefines leadership by driving $1B+ in growth, pioneering AI and quantum innovations, and investing in sustainability. Explore how bold ideas create lasting impact and transform industries.',
    image: 'https://cloud.appwrite.io/v1/storage/buckets/shareable/files/64c18b294849cd0148be/view?project=fhiguera'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fhiguera" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}