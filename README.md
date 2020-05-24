[![Build Status](https://travis-ci.org/micah-akpan/sign-teller.svg?branch=develop)](https://travis-ci.org/micah-akpan/sign-teller) [![Coverage Status](https://coveralls.io/repos/github/micah-akpan/sign-teller/badge.svg?branch=develop)](https://coveralls.io/github/micah-akpan/sign-teller?branch=develop)


# Sign Teller

Sign Teller is a library that provides information about zodiac signs. 
Ever need to wish a friend happy birthday with their zodiac sign, say Happy Birthday, **Gemini**? then you need `sign-teller`.

## Getting Started

To use `sign-teller` in your application as a dependency:
- yarn add `sign-teller`
- Require (using CommonJS or ES6 modules) it in your application
- See the Usage section below

### Prerequisites

Sign Teller depends on a few pre-requisites:
- [Node](https://nodejs.org/docs/latest-v11.x/api/) >= 6

### Installing

  - Clone the repository: `git clone https://github.com/micah-akpan/sign-teller.git`
  - Install the dependencies by using `npm install` or if you use yarn, simply `yarn`
  - Use the library in your application

### Usage
`tellSign` is a standalone utility library wrapped in a simple function and this function is also the library's main entry point.
Below is a demonstration of how to use this library
```
  const tellSign = require('sign-teller'); // if you use commonJS modules (import('sign-teller') if you use ES6 modules)
  const dateOfBirth = { day: 4, month: 7 }
  const signDetails = tellSign(dateOfBirth);
  console.log(`Happy birthday, ${signDetails.sign}!`);
```

### API
- tellSign(birthDate: { day: number, month: number }, type: string): Object
  - `birthDate` must be an object with a day and month properties, signifying the birthday and the birth month respectively
  - `type` is 'sidereal' by default. Set it to 'tropical` if you want a zodiac interpretation based on the tropical calendar
  - Returns an object containing the following properties:
    - from: string // the lower date interval of the sign
    - to: string // the upper date interval of the sign
    - sign: string // the name of the sign
    - facts: Array<string>
    - elements: string // sign's element for e.g. fire
    - luckyGem: string // Lucky gem for this sign. E.g. Topaz

## Running the tests
- Run test by using `yarn test`

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments
Certain zodiac information was curated from the following sites:
* [Horoscope](https://www.horoscope.com/zodiac-signs)
* [Sidereal Astrology](https://thoughtcatalog.com/january-nelson/2019/01/sidereal-astrology/)
