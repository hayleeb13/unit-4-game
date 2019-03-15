$(document).ready(function() {
var userNumber = 0;
var redcrystal = (Math.floor(Math.random() * 12) + 1);
var bluecrystal = (Math.floor(Math.random() * 12) + 1);
var greencrystal = (Math.floor(Math.random() * 12) + 1);
var blackcrystal = (Math.floor(Math.random() * 12) + 1);
var wins = 0;
var losses = 0;
var randomNumber = (Math.floor(Math.random() * 101) + 19);
$("#target-number").text(randomNumber);
$("#score").text(userNumber);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

function reset() {
  userNumber = 0;
  randomNumber = (Math.floor(Math.random() * 101) + 19);
  $("#target-number").text(randomNumber);
  $("#score").text(userNumber);
  redcrystal = (Math.floor(Math.random() * 12) + 1);
  bluecrystal = (Math.floor(Math.random() * 12) + 1);
  greencrystal = (Math.floor(Math.random() * 12) + 1);
  blackcrystal = (Math.floor(Math.random() * 12) + 1);
}

$("#redcrystal").on("click", function() {
  userNumber += redcrystal;
  $("#score").text(userNumber);
})

$("#bluecrystal").on("click", function() {
  userNumber += bluecrystal;
  $("#score").text(userNumber);
})

$("#greencrystal").on("click", function() {
  userNumber += greencrystal;
  $("#score").text(userNumber);
})

$("#blackcrystal").on("click", function() {
  userNumber += blackcrystal;
  $("#score").text(userNumber);
})

$(".container").on("click", function() {
  if(randomNumber === userNumber) {
    wins++;
    $("#wins").text("Wins: " + wins);
    $("#outcome").text("You Win!");
    reset();
}
  else if(userNumber > randomNumber) {
    losses++;
    $("#losses").text("Losses " + losses);
    $("#outcome").text("You Lose!");
    reset();
  }
})
})