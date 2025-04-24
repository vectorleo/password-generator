// random password generator

function generatePassword(Length,includeLowerCase,includeUpperCase,includeNumber,includeSymbols){


  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ';
  const numberChars = '1234567890';
  const symbolChars = '!@#$%^&*()_-+=?/>.<,:;"{}[]';

  let allowedchars = '';
  let password = '';

  allowedchars += includeLowerCase ? lowerCaseChars : '';
  allowedchars += includeUpperCase ? upperCaseChars : '';
  allowedchars += includeNumber ? numberChars : '';
  allowedchars += includeSymbols ? symbolChars : '';

  if(Length<8){
    return `Password length should be greater than 8`; 
  }

  if(allowedchars.length === 0){
    return `at least 1 set of characters needs to be selected`;
  }

  for (let i = 0; i < Length; i++) {
    const randomIndex = Math.floor(Math.random()* allowedchars.length);
    password += allowedchars[randomIndex];
  }
  return password;
}

const passwordLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumber,
                                  includeSymbols)


console.log(`Generated password: ${password}`);
