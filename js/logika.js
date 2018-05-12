var canvas1 = document.getElementById('gelm'),
	canvas2 = document.getElementById('beitc'),
	canvas3 = document.getElementById('mg1'),
	canvas4 = document.getElementById('mg2'),
	ctx1 = canvas1.getContext("2d"),
	ctx2 = canvas2.getContext("2d"),
	ctx3 = canvas3.getContext("2d"),
	ctx4 = canvas4.getContext("2d"),
	width1 = 7,
	height1 = 15,
	width2 = 6,
	height2 = 15,
	width3 = 70,
	height3 = 65,
	xEye2 = 50,
	yEye2 = 100,
	x1_1 = 45,
	y1_1 = 86,
	x2_1 = 55,
	y2_1 = 86,
	px_1 = 50,
	py_1 = 80,
	lw_1 = 2,
	x1_2 = 45,
	y1_2 = 114,
	x2_2 = 55,
	y2_2 = 114,
	px_2 = 50,
	py_2 = 120,
	lw_2 = 2,
	z1 = 0,
	z2 = 0,
	lw1 = 1,
	lw2 = 1;


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
  ctx1.strokeStyle = "#000";
  ctx1.fillStyle = "#77c8ff";
  ctx1.fill();
  ctx1.stroke();
}
function ciliarTop(x1_1, y1_1, x2_1, y2_1, px_1, py_1, lw_1){
	ctx1.beginPath();
	ctx1.strokeStyle = "#D93232";
	ctx1.lineWidth = lw_1;
	ctx1.lineCap='round';
	ctx1.moveTo(x1_1,y1_1);
	ctx1.quadraticCurveTo(px_1, py_1, x2_1, y2_1);
	ctx1.stroke();
}

function ciliarBottom(x1_2, y1_2, x2_2, y2_2, px_2, py_2, lw_2){
	ctx1.beginPath();
	ctx1.strokeStyle = "#D93232";
	ctx1.lineWidth = lw_2;
	ctx1.lineCap='round';
	ctx1.moveTo(x1_2,y1_2);
	ctx1.quadraticCurveTo(px_2, py_2, x2_2, y2_2);
	ctx1.stroke();
}

function crystal_1() {
	setTimeout(function() {
		requestAnimationFrame(crystal_1);
		ctx1.clearRect(39,76,22,48);
		ctx1.beginPath();
		drawСrystal_1(ctx1, 50, 100, width1, height1);
		ciliarTop(x1_1, y1_1, x2_1, y2_1, px_1, py_1, lw_1);
		ciliarBottom(x1_2, y1_2, x2_2, y2_2, px_2, py_2, lw_2);
		if(width1 < 10){
			width1++;
			height1--;

			x1_1--;
			x2_1++;
			y1_1++;
			y2_1++;
			lw_1++;

			x1_2--;
			x2_2++;
			y1_2--;
			y2_2--;
			lw_2++;
		}else{
			for(let i = 0; i < 4; i++){
				ctx1.clearRect(39,76,22,48);
				ctx1.beginPath();
				drawСrystal_1(ctx1, 50, 100, width1, height1);
				ciliarTop(x1_1, y1_1, x2_1, y2_1, px_1, py_1, lw_1);
				ciliarBottom(x1_2, y1_2, x2_2, y2_2, px_2, py_2, lw_2);
				width1--;
				height1++;

				x1_1++;
				x2_1--;
				y1_1--;
				y2_1--;
				lw_1--;

				x1_2++;
				x2_2--;
				y1_2++;
				y2_2++;
				lw_2--;
			}
		}
	}, 250);
}
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = "#fff";
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
  ctx2.strokeStyle = "#000";
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
  ctx2.strokeStyle = "#000";
  ctx2.fill();
  ctx2.stroke();
}
function kosieTop(z1, lw1){
	ctx2.beginPath();
	ctx2.strokeStyle = "#D93232";
	ctx2.lineWidth = lw1;
	ctx2.lineCap='round';

		ctx2.moveTo(86,40+z1);
		ctx2.quadraticCurveTo(100, 50, 95, 70);
		ctx2.moveTo(93,38.5+z1);
		ctx2.quadraticCurveTo(105, 50, 100, 70);
		ctx2.moveTo(100,38+z1);
		ctx2.quadraticCurveTo(110, 50, 105, 70);
		ctx2.moveTo(107,38.5+z1);
		ctx2.quadraticCurveTo(115, 50, 110, 70);
		ctx2.moveTo(114,40+z1);
		ctx2.quadraticCurveTo(120, 50, 115, 70);

	ctx2.stroke();
}
function kosieBottom(z2, lw2){
	ctx2.beginPath();
	ctx2.strokeStyle = "#D93232";
	ctx2.lineWidth = lw2;
	ctx2.lineCap='round';

		ctx2.moveTo(95,133);
		ctx2.quadraticCurveTo(100, 150, 86, 160+z2);
		ctx2.moveTo(100,133);
		ctx2.quadraticCurveTo(105, 150, 93, 161+z2);
		ctx2.moveTo(105,133);
		ctx2.quadraticCurveTo(110, 150, 100, 162+z2);
		ctx2.moveTo(110,133);
		ctx2.quadraticCurveTo(115, 150, 107, 161+z2);
		ctx2.moveTo(115,133);
		ctx2.quadraticCurveTo(120, 150, 114, 160+z2);

	ctx2.stroke();
}

