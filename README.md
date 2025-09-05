# 도서대여 프로젝트 북매니저 - 프론트엔드

## 🏗️ 프로젝트 소개

**북매니저(Book Manager)**는 공공기관, 학교, 지역 커뮤니티센터 등에서 사용할 수 있는 통합 도서 대여 관리 시스템입니다.  
도서 검색, 대여/반납, 희망도서 신청, 게시판, 공지사항, FAQ 등 다양한 기능을 제공하며,  
관리자와 일반 사용자 인터페이스를 분리하여 효율적이고 편리한 도서관 운영을 지원합니다.

## 🚀 주요 기능

- **도서 검색 및 최신 도서 확인**
- **도서 대여/반납/연체 관리**
- **희망도서 신청 및 관리**
- **공지사항, Q&A, FAQ 등 고객센터**
- **마이페이지(내 정보, 대여 현황, 회원 탈퇴 등)**
- **관리자 기능(도서/회원/배너/게시판 관리 등)**

## 🗂️ 폴더 구조

```
bookmanager-frontend/
  ├─ public/                # 정적 파일(HTML, favicon, manifest 등)
  ├─ src/
  │   ├─ api/               # API 통신 모듈
  │   ├─ components/        # UI 컴포넌트
  │   ├─ hooks/             # 커스텀 훅
  │   ├─ layout/            # 전체 레이아웃
  │   ├─ pages/             # 라우트별 페이지
  │   ├─ routes/            # 라우터 설정
  │   ├─ slices/            # Redux 슬라이스
  │   ├─ util/              # 유틸리티 함수
  │   └─ store.js           # Redux 스토어
  ├─ package.json           # 프로젝트 메타/의존성/스크립트
  └─ README.md              # 프로젝트 설명서
```

## ⚙️ 기술 스택

- **React 19**
- **Redux Toolkit**
- **React Router v7**
- **Styled-components**
- **Axios**
- **Spring Boot + MariaDB** (백엔드, 별도 저장소)
- **gh-pages** (GitHub Pages 배포)

## 🖥️ 실행 방법

1. **의존성 설치**
   ```bash
   npm install
   ```
2. **개발 서버 실행**
   ```bash
   npm start
   ```
   - 기본적으로 `http://localhost:3000`에서 실행됩니다.
   - API 프록시는 `http://localhost:8080`(백엔드)로 설정되어 있습니다.

3. **배포(gh-pages)**
   ```bash
   npm run deploy
   ```

## 📝 환경 변수

- 환경 변수 파일(.env 등)은 `.gitignore`에 의해 버전 관리되지 않습니다.
- 필요시 `REACT_APP_` 접두사를 사용해 환경 변수를 추가할 수 있습니다.

## 🧑‍💻 기여 방법

1. 이슈 등록 및 브랜치 생성
2. 기능 개발 및 커밋
3. PR(Pull Request) 생성

## 🪪 라이선스

- 별도 명시가 없는 한, 본 프로젝트는 MIT 라이선스를 따릅니다.

