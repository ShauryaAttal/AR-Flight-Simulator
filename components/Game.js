AFRAME.registerComponent("game", {
  schema: {
    elementId: { type: "string", default: "#rings1" },
    gameState: { type: "string", default: "play" },
  },

  init: function () {
    
    var timerEl = document.querySelector("#timer");
    if(this.data.gameState === "play"){
      var duration = 180;
      this.startTimer(duration, timerEl);
    }
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },
  tick:function(){
  
    var reached = document.querySelector("#targetReached");
    var plane = document.querySelector("#plane");

    var element = document.querySelector("#targets");
    var count = element.getAttribute("text").value;
    var currentTargets = parseInt(count);
    var timerEl = document.querySelector("#timer")
   

    if (currentTargets === 0 && this.data.gameState ==="play") {
      this.data.gameState =="over"
     
      var element2 = document.querySelector("#Score");
      var score = element2.getAttribute("text").value;
      var targetMsg = "Congratulations! You Win! You scored " + score + " points!";
      
      reached.setAttribute("text", {
        value: targetMsg,
      });
      reached.setAttribute("visible", true);
      plane.setAttribute("dynamic-body", {
        mass: 1,
      });
      timerEl.setAttribute("text",{
        value:0
      })

    }

  },

  startTimer: function (duration, timeEl) {
    var minutes;
    var seconds;
    setInterval(() => {
      if (duration >= 0 && this.data.gameState ==="play") {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timeEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } else {
        this.gameOver();
      }
    }, 1000);
  },

  isCollided: function (elementId) {
    var element = document.querySelector(elementId);
    //console.log("What is element id" + elementId);

    element.addEventListener("collide", (e) => {
      if (elementId.includes("#rings")) {
        //console.log("ring collision");
        this.updateScore();
        this.updateTargets();
      } else if (elementId.includes("#birds")) {
        //console.log("bird collision");
        this.updateScore();
        this.updateTargets();
      }
    });
  },

  updateTargets: function () {
    var element = document.querySelector("#targets");
    var count = element.getAttribute("text").value;
    var currentTargets = parseInt(count);
    currentTargets -= 1;
    element.setAttribute("text", {
      value: currentTargets,
    });
  },

  updateScore: function () {
    var element = document.querySelector("#Score");
    var count = element.getAttribute("text").value;
    var currentScore = parseInt(count);
    currentScore += 50;
    element.setAttribute("text", {
      value: currentScore,
    });
  },

  gameOver: function () {
    var plane = document.querySelector("#plane");
    var element = document.querySelector("#gameOver");

    var element2 = document.querySelector("#Score");
    var score = element2.getAttribute("text").value;
    var finalmsg = "Game Over! You Scored: " + score + " points!";

    element.setAttribute("text", {
      value: finalmsg,
    });
    element.setAttribute("visible", true);
    plane.setAttribute("dynamic-body", {
      mass: 1,
    });

    var scene = document.querySelector("#scene");
    var r = document.getElementById("terrain");
    scene.removeChild(r);
  },

  
});
