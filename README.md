# Adonis Validators

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