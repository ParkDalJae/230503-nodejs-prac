class Example {
  constructor(numberValue) {
    this.numberValue = numberValue;
  }

  integerCheck(data) {
    if (Number.isInteger(data) === true) {
      return data;
    } else {
      throw new Error(`이 함수는 정수가 필요합니다.`);
    }
  }

  innerOne(one) {
    return one + 1;
  }

  innerTwo(two) {
    return two + 2;
  }

  innerThree(three) {
    return three + 3;
  }

  innerFour(four) {
    return four + 4;
  }

  async exampleOne() {
    try {
      const num = this.integerCheck(this.numberValue);
      const first = this.innerOne(num);
      const second = this.innerTwo(first);
      const third = this.innerThree(second);
      const fourth = this.innerFour(third);
      return fourth;
    } catch (err) {
      console.error(err);
    }
  }
}

async function test() {
  const example = new Example(10);
  const result = await example.exampleOne();
  console.log(result);
}

test();
