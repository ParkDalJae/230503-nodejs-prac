function exampleOne(numberValue) {
  //sequence .1
  function integerCheck(data) {
    if (Number.isInteger(data) === true) {
      return data;
    } else {
      throw new Error(`이 함수는 정수가 필요합니다.`);
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

  // Q.3 해당 코드를 async/await로 처리하면 어떻게 작성될까요?
  async function asyncExampleOne() {
    try {
      const checkedNumber = integerCheck(numberValue);
      const first = innerOne(checkedNumber);
      const second = innerTwo(first);
      const third = innerThree(second);
      const fourth = innerFour(third);
      return fourth;
    } catch (error) {
      console.error(error);
    }
  }

  return asyncExampleOne();
}

exampleOne(10).then((result) => console.log(result));
