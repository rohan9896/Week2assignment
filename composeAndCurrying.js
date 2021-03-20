
/* currying function that takes name and a sentence and add the result */
const curryingFunc = (name) => (text) => `${name} says: ${text}`;

console.log(curryingFunc("Rohan")("hello"));

/* composition func for usename and userid */
const usernameFun = (username) => `username ${username}`;
const userIdFun = (userId) => `userId ${userId}`;

const composeFun = (text) => usernameFun(userIdFun(text))

console.log(composeFun("This is any text"))
