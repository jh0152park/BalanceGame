#URL: https://balancegame.pages.dev

# BalanceGame_Front

사용자가 참여하는 밸런스게임 토이 프로젝트

-   프론트엔드: [박재현(나)](https://github.com/jh0152park)
-   백엔드: [김유현](https://github.com/Yuhyeon0516)

# How to API Mocking?

뒷단에서 아직 앞단에서 필요로하는 API 개발이 완료되지 않았을때, API가 완성되길 가만히 기다리면 좋겠지만 그럴 수 없다 허허...

MSW란 Mock Service Worker의 약자로 Service Worker를 활용해서 API 요청을 Mocking 하도록 도와주는 라이브러리다.

Mocking을 한다는것은 단어의 의미 그대로 실제 값을 활용하는 것이 아닌 허구의 값이 사용되도록 만드는 것이다.

## 사용환경

MSW 사용환경은 크게 2가지로 Browser와 Node환경이 있다, 여기서는 Browser에 대해서 공부해보려 한다.

Browser환경은 말 그대로 Browser에서 접속했을때 통신되는 API에 대해 Mocking 처리를 수행하는것이다.

예를들어서 React 서버를 실행해 동작되는 API 처리가 임의로 만들어낸 값을 이용해 수행될 수 있도록 도와주는데,
서두에 말한것 처럼 FE개발은 이루어졌지만 API개발이 아직 이루어지지 않았을때 MSW를 적용해 실제 API가 개발된것 처럼 테스트할 수 있다.

## 사용방법

### Doc:

### - https://mswjs.io/docs/basics/mocking-responses

### - https://mswjs.io/docs/integrations/browser

### REF: https://jforj.tistory.com/364

1. public directory에 msw 초기 설정

    - `npx msw init public/ --save`
    - public directory에 `mockServiceWorker.js` 파일이 생성됨

2. 패키지 설치

    - `npm install msw --save-dev`

3. handler 및 worker 설정
    - `/src/mocks/handlers/` path에 핸들러 정의
    - `/src/mocks/handlers/` path에 `index.ts` 생성 후 정의한 handler를 리턴
    - handler 정의가 끝난 후 `/src/mocks/` path에 `browser.ts` 생성 후 worker 설정


# 실행화면
![image](https://github.com/jh0152park/BalanceGame_Front/assets/118165975/91458fd2-984f-4769-92a6-3d9967540e7a)

![image](https://github.com/jh0152park/BalanceGame_Front/assets/118165975/15c0d294-22c0-45af-9edd-2418461641e7)

![image](https://github.com/jh0152park/BalanceGame_Front/assets/118165975/0927c48f-b218-4630-905e-95f755efe897)
