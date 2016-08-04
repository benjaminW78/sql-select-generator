# sql-select-generator [![Build Status](https://travis-ci.org/MathRobin/sql-select-generator.svg)](https://travis-ci.org/MathRobin/sql-select-generator) [![Code Climate](https://codeclimate.com/github/MathRobin/sql-select-generator/badges/gpa.svg)](https://codeclimate.com/github/MathRobin/sql-select-generator)

### Table of Contents
**[Setup](#setup)**  
**[Usage](#usage)**  
**[Stupidity](#stupidity)**  
**[Development init](#development-init)**


SQL query string SELECT generator

Fully designed with TDD. Not production ready for the moment.

## Setup

```shell
npm i -S sql-select-generator
```

## Usage

For the moment, look in tests, this tool is not ready to use. Even in development for pre-alpha or any kind of version name you can imagine.

```javascript
const
    sqlString = require('sql-select-generator')();

sqlString
    .columns(['id', {
        label: 'name',
        alias: 'n'
    }])
    .from({
        label: 'test',
        alias: 't'
    })
    .order({
        label: 'name',
        order: 'DESC'
    });

console.log(sqlString);
// SELECT id, name AS n FROM test AS t ORDER BY name DESC;
```

### Stupidity

This tool doesn't prevent misusage and stupidity. So if your request contains, for example, a call to `join` method but no one to `from` method, your request will probably not work. No warning or error will be provided from this tool for the moment.

Another example, if you ask your request to select a column name and this one is not present in the from/join called tables, there will be no warnings or error.

Remember this tool is an helper to build your SQL queries string. **Not a magic tool.**

## Development init

Start could start develope for this project by `fork` it and  `clone your fork`. after just run this CMD in terminal:
``` bash 

$npm run init

``` 

### Construct
Requiring the module will provide a function you can call to get a fresh new instance of sql generator object.

### Get the generated request
The object, got from calling the method provided by module, come with a toString method. So just put it like in the example above.

### columns
You can provide just a string, an object with label property (mandatory) and alias property (optionnal). Or an array of these mixed.

### order
You can provide just a string, an object with label property (mandatory) and direction property (optionnal). Or an array of these mixed.

## Licence

WTFPL. Do what you want with this.
