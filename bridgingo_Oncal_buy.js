

// BUY


function join_info(){
  var start = prompt("To seek for options verify you are not a robot by completing the given CAPTCHA : 1A4S3");
  while(start != '1A4S3'){
    alert("Incorrect CAPTCHA")
    start = prompt("To seek for options verify you are not a robot by completing the given CAPTCHA : 1A4S3");
  }
  alert("Information received. Details of appropriate product/service will be mailed to you soon!");
}
