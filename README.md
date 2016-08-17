# react-jest-coverage-test
A test to see if we can hit 4x100% coverage;

Currently it seems we can only hit 100% on lines, the rest are hit and miss.

`npm test`

```
Using Jest CLI v14.1.0, jasmine2, babel-jest
 PASS  __tests__/HelloWorld.js (8.717s)
  HelloWorld
    #test
      ✓ it should return "Hello World" (4ms)

 PASS  __tests__/Number.js (9.223s)
  UI Number atom
    ✓ it should display the default formating (15ms)
    ✓ it should display the default number wrapped in a span (3ms)
    ✓ it should allow the formating as a prop (2ms)
    ✓ it should allow a custom formating (1ms)
    ✓ it should allow a custom tag (2ms)
    ✓ it should allow a custom props (example: component as a link) (2ms)

 PASS  __tests__/Currency.js (9.397s)
  UI Currency atom
    ✓ it should display the default formating (34ms)
    ✓ it should display the default number wrapped in a span (9ms)
    ✓ it should allow the formating as a prop (4ms)
    ✓ it should allow a custom formating (5ms)
    ✓ it should allow a custom tag (3ms)
    ✓ it should allow a custom props (example: component as a link) (5ms)
    ✓ it should allow a custom class name (4ms)
    ✓ it should not pass the custom className to the child (56ms)
    ✓ it should properly calculate the classNames (66ms)

16 tests passed (16 total in 3 test suites, run time 10.48s)
---------------------------|----------|----------|----------|----------|----------------|
File                       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------------------|----------|----------|----------|----------|----------------|
 react-jest-coverage-test/ |    79.31 |    63.33 |    78.57 |      100 |                |
  Currency.jsx             |    68.18 |    66.67 |       75 |      100 |                |
  HelloWorld.js            |    81.82 |       50 |    71.43 |      100 |                |
  Number.jsx               |    92.86 |       75 |      100 |      100 |                |
---------------------------|----------|----------|----------|----------|----------------|
All files                  |    79.31 |    63.33 |    78.57 |      100 |                |
---------------------------|----------|----------|----------|----------|----------------|
```

even if we force latest `jest` and `bable-jest`:

`rm -rf node_modules/jest; npm install jest@test babel-jest@test multimatch istanbul-lib-instrument; npm test`

```

```

GREAT!


We can also apply the .diff (`git apply untested.diff`) which comments out some of the tests.

An re-run using `jest@latest` we get :

```
> jest --no-cache

  HelloWorld
    #test
      ✓ should return "Hello World" (3ms)

 PASS  __tests__/HelloWorld.js (7.763s)
  UI Number atom
    ✓ should display the default formating (13ms)
    ✓ should display the default number wrapped in a span (3ms)
    ✓ should allow the formating as a prop (1ms)
    ✓ should allow a custom formating (1ms)
    ✓ should allow a custom tag
    ✓ should allow a custom props (example: component as a link) (2ms)

 PASS  __tests__/Number.js (8.288s)
  UI Currency atom
    ✓ should display the default formating (33ms)
    ✓ should display the default number wrapped in a span (10ms)
    ✓ should allow the formating as a prop (5ms)
    ✓ should allow a custom formating (5ms)
    ✓ should allow a custom tag (4ms)
    ✓ should allow a custom props (example: component as a link) (7ms)
    ✓ should allow a custom class name (3ms)
    ✓ should not pass the custom className to the child (67ms)
    ✓ should properly calculate the classNames (79ms)

 PASS  __tests__/Currency.js (8.858s)
---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
All files      |    84.62 |      100 |       50 |    84.62 |                |
 Currency.jsx  |    85.71 |      100 |       50 |    85.71 |             28 |
 HelloWorld.js |        0 |      100 |        0 |        0 |              3 |
 Number.jsx    |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
16 tests passed (16 total in 3 test suites, run time 10.008s)
```

Great!
