import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      href: '/images/vue-maplibre-logo-mini.svg',
      type: 'image/svg+xm'
    }
  ],
  [
    'meta',
    {
      property: 'og:image',
      content: '/images/vue-maplibre-logo.svg'
    }
  ],
  [
    'meta',
    {
      property: 'og:image:width',
      content: '1200'
    }
  ],
  [
    'meta',
    {
      property: 'og:image:height',
      content: '630'
    }
  ],
  [
    'meta',
    {
      property: 'og:description',
      content: 'A Vue3 based component library of MaplibreGL for developers.'
    }
  ],
  [
    'meta',
    {
      name: 'algolia-site-verification',
      content: '872D530159005E01'
    }
  ],
  // 百度资源
  [
    'meta',
    {
      name: 'baidu-site-verification',
      content: 'codeva-ZmBRda3dIC'
    }
  ],
  // 百度统计
  [
    'script',
    {
      async: 'true',
      src: 'https://hm.baidu.com/hm.js?80cf722845bf724c5b85845b182669b3'
    }
  ],
  [
    'script',
    {
      async: 'true',
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-113302031-1'
    }
  ],
  [
    'script',
    {},
    `if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach(sw => sw.unregister())
      })
    }`
  ],
  [
    'script',
    {
      async: 'true'
    },
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NV0Y3PCY1J');`
  ],
  [
    'script',
    {
      async: 'true',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-0DRFCYSG8M'
    }
  ],
  [
    'script',
    {},
    `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0DRFCYSG8M');
    `
  ],
  [
    'script',
    {
      async: 'true'
    },
    `
  var resource = document.createElement('link');
  resource.setAttribute("rel", "stylesheet");
  resource.setAttribute("href","https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800|Open+Sans:400,600;display=swap");
  resource.setAttribute("type","text/css");
  var head = document.querySelector('head');
  head.appendChild(resource);
    `
  ]
]
