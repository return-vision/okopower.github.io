var canvas1 = document.getElementById('gelm'),
	canvas2 = document.getElementById('beitc'),
	ctx1 = canvas1.getContext("2d"),
	ctx2 = canvas2.getContext("2d"),
	width1 = 7,
	height1 = 15,
	width2 = 6,
	height2 = 15,
	width3 = 70,
	height3 = 65,
	xEye2 = 50,
	yEye2 = 100;

function drawСrystal_1(ctx1, x, y, a, b) {
  ctx1.clearRect(39,76,22,48);
  ctx1.save();
  ctx1.beginPath();
  ctx1.translate(x, y);
  ctx1.scale(a / b, 1);
  ctx1.arc(0, 0, b, 0, Math.PI * 2, true);
  ctx1.restore();
  ctx1.closePath();
  ctx1.lineWidth = 2;
  ctx1.fillStyle = "#77c8ff";
  ctx1.fill();
  ctx1.stroke();
}
function crystal_1() {
	setTimeout(function() {
		requestAnimationFrame(crystal_1);
		ctx1.clearRect(39,76,22,48);
		ctx1.beginPath();
		drawСrystal_1(ctx1, 50, 100, width1, height1);
		if(width1 < 10){
			width1++;
			height1--;
		}else{
			for(let i = 0; i < 4; i++){
				ctx1.clearRect(39,76,22,48);
				ctx1.beginPath();
				drawСrystal_1(ctx1, 50, 100, width1, height1);
				width1--;
				height1++;
			}
		}
	}, 250);
}
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.arc(100, 100, 74, 20, Math.PI * 2, true);
ctx1.stroke();
ctx1.closePath();

function drawСrystal_2(ctx2, x, y, a, b) {
  ctx2.clearRect(39,76,22,48);
  ctx2.save();
  ctx2.beginPath();
  ctx2.translate(x, y);
  ctx2.scale(a / b, 1);
  ctx2.arc(0, 0, b, 0, Math.PI * 2, true);
  ctx2.restore();
  ctx2.closePath();
  ctx2.lineWidth = 2;
  ctx2.fillStyle = "#77c8ff";
  ctx2.fill();
  ctx2.stroke();
}
function eye2(ctx2, x, y, a, b){
  ctx2.clearRect(0,0,200,200);
  ctx2.save();
  ctx2.beginPath();
  ctx2.translate(x, y);
  ctx2.scale(a / b, 1);
  ctx2.arc(0, 0, b, 0, Math.PI * 2, true);
  ctx2.restore();
  ctx2.closePath();
  ctx2.lineWidth = 2;
  ctx2.fillStyle = "#eee";
  ctx2.fill();
  ctx2.stroke();
}
function crystal_2() {
	setTimeout(function() {
		requestAnimationFrame(crystal_2);
		ctx2.clearRect(39,76,22,48);
		ctx2.beginPath();
		eye2(ctx2, 100, 100, width3, height3);
		drawСrystal_2(ctx2, xEye2, yEye2, width2, height2);
		if(width3 < 75){
			xEye2--;
			width3++;
			height3--;
		}else{
			for(let i = 0; i < 5; i++){
				ctx2.clearRect(39,76,22,48);
				ctx2.beginPath();
				eye2(ctx2, 100, 100, width3, height3);
				drawСrystal_2(ctx2, xEye2, yEye2, width2, height2);
				xEye2++;
				width3--;
				height3++;
			}
		}
	}, 250);
}
crystal_1();
crystal_2();