var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);


fs.appendFile('greeeting.txt','Hi'+ user.username +"!\n", ()=>{
    console.log("File is created");
    
}); 