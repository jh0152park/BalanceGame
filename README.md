# BalanceGame_Front

Instead of me balance game frontend repository

# How to API Mocking?

뒷단에서 아직 앞단에서 필요로하는 API 개발이 완료되지 않았을때, API가 완성되길 가만히 기다리면 좋겠지만 그럴 수 없다 허허...

MSW란 Mock Service Worker의 약자로 Service Worker를 활용해서 API 요청을 Mocking 하도록 도와주는 라이브러리다.

Mocking을 한다는것은 단어의 의미 그대로 실제 값을 활용하는 것이 아닌 허구의 값이 사용되도록 만드는 것이다.

## 사용환경

MSW 사용환경은 크게 2가지로 Browser와 Node환경이 있다, 여기서는 Browser에 대해서 공부해보려 한다.

Browser환경은 말 그대로 Browser에서 접속했을때 통신되는 API에 대해 Mocking 처리를 수행하는것이다.

예를들어서 React 서버를 실행해 동작되는 API 처리가 임의로 만들어낸 값을 이용해 수행될 수 있도록 도와주는데,
서두에 말한것 처럼 FE개발은 이루어졌지만 API개발이 아직 이루어지지 않았을때 MSW를 적용해 실제 API가 개발된것 처럼 테스트할 수 있다.
