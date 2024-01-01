#설치한 라이브러리
npm install react-modal
npm install react-table --save
npm install --save-dev @babel/plugin-proposal-private-property-in-object
npm install react-icons --save
npm install react-router --save

#시작 방법
터미널에 npm install와 위에 라이브러리 설치 후 npm start 명령어 기입


*/DB는 리액트와 관련된 도서밖에 없습니다./*
#(능숙한 사용자 관점으로 보는)대표적인 구현 기능
간략 검색(brief) : 보이는 검색 창에 리액트와 관련된 키워드를 치면 검색결과가 나오고 클릭하면 expain 페이지로 넘어가서 도서 상세 내용이 나옴

상세 검색 (detail) 리액트와 관련된 키워드와 자료 유형에서 단행본을 클릭하면 관련 도서들 출력됨 또 검색을 조건을 추가하고 싶은 경우 결과 화면과 같이 출력되는 검색창에 저자이름이나 출판사 명을 쓰고 다시 검색 가능함. 결과 내 검색이나 정렬을 할 수 있음. 클릭하면 expain 페이지로 넘어가서 도서 상세 내용이 나옴

주제별 검색(topic): 총류에서 005프로그래밍을 클릭하면 관련 도서들이 나오도록 구현. 클릭하면 expain 페이지로 넘어가서 도서 상세 내용이 나옴

도서 상세 정보(expain): 대출 예약 버튼을 만들어 책의 대출 여부를 나타냄. 댓글 기능으로 좋아요를  5개 이상 눌리면 베스트 댓글이 되면 상단으로 올라감

기타: 로고를 누르면, brief 페이지로 이동 및 에러 페이지 구현



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
