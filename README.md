# nodeJsSequelize

- express, sequelize 기본세팅
  - express '폴더명' 을 통해 기본 express 구조를 받아 필요한 모듈 npm 또는 yarn을 이용하여 설치
  - mysql2, mariadb, sequelize, sequelize-cli, dotenv 설치
  - sequelize init을 통해 sequelize 기본 세팅을 불러온다.
  - 최위 폴더에 .env 파일을 생성 후 아래의 환경변수 값 설정
  ```
  NODE_ENV = "development"
  DB_USER="유저아이디"
  DB_PASS="비밀번호"
  DB_NAME="데이터베이스 이름"
  DB_HOST="127.0.0.1(로컬호스트)"
  PORT="포트넘버(3000)"
  ```
  - ./config/config.json > config.js 로 변경
  - ./model/index.js > index.models.js로 변경 후 <br> dotenv를 require로 불러 온 후 dotenv.config()로 환경변수 값에 접근 할 수 있게 해준다.
    dotenv.config() 해주지 않으면 환경 변수 값을 읽어 올 수 없어 undefind를 리턴하고 db연결에 실패한다. 이거 몰라서 한참 찾아봤다.
