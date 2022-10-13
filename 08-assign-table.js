//한줄에 3칸 테이블 만들기
//테이블 속에 숫자를 체크할 변수 만들기
let num =1;
let myTable = "<table>";
myTable += "<tr>";
myTable += "<td>" + num + "</td>";
myTable += "<td>" + ++num + "</td>";
myTable += "<td>" + ++num + "</td>"; //for문 배우면 이렇게 안함!
myTable += "</tr>";
myTable += "</table>";  //끝나는곳까지 넣어

document.write(myTable);
