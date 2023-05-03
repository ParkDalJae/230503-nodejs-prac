async function exampleOne(numberValue) {
  function integerCheck(data) {
    return new Promise((resolve, reject) => {
      if (Number.isInteger(data) === true) {
        resolve(data);
      } else {
        reject(new Error(`이 함수는 정수가 필요합니다.`));
      }
    });
  }

  function innerOne(one) {
    return new Promise((resolve) => {
      resolve(one + 1);
    });
  }

  function innerTwo(two) {
    return new Promise((resolve) => {
      resolve(two + 2);
    });
  }

  function innerThree(three) {
    return new Promise((resolve) => {
      resolve(three + 3);
    });
  }

  function innerFour(four) {
    return new Promise((resolve) => {
      resolve(four + 4);
    });
  }

  try {
    const one_1 = await integerCheck(numberValue);
    const two_1 = await innerOne(one_1);
    const three_1 = await innerTwo(two_1);
    const four_1 = await innerThree(three_1);
    return innerFour(four_1);
  } catch (err) {
    console.error(err);
  }
}

exampleOne(10).then((result) => {
  console.log(result);
});
