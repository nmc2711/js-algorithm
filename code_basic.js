document.getElementById("app").innerHTML = `
<h1>알고리즘 기본문제 풀이</h1>
<p>c1. 세 수 중 최솟값</p>
<p>c2. 삼각형 판별하기</p>
<p>c3. 연필 개수</p>
<p>c4. c4. 1부터 N까지의 합 출력하기</p>
<p>c5. 최솟값 구하기</p>
<p>c5-1. 내장함수로 최솟값, 최댓값 구하기</p>
<p>c.6 홀수의 합 구하기</p>
<p>c7. 자동차 주차 10부제</p>
<p>c8. 진짜 일곱 난장이 찾기</p>
<p>c9. 특정문자열 #으로 찾아바꾸기</p>
<p>c9-1. 특정문자열 #으로 찾아바꾸기</p>
<p>c10. 특정 문자 갯수 찾기</p>
<p>C11. 대문자 찾기</p>
<p>c12. 대문자로 통일</p>
<p>c13. 대소문자 서로변경</p>
<p>c14. 가장 긴 문자열</p>
<p>c15. 가운데 문자 출력</p>
<p>c16. 중복문자 제거</p>
<p>c16-1. 중복문자 개수</p>
<p>c17. 중복된 단어 제거하기</p>
`;

// c1. 세 수 중 최솟값
// 100이하의 자연수 A,B,C 를 입력받아 세 수 중 가장 작은 값을
// 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다.)

// ** 풀이 KEYWORD 가장 작은 값, 값 비교

function solutionC1(a, b, c) {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer) answer = c;
  return answer;
}

console.log("1번", solutionC1(6, 5, 11));

// c2. 삼각형 판별하기
// 길이가 서로 다른 A,B,C 세 개의 막대 길이가 주어지면 이 세 막대로
// 삼각형을 만들 수 있으면 "YES"를 출력하고 만들수 없으면 "NO" 출력

// ** 풀이 KEYWORD: 출력값 "YES"or"NO", 삼각형 판별 조건 비교
// 길이로 삼각형 판별조건? 두변의 합이 무조건 한변의 길이보다 커야한다.

function solutionC2(a, b, c) {
  let answer = "YES";
  let total = a + b + c;
  let max;

  if (a < b) {
    max = b;
  } else {
    max = a;
  }
  if (max < c) max = c;

  if (total - max <= max) answer = "NO";
  // 어쨋든 세변의 합을 구한 토탈에서 그중 가장 큰 길이의 변을 빼면
  // 나머지 작은 두변의 합인데 그변의 합이 무조건 가장 큰 길이의 변보다 커야한다.

  return answer;
}

console.log("2번", solutionC2(6, 7, 11));

// c3. 연필 개수
// 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
// N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그랩을 작성.

// ** 풀이KEYWORD: 출력 연필의 다스 수, 연산힌트 1다스 12자루 %

function solutionC3(a) {
  let answer;

  answer = Math.ceil(a / 12);
  // 출력값이 다스 이므로 12명이 넘어간다면 올림을 통한 다스를 추가해야한다.
  return answer;
}

console.log("3번", solutionC3(30));

// c4. 1부터 N까지의 합 출력하기
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성

// **풀이 KEYWORD: 출력값? 총합, 해당조건을 전체적으로 순회

function solutionC4(a) {
  let answer = 0;

  for (let i = 1; i <= a; i++) {
    answer = answer + i;
  }
  return answer;
}

console.log("4번", solutionC4(6));

// c5. 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// **풀이 KEYWORD: 배열로 주어진 숫자 값중 최솟 값구하기, 값비교
function solutionC5(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  // 가장 작은 값을 탐색 초반에 세팅하기위해 MAX_SAFE_INTEGER 최댓값 선언
  for (let i = 1; i < arr.length; i++) {
    if (i < min) min = arr[i];
  }
  answer = min;
  return answer;
}
console.log("5번", solutionC5([5, 3, 7, 11, 2, 15, 17]));

