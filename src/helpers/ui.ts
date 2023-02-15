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
