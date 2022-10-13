//인적사항을 저장할 공간 만들기
//이름, 나이
var userName = "홍길동";
var userAge = 18;
//성별 남자=true(1) , 여자 = false(0) boolean 타입 
var gender = true;
//취미
var hobby;

console.log(userName);
console.log(userAge);
console.log(gender);
console.log(hobby); //undefined (정의된 적이 없다는 뜻!)
userName = null; //데이터를 비워주고 싶을 때
console.log(userName); //null 이 출력된다.