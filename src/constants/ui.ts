const fonts = [
  { name: 'Bold', weight: 800 },
  { name: 'SemiBold', weight: 600 },
  { name: 'SemiBoldItalic', weight: 600, style: 'italic' },
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
      font-style: ${font.style || 'normal'};
      font-display: swap;
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

export const headerHeight = {
  large: 101,
  medium: 97,
  small: 38,
};