function crystal_2() {
	setTimeout(function() {
		requestAnimationFrame(crystal_2);
		ctx2.clearRect(39,76,22,48);
		ctx2.beginPath();
		eye2(ctx2, 100, 100, width3, height3);
		drawСrystal_2(ctx2, xEye2, yEye2, width2, height2);
		kosieTop(z1, lw1);
		kosieBottom(z2, lw2);
		if(width3 < 75){
			xEye2--;
			width3++;
			height3--;
			z1++;
			lw1++;
			z2--;
			lw2++;
		}else{
			for(let i = 0; i < 5; i++){
				ctx2.clearRect(39,76,22,48);
				ctx2.beginPath();
				eye2(ctx2, 100, 100, width3, height3);
				drawСrystal_2(ctx2, xEye2, yEye2, width2, height2);
				kosieTop(z1, lw1);
				kosieBottom(z2, lw2);
				xEye2++;
				width3--;
				height3++;
				z1--;
				lw1--;
				z2++;
				lw2--;
			}
		}
	}, 250);
}
crystal_1();
crystal_2();

ctx3.save();
ctx3.beginPath();
ctx3.translate(40, 100);
ctx3.scale(6 / 15, 1);
ctx3.arc(0, 0, 15, 0, Math.PI * 2, true);
ctx3.restore();
ctx3.closePath();
ctx3.lineWidth = 2;
ctx3.fillStyle = "#77c8ff";
ctx3.fill();
ctx3.stroke();

ctx3.beginPath();
ctx3.arc(80, 100, 60, 0, Math.PI * 2, true);
ctx3.stroke();
ctx3.closePath();

ctx3.beginPath();
ctx3.strokeStyle = "#D93232";
ctx3.lineWidth = 3.5;
ctx3.lineCap='round';
ctx3.moveTo(90,105);
ctx3.lineTo(170,105);
ctx3.moveTo(90,110);
ctx3.lineTo(170,110);
ctx3.moveTo(90,115);
ctx3.lineTo(170,115);
ctx3.stroke();
ctx3.closePath();


ctx3.beginPath();
ctx3.strokeStyle = "#D93232";
ctx3.lineWidth = 3.5;
ctx3.lineCap='round';
ctx3.moveTo(140,80);
ctx3.lineTo(160,80);
ctx3.moveTo(141,85);
ctx3.lineTo(160,85);
ctx3.moveTo(142,90);
ctx3.lineTo(160,90);
ctx3.stroke();
ctx3.closePath();


