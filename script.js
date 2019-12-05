// var behaviour = document.getElementById("behaviour");

// function myFunction () {
// console.log(behaviour.value)};

// function myFunction () {
//   console.log(behaviour.value);
//   var kentsBehaviour = behaviour.value;
//   console.log(kentsBehaviour);
//   };

// var behaviour = document.getElementById("behaviour");
// var kentsBehaviour = behaviour.value;
// console.log(kentsBehaviour)
//var h3 = document.getElementsByTagName("h3");

// document.getElementById("prize").innerHtml = kentsReward(behaviour);


// var behaviour = document.getElementById("behaviour").addEventListener("change", function(){ kentsReward(this.value); });

document.getElementById("behaviour").addEventListener("change", function(){ kentsReward(this.value); });

function kentsReward (anything) {
  var prize;

  switch (anything) {
    case "Really good":
      prize = "You get foot rubs!";
      break;

    case "Good":
      prize = "You get an Oreo";
      break;

    case "Medium":
      prize = "You get bread";
      break;

    case "Not so good":
      prize = "You don't get anything";
      break;

    case "Bad":
      prize = "tickle spiders"
      break;

    case "Greer":
      prize = "You get mammograms";
      break;

    default:
      return "Tell me how you behaved today";
  }

  console.log( prize);
  document.getElementById("prize").innerHTML = prize;
} 


