// Write an asynchronous function that accepts a message string
//  and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time.
async function logMessage(message,delay){
    await new Promise(resolve=>setTimeout(resolve,delay));
    console.log(message);
}
logMessage("Classwork",4000);

//You have an array of user IDs and a function getUserData(id) that returns a Promise 
// with user data when given a user ID. Write an asynchronous function that fetches and 
// logs the data for each user ID one by one, in sequence.
async function fetchAndLogs(userIds) {
    for (const userId of userIds) {
      const userInfo = await(userId);
      console.log(userInfo);
    }
  }
  const userIds = [67, 405, 7168];

async function info() {
  try {
    await fetchAndLogs(userIds);
  } catch (e) {
    console.error(e);
  }
}

info();


//You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's 
//  an error. Write a function that calls performTask() and logs a custom 
//  success message if the  task is successful, and a custom error message 
//  if there's an error.
// 
  
let victory=true
async function performTask(){
let prom=new Promise(function(resolve,reject){
    if(victory){
        resolve("Task is successful")
    }
    else(
       reject("An error occured")
   )
 }).then(()=>{console.log("Continue with task ");})
.catch(()=>{console.log("I need  more tasks");})
.finally(()=>{console.log("You are going to make it");})
console.log(prom);
}








