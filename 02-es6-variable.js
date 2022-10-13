//1. var
var lang = "한글";
console.log(lang);//한글
var lang = "korea";
console.log(lang);//korea
lang="eng";
console.log(lang);//eng



//2. let
let userName="홍길동";
console.log(userName);//홍길동
//let userName="hong"; -> 에러. 재선언불가
userName="hong!!!"
console.log(userName);//hong!!! -> 재할당 가능.



//3. const
//다른 프로그램에선 상수라고 부른다. (변수라고 안부름)
const userAge = 20;
console.log(userAge);//20
//const userAge=100; -> 에러. 재선언불가
//userAge=200; ->에러. 재할당불가