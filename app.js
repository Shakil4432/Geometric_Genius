// const calculateTriangle = document
//   .getElementById("calculate_triangle")
//   .addEventListener("click", () => {
//     let base = document.getElementById("base").value;
//     let height = document.getElementById("height").value;
//     const area = 0.5 * parseInt(base) * parseInt(height);
//     document.getElementById("area").value = area;
//     document.getElementById("base").value = "";
//     document.getElementById("height").value = "";
//   });

// const calculateRectangle = document
//   .getElementById("calculate_rectangle")
//   .addEventListener("click", () => {
//     let width = document.getElementById("width").value;
//     let length = document.getElementById("length").value;
//     const area = parseInt(width) * parseInt(length);
//     document.getElementById("area").value = area;
//     document.getElementById("width").value = "";
//     document.getElementById("length").value = "";
//   });

// const calculateParallelogram = document
//   .getElementById("calculate_parallelogram")
//   .addEventListener("click", () => {
//     let base2 = document.getElementById("base2").value;
//     let height2 = document.getElementById("height2").value;
//     const area = parseInt(base2) * parseInt(height2);
//     document.getElementById("area").value = area;
//     document.getElementById("base2").value = "";
//     document.getElementById("height2").value = "";
//   });

// const calculateRhombus = document
//   .getElementById("calculate_rhombus")
//   .addEventListener("click", () => {
//     let distance1 = document.getElementById("distance1").value;
//     let distance2 = document.getElementById("distance2").value;
//     const area = 0.5 * parseInt(distance1) * parseInt(distance2);
//     document.getElementById("area").value = area;
//     document.getElementById("distance1").value = "";
//     document.getElementById("distance2").value = "";
//   });

// const calculatePentagon = document
//   .getElementById("calculate_pentagon")
//   .addEventListener("click", () => {
//     let perimeter = document.getElementById("perimeter").value;
//     let apothem = document.getElementById("apothem").value;
//     const area = parseInt(perimeter) * parseInt(apothem);
//     document.getElementById("area").value = area;
//     document.getElementById("perimeter").value = "";
//     document.getElementById("apothem").value = "";
//   });

function calculateArea(calculateId, height, width) {
  document.getElementById(calculateId).addEventListener("click", () => {
    let h = document.getElementById(height).value;
    let w = document.getElementById(width).value;
    const area = parseFloat(h) * parseFloat(w);
    document.getElementById("area").value = area;
    document.getElementById(height).value = "";
    document.getElementById(width).value = "";
  });
}

function calculateArea2(calculateId2, height2, width2) {
  document.getElementById(calculateId2).addEventListener("click", () => {
    let h2 = document.getElementById(height2).value;
    let w2 = document.getElementById(width2).value;
    const area2 = 0.5 * parseFloat(h2) * parseFloat(w2);
    document.getElementById("area").value = area2;
    document.getElementById(height2).value = "";
    document.getElementById(width2).value = "";
  });
}

const calculateEllipse = document
  .getElementById("calculate_ellipse")
  .addEventListener("click", () => {
    let axis1 = document.getElementById("axis1").value;
    let axis2 = document.getElementById("axis2").value;
    const area = 3.1416 * parseFloat(axis1) * parseFloat(axis2);
    document.getElementById("area").value = area;
    document.getElementById("axis1").value = "";
    document.getElementById("axis2").value = "";
  });

calculateArea("calculate_rectangle", "width", "length");
calculateArea("calculate_parallelogram", "base2", "height2");
calculateArea("calculate_pentagon", "perimeter", "apothem");

calculateArea2("calculate_rhombus", "distance1", "distance2");
calculateArea2("calculate_triangle", "base", "height");
