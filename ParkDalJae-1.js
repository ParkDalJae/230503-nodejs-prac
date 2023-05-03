function exampleOne(numberValue) {
  function integerCheck(data, callback) {
    if (Number.isInteger(data) === true) {
      callback(null, data);
    } else {
      callback(new Error(`이 함수는 정수가 필요합니다.`));
    }
  }

  function innerOne(one, callback) {
    callback(null, one + 1);
  }

  function innerTwo(two, callback) {
    callback(null, two + 2);
  }

  function innerThree(three, callback) {
    callback(null, three + 3);
  }

  function innerFour(four, callback) {
    callback(null, four + 4);
  }

  // 호출부분
  integerCheck(numberValue, (err, data1) => {
    if (err) {
      console.log(err);
    } else {
      innerOne(data1, (err, data2) => {
        if (err) {
          console.log(err);
        } else {
          innerTwo(data2, (err, data3) => {
            if (err) {
              console.log(err);
            } else {
              innerThree(data3, (err, data4) => {
                if (err) {
                  console.log(err);
                } else {
                  innerFour(data4, (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log(result);
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

exampleOne(10);
