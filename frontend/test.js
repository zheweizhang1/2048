class Test {
    constructor() {}
  
    // Runs all the tests.
    runAll() {
      const testName = this.__proto__.constructor.name;
      console.log(`--> Running test: ${testName}`);
  
      let testCount = 0;
      let reflection = Reflect.getPrototypeOf(this);
      let functionNames = Reflect.ownKeys(reflection);
      for (let testIndex = 0; testIndex < functionNames.length; ++testIndex) {
        let functionName = functionNames[testIndex];
        if (functionName == 'constructor') {
          continue;
        }
        if (functionName.startsWith('_')) {
          continue;
        }
        const testcaseName = testName + '/' + functionName;
        console.log(`Running testcase: ${testcaseName}`);
        ++testCount;
        this[functionName]();
        console.log(`Testcase ${testcaseName} passed`);
      }
  
      this.assertTrue(testCount > 0);
      console.log(`Success: All tests of ${testName} passed`);
    }
  
    // Reports a test error if two quantities are not equal.
    assertEquals(expected, actual) {
      if (expected == actual) {
        return;
      }
      this.reportFailure(`Expected ${expected} but got ${actual}.`);
    }
  
    // Reports a test error if the boolean condition is not true.
    assertTrue(condition) {
      if (!condition) {
        this.reportFailure('Condition is not true');
      }
    }
  
    // Reports a test error if the two quantities are not almost equal.
    assertAlmostEqual(expected, actual) {
      if (Utils.almostEqual(expected, actual)) {
        return;
      }
      this.reportFailure(`Expected ${expected} to be almost equal to ${actual}`);
    }
  
    // Causes the error to interrupt the program.
    reportFailure(error) {
      throw new Error(`Failure: Test failure: ${error}`);
    }
  }