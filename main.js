// Task1.1//////Finished//////
// do {var x=prompt("enter your txt");
// } while(isFinite(x)||x=="")
// var input=prompt("Do you want it Casesensitive yes or not");
// if(input==="yes"){
//    function palindrome(txt) {
//     var checkSpecial = txt.replace(/[^A-Za-z0-9]/g, '');
//     var checkPalindrome = txt.split('').reverse().join('');
//     return checkSpecial == checkPalindrome;
//   } if(palindrome(x)== true){
//         document.write("<h1> your text is " +x+ " palindrome</h1>");
//     } else{
//       document.write("<h1> your text is " +x+ " not palindrome </h1>");
//     }
//   console.log(palindrome(x));}
// else if(input==="not"){
// var not_sensitive=x.toLowerCase();
// function palindrome(txt) {
//    var checkSpecial = txt.replace(/[^A-Za-z0-9]/g, '');
//    var checkPalindrome = txt.split('').reverse().join('');
//    return checkSpecial == checkPalindrome;
//  } if(palindrome(not_sensitive)== true){
//        document.write("<h1> your text is " +x+ " palindrome</h1>");
//    } else{
//      document.write("<h1> your text is " +x+ " not palindrome </h1>");
//    }
// }else{
//    alert("please enter yes or not")
// }

// Task1.2
// var text= prompt("please enter your text");
// function count(text){
// var counter=0;
// for(i=0;i<text.length;i++){
// if(text[i]==="e"){
//   counter++;
// }
// return counter;
// console.log(counter);
// 
// }
// count(text);



// Task1.2/////finished//
// do{var str= prompt("please enter your txt")}
// while(isFinite(str)||str=="")
// function char_count(str) 
// {
//  var letter_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == "e") 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// char_count(str);
// console.log(char_count(str));
// document.write("<h1> There is " +char_count(str)+ "e in the text </h1>");


// Task 1.3
// var Name=prompt("Please enter your Name");
// if(isFinite(Name)){
//   alert("Name in not valid");
// }else{
//   console.log(Name);
//   document.write("<h1> Your Name is "+Name+ "</h1>")
// var Phone_number=prompt("Please enter your phone number");
//   if(isFinite(Phone_number)&& Phone_number.length==8){
//     console.log(Phone_number);
//     document.write("<h1> Your phone is "+Phone_number+ "</h1>")
//     var mobileNumber=prompt("Please enter your mobile number")
// if(isFinite(mobileNumber)){
// function validateMobileNumber(mobileNumber) {
//   var E = /^011\d{8}$/;
//   var V = /^010\d{8}$/;
//   var O = /^012\d{8}$/;
//   var isValid = E.test(mobileNumber)|| V.test(mobileNumber)||O.test(mobileNumber);
//   return isValid;
// }
// if(validateMobileNumber(mobileNumber)){
//   console.log(mobileNumber)
//   document.write("<h1> Your mobile is "+mobileNumber+ "</h1>")
// }
// else{
//   console.log("invalid");
//   alert("Enter a valid mobile number")
// }
// }
// }else{
//     alert("Your phone_nember in not valid");
// }
// }
// var my_mail=prompt("please enter your mail");
// var mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// mail_validation=mail.test(my_mail);
// console.log(mail_validation);
// if(mail_validation=true){
//   document.write("<h1> Your mail is "+my_mail+ "</h1>")
// }
// else{
//   alert("mail in not valid");
// }
