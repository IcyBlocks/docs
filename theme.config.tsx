import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const StoreIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 576 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"
    />
  </svg>
);

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.cubic-rp.com${asPath}`;
  const description = frontMatter.description || "Cubic Store's Documentation";
  const pageTitle = title ? `${title} - Cubic Docs` : "Cubic Docs";
  const imageUrl = "https://i.ibb.co/V90fNX1/favicon.png";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href={imageUrl} />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
    </>
  );
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://i.ibb.co/RCCgMTR/Cubic-RPDISCORD.png') no-repeat left",
        backgroundSize: '38px',
      }}
    >
      <span style={{ marginTop: '.1em', fontWeight: 800, fontFamily: "'Rubik', sans-serif" }}>
        Cubic Store
      </span>
    </div>
  ),
  project: {
    link: 'https://cubic-store.tebex.io',
    icon: <StoreIcon />,
  },
  chat: {
    link: 'https://discord.gg/VbDEEWBvJB',
  },
  footer: {
    footer: {
      text: (
        <span>
          Cubic Store
        </span>
      )
    }
  },
  docsRepositoryBase: 'https://github.com/IcyBlocks/docs/tree/main',
  head: useHead,
};

export default config;