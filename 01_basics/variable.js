const accountId=13345
//Used to declare a constant (a value that cannot be changed).
//Must be initialized when declared.
//  accountId=12122 /// this not alowed as the accountId is declare as const

let accountEmail="himanshu@google.com"
// Used to declare a variable that can be changed later.
// Block scoped (only accessible inside the block it's defined in).
var accountPassword="122132"
accountCity='jaipur'
let accountState;//in javascript if we just decalare a varibale the javascript define it as undefined

accountEmail="hvv@hvv.com"
accountPassword="12345678"
accountCity="Yavatmal"


// rather than using console.log for printing all me use console.table with the help of console.table we can print all in one go in a table  like this 
/*
/┌─────────┬───────────────┐
│ (index) │ Values        │
├─────────┼───────────────┤
│ 0       │ 13345         │
│ 1       │ 'hvv@hvv.com' │
│ 2       │ '12345678'    │
│ 3       │ 'Yavatmal'    │ 
│ 4       │ undefined     │
└─────────┴───────────────┘
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/**
 * prefer not to use Var
 * because of issue in block scope and functional scope
 * 
 * 
 */