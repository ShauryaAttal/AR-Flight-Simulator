AFRAME.registerComponent("birds", {
    init: function () {
      for (var i = 0; i <= 50; i++) {
        var id = `birds${i}`;
  
        var posx = Math.random() * 3000 + -1000;
        var posy = Math.random() * 2 + -1;
        var posz = Math.random() * 3000 + -1000;
  
        var position = { x: posx, y: posy, z: posz };
        this.createBirds(id, position);
      }
    },
  
    createBirds: function (uniqueId, birdPos) {
      var terrain = document.querySelector("#terrain");
      //console.log(terrain)
      var bird = document.createElement("a-entity");
      //console.log(ring)
      bird.setAttribute("id", uniqueId);
      bird.setAttribute("position", birdPos);
      bird.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");
      bird.setAttribute("scale", { x: 600, y: 600, z: 600 });
      bird.setAttribute("animation-mixer", {});
      bird.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 3,
      });
      bird.setAttribute("game", {
        elementId: `#${uniqueId}`,
      });
      terrain.appendChild(bird);
    },
  });