function changeText(){
  if (document.getElementById("demo").innerHTML=="Click to change content using a JavaScript function!")
  {
    document.getElementById("demo").innerHTML = "Hello JavaScript!"
  }
  else {
    document.getElementById("demo").innerHTML = "Click to change content using a JavaScript function!"
  }
}