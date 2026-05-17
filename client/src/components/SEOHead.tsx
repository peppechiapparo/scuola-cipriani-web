import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://scuolakungfucipriani.it'
const SITE_NAME = 'Scuola della Montagna Shan'
const DEFAULT_IMAGE = `${SITE_URL}/images/disciplines/ScuolaCipriani.jpeg`

interface SEOHeadProps {
  title: string
  description: string
  path?: string
  image?: string
}

export default function SEOHead({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
}: SEOHeadProps) {
  const canonicalUrl = `${SITE_URL}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="it_IT" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
