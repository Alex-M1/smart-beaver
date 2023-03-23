export const imgSize = (
  selector: string,
  maxWidth: string,
  maxHeight?: string,
) => (`
  ${selector} {
    max-width: ${maxWidth};
    max-height: ${maxHeight};
    img {
      height: 100%;
      width: 100%;
    }
  }
`);

export const imgSizeResponsive = (selector: string, width: string, height: string = 'auto') => (`
  ${selector} {
    width: ${width};
    height: ${height};
    img {
      height: 100%;
      width: 100%;
    }
  }
`);

export const capitalizeWords = (str: string) => str
  .toLocaleLowerCase()
  .split(' ')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
