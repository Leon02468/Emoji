let canvas = document.getElementById("miCanvas");

/**
 * 
 * @param {any} canvas
 * @returns {CanvasRenderingContext2D}
 */
function createPaper(canvas){
    return canvas.getContext("2d");
}

let paper = createPaper(canvas);
let currentTime = Date.now();


let R_eye = 5;
let R_eye_vilocity = 10;
let L_eye = 5;
let L_eye_vilocity = 10;


setInterval(() => {
    let delta = (Date.now() - currentTime) / 1000;
    let fps = 1 / delta;
    currentTime = Date.now();
    paper.clearRect(0, 0, canvas.width, canvas.height);


    //Head
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.fillStyle = "ghostwhite";
    paper.arc(240, 240, 100, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();

    ////Eyes
    //////Right
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.fillStyle = "black";
    paper.ellipse(200, 210, 15, R_eye, 0, 0, 10);
    paper.stroke();
    paper.fill();

    //////Left
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.fillStyle = "black";
    paper.ellipse(300, 210, 15, L_eye, 0, 0, 10);
    paper.stroke();
    paper.fill();

    ////Mouth
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.fillStyle = "black";
    paper.lineWidth = 10;
    paper.moveTo(200,285);
    paper.lineTo(300, 285);
    paper.stroke();
    paper.fill();


    //Hat
    paper.beginPath();
    paper.fillStyle = "black";
    paper.rect(160, 190, 160, -170);
    paper.fill();

    paper.beginPath();
    paper.fillStyle = "red";
    paper.rect(160, 190, 160, -100);
    paper.fill();

    paper.beginPath();
    paper.fillStyle = "black";
    paper.rect(130, 190, 225, -50);
    paper.fill();

    if((R_eye > 15) && (L_eye > 15)){
        R_eye_vilocity *= -1;
        L_eye_vilocity *= -1;
    }
    else if((R_eye < 5) && (L_eye < 5)){
        R_eye_vilocity *= -1;
        L_eye_vilocity *= -1;
    }
    
    R_eye += R_eye_vilocity * delta;
    L_eye += L_eye_vilocity * delta;
}, 1000 /24);