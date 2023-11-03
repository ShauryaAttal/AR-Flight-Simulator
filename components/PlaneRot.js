AFRAME.registerComponent("plane-rotation", {
  schema: {
    planeRotation: { type: "number", default: 0 },
    planePosition: { type: "number", default: 0 },
  },

  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.planeRotation = this.el.getAttribute("rotation");
      this.data.planePosition = this.el.getAttribute("position");
      var plr = this.data.planeRotation;
      var plane = this.data.planePosition;
      if (e.key === "ArrowRight") {
        if (plr.x < 20) {
          plr.x += 0.5;
          this.el.setAttribute("rotation", plr);
        }
      }

      if (e.key === "ArrowLeft") {
        if (plr.x > -20) {
          plr.x -= 0.5;
          this.el.setAttribute("rotation", plr);
        }
      }
      if (e.key === "ArrowUp") {
        if (plr.z < 20) {
          plr.z += 0.5;
          this.el.setAttribute("rotation", plr);
        }
        if (plane.y < 2) {
          plane.y += 0.01;
          this.el.setAttribute("position", plane);
        }
      }
      if (e.key === "ArrowDown") {
        if (plr.z > -20) {
          plr.z -= 0.5;
          this.el.setAttribute("rotation", plr);
        }
        if (plane.y > -2) {
          plane.y -= 0.01;
          this.el.setAttribute("position", plane);
        }
      }
    });
  },

  tick: function () {
    var plRotation = this.el.getAttribute("rotation");
    plRotation.y += this.data.planeRotation;

    this.el.setAttribute("rotation", {
      x: plRotation.x,
      y: plRotation.y,
      z: plRotation.z,
    });
    //console.log(plRotation)
  },
});
