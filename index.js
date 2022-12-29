const express = require("express");
const app = express();
const ejs = require("ejs");
const { sequelize, UserInfos } = require("./database");

// DB 연결
sequelize.sync().then(function (res) {
  console.log("데이터 모델 연결됨");
});

// post 사용 모듈 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ejs를 view 엔진으로 설정
app.set("view engine", ejs);

// 정적파일 경로 지정
app.use(express.static("public"));

// home
app.get("/", async function (req, res) {
  let userInfos = await UserInfos.findAll();
  res.render("pages/index.ejs", { userInfos });
});

// 검색 요청
app.post("/search", async function (req, res) {
  let searchName = req.body.search_name;
  let userInfos = await UserInfos.findAll({ where: { name: searchName } });
  res.render("pages/index.ejs", { userInfos });
});

// 삭제 요청
app.post("/del/:id", async function (req, res) {
  let paramsId = req.params.id;
  await UserInfos.destroy({
    where: { id: paramsId },
  });
  res.redirect("/");
});

// 추가 요청
app.post("/new_user", async function (req, res) {
  const newName = req.body.user_name;
  const newAge = req.body.user_age;
  const newSex = req.body.user_sex;
  const newContact = req.body.user_tel;

  await UserInfos.create({
    name: newName,
    age: newAge,
    sex: newSex,
    contact: newContact,
  });
  res.redirect("/");
});

// 포트 지정 & 서버 오픈
const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