// c.5-1 내장함수로 최솟값, 최댓값 구하기
function solutionC5_1(arr) {
  let answer = Math.min(...arr);
  // let answer = Math.min.apply(null,arr);
  // let answer = Math.max(...arr);

  return answer;
}
console.log("5-1번", solutionC5_1([5, 3, 7, 11, 2, 15, 17]));

// c.6 홀수의 합 구하기
// 7개의 자연수가 주어질때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
// 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

function solutionC6(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    // 홀수 탐색
    if (x % 2 === 1) {
      sum += x;
      // 홀수중 최솟값 탐색
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);

  return answer;
}
// 홀수의 합, 홀수중 가장 작은값
console.log("6번", solutionC6([12, 77, 38, 41, 53, 92, 85]));

// c.7 자동차 주차 10부제
// 서울시는 6월 1일 부터 교통 혼잡을 막기 위해 자동차 10부제를 시행한다. 자동차 10부제는
// 자동차 번호의 일의 잘 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지
// 하는 것이다. 위반한 자동차 대수를 출력하는 프로그램을 작성. 배열로 차 뒷번호 두자리 제공

function solutionC7(arr, day) {
  let answer = 0;

  for (let x of arr) {
    if (x % 10 === day) {
      answer++;
    }
  }

  return answer;
}

console.log("7번", solutionC7([25, 23, 11, 47, 53, 17, 33], 3));

// c8. 진짜 일곱 난장이 찾기
// 마녀를 피해 일곱 난쟁이들과 함께 살고있는 백설공주에게 위기가 찾아왔다.
// 돌아와보니 9명인것이다. 진짜 난장이 7명의 키의 합은 100이었다.
// 9명의 키가 주어진 배열을 제공할테니 진짜 난장이들의 키가 담긴 배열을 출력하라.

function solutionC8(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  // 난쟁이들(9명)의 키의 합에서 가짜 둘을 뻇을때 100이면 그 두명이 가짜이다.
  // 이중 포문을 써야 할거같은데 예를들어 첫번째 난쟁이와 두번째 난쟁이의 [1,2]라고한다면
  // 두번째포문 당시 두번쨰 인자를 기준으로 [2,1] 이 두명은 같은 난쟁이 그룹이므로
  // 첫번쨰 포문 당시 마지막 인자를 돌지 않아도 된다 따라서 arr.length-1을 한것
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        // i 를 먼저 지우게 되면 배열의 길이가 줄어들어 정확한 계산이 힘드므로
        // j 의 순서 i 보다 뒤에 있다는게 보장 되어있으니 j 부터 삭제
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}
console.log("8번", solutionC8([20, 7, 23, 19, 10, 15, 25, 8, 13]));

// c.9 특정문자열 #으로 찾아바꾸기
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어
// 출력하는 프로그램을 작성

function solutionC9(str) {
  let answer = str;
  answer = answer.replace(/A/g, "#");
  return answer;
}
console.log("9번", solutionC9("BANANA"));

// c.9-1 특정문자열 #으로 찾아바꾸기

function solutionC9_1(str) {
  let answer = "";

  for (let x of str) {
    if (x === "A") {
      answer += "#";
    } else {
      answer += x;
    }
  }
  return answer;
}
console.log("9-1번", solutionC9_1("BANANA"));

//c.10 특정 문자 갯수 찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에
// 몇 개 존재하는지 알아내는 프로그램을 작성하세요.

function solutionC10(str, s) {
  let answer = 0;
  for (let x of str) {
    if (x === s) {
      answer++;
    }
  }
  return answer;
}

console.log("10번", solutionC10("RRRRRSSRRRDDRRQWE", "R"));

//C.11 대문자 찾기
// 한 개의 문자열 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
// 을 작성하세요.

function solutioC11(str) {
  let answer = 0;
  for (let x of str) {
    if (x === x.toUpperCase()) {
      answer++;
    }
    // 아스키코드 대문자 조건
    // let num = x.charCodeAt();
    // if(num>65 && num<=90)answer++;
  }
  return answer;
}

