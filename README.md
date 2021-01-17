# vue-press

[문서 가이드](https://vuepress.vuejs.org/guide/)

### 설치

```
$ mkdir vue-press
$ cd vue-press

$ npm init -y
$ npm install -D vuepress

$ mkdir docs
$ echo '# Hello VuePress' > docs/README.md
```
### package.json
```
{
  "scripts": {
      "docs:dev": "vuepress dev docs",
      "docs:build": "vuepress build docs"
  }
}
```
### 개발 배포, 빌드
```
$ npm run docs:dev
$ npm run docs:build
```
### 기본 설정파일
```
$ mkdir docs/.vuepress
$ touch docs/.vuepress/config.js
```

* config.js 에서 base path 설정
  ```
  module.exports = {
    base: '/vue-press/',
  };
  ```
  [config 참고문서](https://vuepress.vuejs.org/config/)

### 배포 파일 생성해서 실행
```
$ /bin/sh ./deploy.sh
```
### 확인
`https://<USERNAME>.github.io/<REPO>`

https://mercyrain23.github.io/vue-press/
