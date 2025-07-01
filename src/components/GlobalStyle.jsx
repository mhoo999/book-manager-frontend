import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

html,
body,
div,
span,
object,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
em,
img,
ins,
q,
strong,
sub,
sup,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
a,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  -webkit-text-size-adjust: none; /*세로모드에서 가로모드로 전환할때 텍스트가 약간 커지는 현상 방지*/
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
ul,
ol,
li {
  list-style: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
a,
a:link,
a:hover,
a:active {
  text-decoration: none;
}

i {
  font-style: normal;
  font-weight: normal;
}

img {
  border: 0;
}

button {
  display: block;
  cursor: pointer;
}

a:link {
  color: #000;
  text-decoration: none;
}
a:visited {
  color: #000;
  text-decoration: none;
}
a:hover {
  color: #000;
  text-decoration: none;
}
a:active {
  color: #000;
  text-decoration: none;
}

main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 16px;
  background-color: #f9fafb;
}

body {
  overflow-y: scroll;
  color: #696f74;
  font-size: 0.8em;
  font-family: 'Noto Sans KR', 돋움, dotum, 굴림, gulim, sans-serif, Helvetica;
  line-height: 1.25em;
  background-color: #f9fafb;
}

`

export default GlobalStyle
