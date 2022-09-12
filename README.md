# ✔️ 감성숙소 추천 Room-ate 
___ 
이노베이션 캠프 미니프로젝트 주차에 진행한 과제입니다 :)   
백엔드와 프론트엔드가 함께한 첫 프로젝트입니다.   

## 📂컴포넌트 구조  
___  
* src  
   +api
    -index.js(axios설정 전역적으로 해줌)
   + components (컴포넌트를 모은 폴더)  
     - Comment.jsx  
     - Detail.jsx  
     - Header.jsx  
     - Login.jsx  
     - Main.jsx 
     - Signup.jsx    
   
   +elements   
    -input.jsx
       
   + Pages (페이지들을 모은 폴더)  
     - DetailPage.jsx     
     - LoginPage.jsx   
     - MainPage.jsx   
     - SignupPage.jsx   
       
   + redux  
     - configStore.js (store저장)   
     - slice  
        + commentSlice.js   
        + likeSlice.js.  
   + shard   
   - GlobalRoute.jsx   
* App.js  
   
## ⚙구현기능  
___  
* 회원가입: 회원가입 유효성 검사  
* 로그인: 로그인 유효성 검사   
* 메인페이지   
* 상세페이지: 좋아요 기능 및 댓글 CRUD   
   
## 🗓 프로젝트 기간  
___  
* 2022년 9월 2일 ~ 2022년 9월 8일

## 👥 팀 소개    
___  
* [Front] 심유선, 조수진   
* [Backend] 강윤주, 이수민   
* Backend Github: https://github.com/sooominnn/MiniProject_BackEnd

## 💥Error  
___  
* header에 accessToken 받아오지 못함-> accessToken undefinded 뜨는 에러 => 'Access-Token' 을 'access-token'으로 변경함   
*  리스트를 map 돌리면 빈화면으로 나타나며 빈화면 나타남 > 코드 앞에 ?붙여서 해결 (```옵셔널체이닝```)   
