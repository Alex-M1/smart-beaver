export const breakPoints = {
  L: 1400,
};

const fonts = [
  { name: 'Bold', weight: 800 },
  { name: 'SemiBold', weight: 600 },
  { name: 'Medium', weight: 500 },
  { name: 'Regular', weight: 400 },
  { name: 'Light', weight: 200 },
];
const fontsExt = ['eot', 'ttf', 'woff'];

export const fontFace = fontsExt.map((ext) => (
  fonts.map((font) => (`
    @font-face {    
      font-family: 'Gilroy';
      src: url('/fonts/Gilroy-${font.name}.${ext}');
      font-weight: ${font.weight};
      font-style: normal;
    }
  `))
));

export enum FontWeight {
  bold = 800,
  semiBold = 600,
  medium = 500,
  regular = 400,
  light = 200
}
