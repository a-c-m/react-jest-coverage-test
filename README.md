# react-jest-coverage-test
A test to see if we can hit 4x100% coverage;

Currently it seems we can only hit 100% on lines, the rest are hit and miss.

`npm test`

```
Using Jest CLI v14.1.0, jasmine2, babel-jest
 PASS  __tests__/HelloWorld.js (9.686s)
  HelloWorld
    #test
      ✓ it should return "Hello World" (7ms)

 PASS  __tests__/Number.js (10.166s)
  UI Number atom
    ✓ it should display the default formating (14ms)
    ✓ it should display the default number wrapped in a span (3ms)
    ✓ it should allow the formating as a prop (1ms)
    ✓ it should allow a custom formating (1ms)
    ✓ it should allow a custom tag (1ms)
    ✓ it should allow a custom props (example: component as a link) (3ms)

 PASS  __tests__/Currency.js (10.434s)
  UI Currency atom
    ✓ it should display the default formating (31ms)
    ✓ it should display the default number wrapped in a span (9ms)
    ✓ it should allow the formating as a prop (3ms)
    ✓ it should allow a custom formating (5ms)
    ✓ it should allow a custom tag (5ms)
    ✓ it should allow a custom props (example: component as a link) (8ms)
    ✓ it should allow a custom class name (4ms)
    ✓ it should not pass the custom className to the child (51ms)
    ✓ it should properly calculate the classNames (60ms)

16 tests passed (16 total in 3 test suites, run time 11.668s)
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

even if we force latest jest (and `multimatch` and `istanbul-lib-instrument`):

`rm -rf node_modules/jest-cli; npm install jest@test multimatch istanbul-lib-instrument; npm test`

```
HelloWorld
  #test
    ✓ should return "Hello World" (9ms)

PASS  __tests__/HelloWorld.js (12.858s)
UI Number atom
  ✓ should display the default formating (16ms)
  ✓ should display the default number wrapped in a span (2ms)
  ✓ should allow the formating as a prop (1ms)
  ✓ should allow a custom formating (1ms)
  ✓ should allow a custom tag (2ms)
  ✓ should allow a custom props (example: component as a link) (3ms)

PASS  __tests__/Number.js (13.451s)
UI Currency atom
  ✓ should display the default formating (37ms)
  ✓ should display the default number wrapped in a span (10ms)
  ✓ should allow the formating as a prop (4ms)
  ✓ should allow a custom formating (4ms)
  ✓ should allow a custom tag (5ms)
  ✓ should allow a custom props (example: component as a link) (9ms)
  ✓ should allow a custom class name (4ms)
  ✓ should not pass the custom className to the child (55ms)
  ✓ should properly calculate the classNames (78ms)

PASS  __tests__/Currency.js (13.651s)
---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
All files      |    79.31 |    63.33 |    78.57 |      100 |                |
 Currency.jsx  |    68.18 |    66.67 |       75 |      100 |                |
 HelloWorld.js |    81.82 |       50 |    71.43 |      100 |                |
 Number.jsx    |    92.86 |       75 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
16 tests passed (16 total in 3 test suites, run time 15.26s)
Please run `npm install` to use the version of Jest intended for this project.
```
