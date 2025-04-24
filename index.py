import random

def genratePassword(length,include_lower_case,include_upper_case,include_numbers,include_symbols):
  lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
  upperCaseChar = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ'
  numberchar = '1234567890'
  symbolchar = '!@#$%^&*()_-+=?/>.<,:;"}{[]'

  allowedChar = ''
  password = ''
  
  
  if include_lower_case:
    allowedChar += lowerCaseChar
  else:
    allowedChar += ''
    
  if include_upper_case:
    allowedChar += upperCaseChar
  else:
    allowedChar += ''
  
  if include_numbers:
    allowedChar += numberchar
  else:
    allowedChar += ''
    
  if include_symbols:
    allowedChar += symbolchar
  else:
    allowedChar += ''

  if length < 8:
    return 'Password must aleast be 8 characters'
  if allowedChar == '':
    return 'at least 1 set of characters needs to be selected'
  
  for i in range(length):
    randomIndex = random.randint(0,len(allowedChar)-1)
    password += allowedChar[randomIndex]
  
  return password






length_of_characters = 10
include_lower_case = True
include_upper_case = True
include_symbols = True
include_numbers = True


print(genratePassword(length_of_characters,include_lower_case,include_upper_case,include_symbols,include_numbers))