ctx3.beginPath();
ctx3.strokeStyle = "#D93232";
ctx3.lineWidth = 2.5;
ctx3.lineCap='round';
		ctx3.moveTo(110,80);
		ctx3.lineTo(120,80);
		ctx3.moveTo(110,85);
		ctx3.lineTo(120,85);
		ctx3.moveTo(110,90);
		ctx3.lineTo(120,90);

		ctx3.moveTo(90,80);
		ctx3.lineTo(100,80);
		ctx3.moveTo(90,85);
		ctx3.lineTo(100,85);
		ctx3.moveTo(90,90);
		ctx3.lineTo(100,90);

		ctx3.moveTo(70,80);
		ctx3.lineTo(80,80);
		ctx3.moveTo(70,85);
		ctx3.lineTo(80,85);
		ctx3.moveTo(70,90);
		ctx3.lineTo(80,90);
ctx3.stroke();
ctx3.closePath();

ctx3.beginPath();
ctx3.strokeStyle = "#D93232";
ctx3.lineWidth = 3.5;
ctx3.lineCap='round';
ctx3.moveTo(75,43);
ctx3.lineTo(165,43);
ctx3.moveTo(70,48);
ctx3.lineTo(160,48);
ctx3.stroke();
ctx3.closePath();

ctx3.beginPath();
ctx3.strokeStyle = "#D93232";
ctx3.lineWidth = 3.5;
ctx3.lineCap='round';
ctx3.moveTo(70,152);
ctx3.lineTo(160,152);
ctx3.moveTo(75,157);
ctx3.lineTo(165,157);
ctx3.stroke();
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "#000";
ctx3.font = "bold 20px Arial";
ctx3.fillText("1", 175, 53);

ctx3.fillStyle = "#000";
ctx3.font = 'bold 20px Arial';
ctx3.fillText("2", 175, 161);

ctx3.fillStyle = "#000";
ctx3.font = 'bold 20px Arial';
ctx3.fillText("3", 175, 92);

ctx3.fillStyle = "#000";
ctx3.font = 'bold 20px Arial';
ctx3.fillText("4", 175, 117);


ctx4.save();
ctx4.beginPath();
ctx4.translate(50, 100);
ctx4.scale(6 / 15, 1);
ctx4.arc(0, 0, 15, 0, Math.PI * 2, true);
ctx4.restore();
ctx4.closePath();
ctx4.lineWidth = 2;
ctx4.fillStyle = "#77c8ff";
ctx4.fill();
ctx4.stroke();

ctx4.beginPath();
ctx4.arc(100, 100, 70, 0, Math.PI * 2, true);
ctx4.stroke();
ctx4.closePath();

ctx4.beginPath();
ctx4.strokeStyle = "#D93232";
ctx4.lineWidth = 3.5;
ctx4.lineCap='round';
		ctx4.moveTo(90,34);
		ctx4.quadraticCurveTo(100, 50, 95, 70);
		ctx4.moveTo(95,33);
		ctx4.quadraticCurveTo(105, 50, 100, 70);
		ctx4.moveTo(100,33);
		ctx4.quadraticCurveTo(110, 50, 105, 70);
		ctx4.moveTo(105,33);
		ctx4.quadraticCurveTo(115, 50, 110, 70);
		ctx4.moveTo(110,34);
		ctx4.quadraticCurveTo(120, 50, 115, 70);


		ctx4.moveTo(95,133);
		ctx4.quadraticCurveTo(100, 150, 90, 166);
		ctx4.moveTo(100,133);
		ctx4.quadraticCurveTo(105, 150, 95, 167);
		ctx4.moveTo(105,133);
		ctx4.quadraticCurveTo(110, 150, 100, 167);
		ctx4.moveTo(110,133);
		ctx4.quadraticCurveTo(115, 150, 105, 167);
		ctx4.moveTo(115,133);
		ctx4.quadraticCurveTo(120, 150, 110, 166);
ctx4.stroke();

ctx4.beginPath();
ctx4.fillStyle = "#000";
ctx4.font = "bold 20px Arial";
ctx4.fillText("5", 125, 65);

ctx4.fillStyle = "#000";
ctx4.font = 'bold 20px Arial';
ctx4.fillText("6", 125, 150);


