console.log("11번", solutioC11("aBCDEbsX"));

// c.12 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력
function solutionC12(str) {
  let answer = "";

  for (let x of str) {
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    } else {
      answer += x;
    }
    // 유니코드식 소문자 조건
    // let num = x.charCodeAt();
    // if (num >= 97 && num <= 122) {
    //   answer += String.fromCharCode(num - 32);
    //   // 대문자로 변환
    // } else {
    //   answer += x;
    // }
  }
  return answer;
}

console.log("12번", solutionC12("tOmaTo"));

// c13. 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력

function solutionC13(str) {
  let answer = "";
  for (let x of str) {
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    } else {
      answer += x.toLowerCase();
    }
  }
  return answer;
}
console.log("13번", solutionC13("tOmaTo"));

// c14. 가장 긴 문자열
// 여러개의 단어가 배열안에 주어지는 그 중 가장긴 문자열을 출력하시오
function solutionC14(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
console.log(
  "14번",
  solutionC14(["teacher", "time", "student", "beautiful", "good"])
);

// c15. 가운데 문자 출력
// 소문자로 된 단어가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
// 단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solutionC15(str) {
  let answer;
  // 3자리 일경우 몫은 1이된다 그렇게 되면 가운데를 가르킬순없지만 index로
  // 판단하려고 하기때문에 1이면 두번쨰를 사실상 가르킨다.
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    answer = str.substring(mid, mid + 1);
  } else {
    answer = str.substring(mid - 1, mid + 1);
    // 짝수는 food를 예를들면 mid가 2 , 즉 두번째 o 이므로
    // 짝수같은 경우 첫번쨰 o 가 1이다 즉 mid 보다 한칸 이전이며 두개를 뽑아야하므로
    // mid-1 , mid 두개를 뽑고 mid+1 이전까지 서브스트링
  }
  // substr도 사용가능
  // if (str.length % 2 === 1) {
  //   answer = str.substr(mid, 1);
  // } else {
  //   answer = str.substr(mid - 1, 2);
  // }
  return answer;
}

console.log("15번", solutionC15("ssoz"));

// c16. 중복문자 제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성.
function solutionC16(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    //console.log(str[i], i, str.indexOf(str[i]));
    // 중복되는 문자열부터는 i의 값과 indexof로 찾은 값이 다름 (먼저 찾은 문자 인덱스를 탐색하기때문)
    if (str.indexOf(str[i]) === i) {
      answer += str[i];
    }
  }
  return answer;
}
console.log("16번", solutionC16("ksekkset"));

// c16-1 중복문자 개수
function solutionC16_1(str) {
  let answer = 0;
  let pos = str.indexOf("k");

  while (pos !== -1) {
    answer++;
    pos = str.indexOf("k", pos + 1);
    // 첫번쨰 k의 인덱스 이후의 k를 찾기위해
    // 두번쨰 탐색부터는 k가 4번째있다면 5번째 순서 index 부터 탐색한다.
  }
  return answer;
}
console.log("16_1번", solutionC16_1("ksekkset"));

//  c17. 중복된 단어 제거하기
// n개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성

function solutionC17(arr) {
  let answer = [];
  answer = arr.filter((item, idx) => {
    // 키값과 일치하게 되다면 ? 최초 글자라는 뜻
    // 오렌지의 키값은 4다. 근데 indexof로 탐색하면 4다 그럼 배열에 필터로 넣어준다
    // 두번쨰 카인드의 키값은 1이다. 근데 indexof로 탐색하면 0이다 이미 찾았으므로
    // 따라서 엔서 배열에 넣어주지않는다.
    if (arr.indexOf(item) === idx) return item;
  });
  return answer;
}
console.log(
  "17번",
  solutionC17(["kind", "kind", "kind", "orange", "pop", "kind"])
);
