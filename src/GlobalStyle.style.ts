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
  font-family: 'DXhimchanMedium';
}

article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}

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
  font-family: 'DXhimchanMedium';
  color:black;
  line-height: 1.2;

}
a {
  text-decoration:none;
  color:inherit;
}
@font-face {
    font-family: 'DXhimchanLight';
    src: url('https://daedong.s3.ap-northeast-2.amazonaws.com/%EB%8C%80%EB%8F%99%EC%97%AC%EC%A7%80%EB%8F%84+%ED%8F%B0%ED%8A%B8/DXLight.ttf') format('truetype');
  }
@font-face {
    font-family: 'DXhimchanMedium';
    src: url('https://daedong.s3.ap-northeast-2.amazonaws.com/%EB%8C%80%EB%8F%99%EC%97%AC%EC%A7%80%EB%8F%84+%ED%8F%B0%ED%8A%B8/DXMedium.ttf') format('truetype');
  }
@font-face {
    font-family: 'DXhimchanBold';
    src: url('https://daedong.s3.ap-northeast-2.amazonaws.com/%EB%8C%80%EB%8F%99%EC%97%AC%EC%A7%80%EB%8F%84+%ED%8F%B0%ED%8A%B8/DXBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

`;
