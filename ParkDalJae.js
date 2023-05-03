function exampleOne(numberValue) {
  //sequence .1
  //매개변수가 정수인지 확인하는 함수  integerCheck()
  function integerCheck(data) {
    if (Number.isInteger(data) === true) {
      return data;
    } else {
      return new Error(`이 함수는 정수가 필요합니다.`);
    }
  }
  // sequence .2
  function innerOne(one) {
    return one + 1;
  }
  // sequence .3
  function innerTwo(two) {
    return two + 2;
  }
  // sequence .4
  function innerThree(three) {
    return three + 3;
  }
  // sequence .5
  function innerFour(four) {
    return four + 4;
  }
  //sequence(시퀀스)가 1 -> 2 -> 3 -> 4 -> 5 형태로 샐행되어야 합니다.
  //내부함수 inner 시리즈를 순서대로 실행시켜 리턴된 값을 다음 함수에 인자로 넘겨주는  형태가
  //아래에 작성되어 있습니다
  //작동에는 전혀 이상이 없지만,
  //아무래도 도출되는 것은 하나의 목적일 뿐인데,
  //변수가 낭비되는 것 같습니다

  //난이도 중급 : Q.1 해당 코드를 콜백 지옥으로 처리하면 어떻게 작성될까요? 결과값은 20입니다
  //난이도 고급 : Q.2 해당 코드를 Promise로 처리하면 어떻게 작성될까요?
  //난이도 고급 : Q.3 해당 코드를 async/await로 처리하면 어떻게 작성될까요?
  //배운적 없음 : Q.4 부모 함수를 클래스로 만들고, 인스턴스에 `동적`으로 4개의 inner 함수를 매서드로 추가할 수 있을까요?

  //호출부분
  integerCheck(numberValue);
  const first = innerOne(numberValue);
  const second = innerTwo(first);
  const third = innerThree(second);
  const fourth = innerFour(third);
  return fourth;
}

const result = exampleOne(10);
console.log(result);
