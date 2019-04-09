# Adonis Validators
![npm (tag)](https://img.shields.io/npm/v/@conceptho/adonis-validators/latest.svg?color=green&logo=npm&style=for-the-badge)
![CircleCI branch](https://img.shields.io/circleci/project/github/conceptho/adonis-validators/master.svg?logo=circleci&style=for-the-badge)
![Codecov branch](https://img.shields.io/codecov/c/github/conceptho/adonis-validators/master.svg?logo=codecov&style=for-the-badge)

How to Use:

 1. Install the npm package: <br>
 `npm install @conceptho/adonis-validators --save`
 
 2. Register it under `providers` in `start/app.js`. <br>
  ```javascript
  const providers = [
    /* Some providers here.
       Also, make sure to define the default Validator before */
  '@conceptho/adonis-validators'
  ];
  ```

  3. Enjoy!


## Available Functions
- cpf
  ```javascript
  const rules = {
    cpf: 'required|string|cpf'
  }
  ```
- uniqueWhere
  ```javascript
  const rules = {
    process_number: 'required|string|uniqueWhere:lawsuits,process_number,workspace_id',
  }
  ```
- exists
  ```javascript
  const rules = {
    user_id: 'required|exists:users,id',
  }
  ```
- isBetween
  ```javascript
  const rules = {
    // supports float
    value: 'number|isBetween:0.0,5',
  }
  ```
- only
  ```javascript
  const sample = {
    size: 1,
    height: 2,
    foo: 'bar'
  }

  // this validation will fail
  const rules = {
    value: 'only:size,height',
  }
  ```
- duration
  ```javascript
  const sample = {
    months: 2,
    seconds: 3
  }

  const rules = {
    value: 'duration',
  }
  ```
- cnpj
  ```javascript
  const samples = {
    cnpj: '15.170.010/0001-43',
    cnpj2: '15170010000143'
  }

  // fails
  const rules = {
    cnpj: 'cnpj',
    cnpj2: 'cnpj',
  }
  ```