# userinfo_app
22.12.29(목)

서비스 URL : https://port-0-userinfo-app-fyyf25lbohiha7.gksl2.cloudtype.app/

## 평가과제 :: 10차 평가_SQL 활용 Database 구축 및 고객정보 앱 만들기

#### 평가 내용
- Task_1
  - SQL(SQLite)문으로 제공된 데이터타입에 기준한 테이블속성 정의
  - id는 고유의 키값으로, 자료 추가시 자동으로 증가하여 입력되도록
  - 데이터 필드 5개 이상 작성
- Task_2
  - Node.js에서 Task_1의 DB 모델을 적용한 응용앱 구현 및 배포
  - DB 테이블에서 고객정보 출력
    - 고객 리스트 내림차순으로 출력
    - 리스트 개수 표시
  - 삭제 기능
    - 삭제 전 경고창 출력, 확인 눌렀을 때만 삭제되도록)
  - 검색 기능 
    - 고객명으로 검색
  - 고객 리스트 추가 기능
    - 새로운 고객정보 입력시 화면에 노출되고 DB에 추가

---
#### 화면구현 예시

<table>
<tr>
<td><img src="https://github.com/chunjaeilu/userinfo_app/blob/master/public/images/app_01_main.png?raw=true" width="250"><p>메인화면</p></td>
<td><img src="https://github.com/chunjaeilu/userinfo_app/blob/master/public/images/app_02_search.png?raw=true" width="250"><p>검색 예시</p></td>
<td><img src="https://github.com/chunjaeilu/userinfo_app/blob/master/public/images/app_03_del.png?raw=true" width="250"><p>삭제 예시</p></td>
</tr>
</table>

---
#### Update Note
-12.30(금)
  - 검색결과 없을 때 알림문구 추가 "유저 정보를 찾을 수 없습니다"
  - 전화번호 입력필드 수정 (하이픈 생략해서 입력, 출력할 때 하이픈 추가하도록 replace 코드 추가)
  - 유저리스트 테이블 태그로 변경 (ul >> table)
    - 테이블 사이즈 고정, 목록 길어지면 스크롤
    - 스크롤시 thead 상단에 고정
  - 모바일 css 추가 (폰트사이즈, 레이아웃 조정)




