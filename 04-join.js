//변수 4개 만들기 
let nation = "korea";
let city = "seoul";
let year = 2022;
let month = 10;

//year + month 산술연산자
console.log(year+month); //2032

//nation + city (문자 + 문자) 연결연산자
console.log(nation+city); //koreaseoul

//nation + year  앞뒤 둘중 하나라도 문자면 무조건 연결
console.log(nation+year); //korea2022

//nation + year + month
console.log(nation+year+month); //korea202210
console.log(nation+(year+month)); //korea2032 ==>괄호는 우선순위가 높음


//year + month + nation
console.log(year+month+nation); //2032korea

//저는 korea의 seoul에 살고 지금은 2022년이고 10월입니다.
console.log("저는 " + nation + "의 " + city +"에 살고 지금은 " + year + "년이고 "
+ month + "월입니다.");

