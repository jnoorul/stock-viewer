import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/stock-viewer/markdown-page',
    component: ComponentCreator('/stock-viewer/markdown-page', 'ffe'),
    exact: true
  },
  {
    path: '/stock-viewer/docs',
    component: ComponentCreator('/stock-viewer/docs', '20b'),
    routes: [
      {
        path: '/stock-viewer/docs',
        component: ComponentCreator('/stock-viewer/docs', '424'),
        routes: [
          {
            path: '/stock-viewer/docs',
            component: ComponentCreator('/stock-viewer/docs', '84d'),
            routes: [
              {
                path: '/stock-viewer/docs/category/react-concepts',
                component: ComponentCreator('/stock-viewer/docs/category/react-concepts', '4e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/category/web-fundamentals',
                component: ComponentCreator('/stock-viewer/docs/category/web-fundamentals', '5a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/exercise',
                component: ComponentCreator('/stock-viewer/docs/exercise', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/feedback',
                component: ComponentCreator('/stock-viewer/docs/feedback', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/react-concepts/componnent-based-architecture',
                component: ComponentCreator('/stock-viewer/docs/react-concepts/componnent-based-architecture', '415'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/react-concepts/props-state-hooks',
                component: ComponentCreator('/stock-viewer/docs/react-concepts/props-state-hooks', '754'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/react-concepts/virtual-dom',
                component: ComponentCreator('/stock-viewer/docs/react-concepts/virtual-dom', 'e56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/react-concepts/why-react',
                component: ComponentCreator('/stock-viewer/docs/react-concepts/why-react', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/setup',
                component: ComponentCreator('/stock-viewer/docs/setup', 'e3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/web-fundamentals/csr-ssr',
                component: ComponentCreator('/stock-viewer/docs/web-fundamentals/csr-ssr', '745'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/web-fundamentals/css-box-model',
                component: ComponentCreator('/stock-viewer/docs/web-fundamentals/css-box-model', '068'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/web-fundamentals/document-object-model',
                component: ComponentCreator('/stock-viewer/docs/web-fundamentals/document-object-model', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stock-viewer/docs/web-fundamentals/how-browser-works',
                component: ComponentCreator('/stock-viewer/docs/web-fundamentals/how-browser-works', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/stock-viewer/',
    component: ComponentCreator('/stock-viewer/', '1e0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
