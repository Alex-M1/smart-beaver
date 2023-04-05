import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'G-XQHNG1ZTGX',
};

export const initializeTagManager = () => {
  TagManager.initialize(tagManagerArgs);
};

export const trackPageView = (url: string) => {
  TagManager.dataLayer({
    dataLayer: {
      page: url,
      date: new Date().toISOString(),
    },
  });
};
