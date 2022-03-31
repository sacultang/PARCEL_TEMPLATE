# PARCEL-TEMPLATE

## 정적 파일 연결
- parcel-bundle를 통해
dist 폴더로 변환되어 들어감  
- dist폴더는 언제든 삭제되거나 수정 될 수 있음
- staticFiles 옵션을 통해 static폴더를 
dist 폴더로 자동으로 붙여넣어 줌
```
$ npm install -D parcel-plugin-static-files-copy
```
```json
package.json 옵션

"staticFiles": {
    "staticPath": "static"
  },
```

## autoprefixer & postcss
```
$ npm i -D postcss
$ npm i -D autoprefixer
```

구형 브라우저에서 구동하기 위해 필요한 모듈  
css 공급 업체 접두사 (Vender Prefix) 를 자동으로 구현

```json
package.json 옵션

 "browserslist": [
    "> 1%", // 전세계의 점유율이 1% 이상인 브라우저
    "last 2 versions" // 마지막 2버전인 브라우저
  ]
```
```js
 //ESM (ECMA SCRIPT MODULE) 브라우저에서 동작하는 환경
 import
 export

 // nodejs는 commonJS 방식 때문에 가져오기 내보내기가 다름
 // require()
 // module.exports
```

```js
.postcssrc.js에 작성

const autoprefixer = require('autoprefixer') 
//autoprefixer 패키지 가져오기

module.exports = {
  plugins : [
    autoprefixer
  ]
}
//가져오기 & 내보내기 간소화

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```
## Error 
- PostCSS plugin autoprefixer requires PstCSs 8   
autoprefixer 와 postcss 버전 충돌로 일어나는 에러
해결법 - autoprefixer 버전 다운그레이드
```
$ npm i -D autoprefixer@9
```

## Babel
최신의 자바스크립트 문법을 ES5 버전으로 변환 해주는 컴파일러
```cli
$ npm i -D @babel/core 
$ npm i -D @babel/preset-env
```

```js
 .babelrc.js에 작성
module.exports = {
  presets:['@babel/preset-env']
}
```
```js
package.json에 작성

 "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
```
### Error
- Uncaught ReferenceError:regeneratorRuntime is not defined  
바벨에서 async/await 문법은 기본 설정으로 지원하지 않음 (추가 플러그인 설치)

```
$ npm i -D @babel/plugin-transform-runtime
```
```js
.babelrc.js에 작성
plugins : [
    ['@babel/plugin-transform-runtime']
  ]
```
## parcel-cli
https://ko.parceljs.org/cli.html