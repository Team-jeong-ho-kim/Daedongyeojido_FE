import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, button, select, option, textarea {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  cursor: default;
  font-family: 'DXhimchan';
  font-weight: 500;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
   outline: none;
}
body {
  font-family: 'DXhimchan';
  font-weight: 500;
  color:black;
  line-height: 1.2;

}
a {
  text-decoration:none;
  color:inherit;
}
@font-face {
    font-family: 'DXhimchan';
    src: url('./assets/font/DX힘찬Bold.ttf') format('truetype');
    src: url('./assets/font/DX힘찬Midium.ttf') format('truetype');
    src: url('./assets/font/DX힘찬Light.ttf') format('truetype');
    font-weight: medium;
  }

`;
