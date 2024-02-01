# Node 이미지를 기반으로 합니다.
FROM node:18

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY package*.json ./

RUN npm install
# 프로덕션을 위한 코드를 빌드하려면 아래를 사용하세요.
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .

# Yarn global 설치
RUN npm install -g yarn

# dependencies 설치
RUN yarn install

# React 앱 빌드
RUN yarn build

# 앱이 3000번 포트에서 실행될 것이라는 것을 Docker에 알려줍니다.
EXPOSE 3000

# 앱 실행
CMD [ "yarn", "start" ]