AFRAME.registerComponent("rings", {

  init: function () {
    
      for (var i = 0; i <= 150; i++) {
        var id = `rings${i}`;
  
        var posx = Math.random() * 3000 + -1000;
        var posy = Math.random() * 2 + -1;
        var posz = Math.random() * 3000 + -2000;
  
        var position = { x: posx, y: posy, z: posz };
        this.createRings(id, position);
      }
    
  },
 

  createRings: function (uniqueId, ringPos) {
    var terrain = document.querySelector("#terrain");
    // console.log(terrain)
    //console.log(terrain)
    var ring = document.createElement("a-entity");
    //console.log(ring)
    ring.setAttribute("id", uniqueId);
    ring.setAttribute("position", ringPos);
    ring.setAttribute("material", "color", "red");
    ring.setAttribute("geometry", {
      primitive: "torus",
      radius:15,
      arc: 360,
    });
    ring.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2,
    });
    // property:position; easing:linear; loop:true; dur:50000; to:0 0 1000
    ring.setAttribute("animation", {
      property: "position",
      easing: "linear",
      loop: "true",
      dur: "25000",
      to: "0 0 0",
    });
    ring.setAttribute("game", {
      elementId: `#${uniqueId}`,
    });
    
    ring.setAttribute("visible",true)
    terrain.appendChild(ring);
  },
});
