import { MediaType } from './ui';

export type MediaSizeConstant = {
  [J in SizedElement]: {
    [K in MediaType]: string
  }
}

export type SizedElement = 'someSize' | 'anySize';

export const MEDIA_SIZE: MediaSizeConstant = {
  someSize: {
    L: '40px',
    M: '30px',
    S: '20px',
    XL: '50px',
    XS: '10px',
  },
  anySize: {
    L: '40px',
    M: '30px',
    S: '20px',
    XL: '50px',
    XS: '10px',
  },
};
