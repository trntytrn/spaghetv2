var header= $('.first')
var header2= $('.second')
var header3= $('.third')
var header4= $('.last')
var button= $('.button')
var bottom= $('.bottom')
var text=$('.text')

var count=0;
if(count==0) {
  $("#textboxDiv").hide();
  count++;
}
// var box = .append($('.text')

// header.text("who")
// header2.text("touchin")
// header3.text("my")
// header4.text("spaghet")

console.log(header);
console.log(header2);
console.log(header3);
console.log(header4);

button.on("click", doSomething);

function doSomething() {
  console.log("you clicked the button!");
  header.text("who");
  header2.text("touchin");
  header3.text("my");
  header4.text("spaghet!!!!!!!!");
  button.attr("src", "https://files.slack.com/files-tmb/TK5GC0Y6T-FLHNS8E7M-e40542b68e/image_from_ios_720.png");
  bottom.text("upsetti spaghetti");
  $("#textboxDiv").show();
  //$("#textboxDiv").append("<div><br><input type='text'placeholder='who is touchin the spaghet????' class='text'/><br></div>");
  //$("#textboxDiv").append("<div><br><input type='submit'placeholder='submit' class='submit'/><br></div>")
}

var submit = $('.submit');

submit.on("click", displayMessage);

function displayMessage() {
  var name = $('.text').val();
  header.text(`kind of rude of you ${name}`);
  header2.text("");
  header3.text("");
  header4.text("");
}
