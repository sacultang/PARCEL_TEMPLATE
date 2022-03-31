// ESM (ECMA MODULE) : 브라우저에서 작동 하는 방식
// import 가져오기
// export 내보내기


// CommonJS : Node.js 에서 작동하는 방식
// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer') // 가져오기

// export {
//   plugins :[
//     autoprefixer
//   ]
// }
module.exports = { // 내보내기
  plugins:[
    autoprefixer
  ]
}

// 간소화
// module.exports = {
//   plugins:[
//     require('autoprefixer')
//   ]
// }