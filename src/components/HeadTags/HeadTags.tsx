import React from 'react'
import Head from 'next/head'

// -------------- Typescript declarations -------------- //

interface HeadProps {
  content?: string
  shareURL?: string
  pageTitle?: string
  socialImage?: string
}

// ---------- This is the end of declarations ---------- //

export const HeadTags = ({
    content, // For the page content to be used within SEO and social Sharing
    shareURL, // For the page to be shared within social media links
    pageTitle, // For the title of the page
    socialImage
  }: HeadProps ) => {
  
  return(

      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="canonical" href={ shareURL } />
        <meta name="robots" content="index, follow" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta key="description" property="description" content={ content } />
        <meta key="ogUrl" property="og:url" content={ shareURL } />
        <meta key="ogType" property="og:type" content="website" />
        <meta key="ogTitle" property="og:title" content={ pageTitle } />
        <meta key="ogDescription" property="og:description" content={ content } />
        <meta key="ogImage" property="og:image" content={ socialImage } />
        <meta key="twitterUrl" property="twitter:url" content={ shareURL } />
        <meta key="twitterCard" name="twitter:card" content={ socialImage } />
        <meta key="twitterTitle" name="twitter:title" content={ pageTitle } />
        <meta key="twitterDescription" name="twitter:description" content={ content } />
        <meta key="twitterImage" name="twitter:image" content={ socialImage } />
        <meta name="twitter:card" content={ socialImage } />
        <meta key="twitterSite" name="twitter:site" content="@tylerstober" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image:alt" content="Tyler Stober" />
        <meta name="twitter:image:alt" content="Tyler Stober" />
        <title>{ pageTitle }</title>
      </Head>
    
  )
}
