

// SELL


function don_info(){
  var start = prompt("To list your product/service verify you are not a robot by completing the given CAPTCHA : 2ALV4");
  while(start != '2ALV4'){
    alert("Incorrect CAPTCHA")
    start = prompt("To list your product/service verify you are not a robot by completing the given CAPTCHA : 2ALV4");
  }
  alert("Product/Service listed. Thank you!");
}
