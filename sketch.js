let sound = [];
let animation = [];
let bgm;

let ptouchX;
let ptouchY;

function preload(){
	sound[0] = loadSound('./SoundSamples/se01.wav');
	sound[1] = loadSound('./SoundSamples/se02.wav');
	sound[2] = loadSound('./SoundSamples/se03.wav');
	sound[3] = loadSound('./SoundSamples/se04.wav');
	sound[4] = loadSound('./SoundSamples/se05.wav');
	sound[5] = loadSound('./SoundSamples/se06.wav');

	bgm = loadSound('./SoundSamples/bgm.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
}

function draw() {

	ptouchX = mouseX;
	ptouchY = mouseY;
	background(0);
	for(let i = 0; i < animation.length; i++){
		animation[i].draw();
	}
}

function touchStarted(){
	if(ptouchY < height / 3 && ptouchX < width / 2){
		sound[0].play();
		animation.push(new Anim_a());
 	}else if(ptouchY < height / 3 && ptouchX > width / 2){
 		sound[1].play();
		animation.push(new Anim_s());
 	}else if(ptouchY > height / 3 && ptouchY < height * 2 / 3 && ptouchX < width / 2){
 		sound[2].play();
		animation.push(new Anim_d());
 	}else if(ptouchY > height / 3 && ptouchY < height * 2 / 3 && ptouchX > width / 2){
 		sound[3].play();
		animation.push(new Anim_f());
 	}else if(ptouchY > height * 2 / 3 && ptouchX < width / 2){
 		sound[4].play();
		animation.push(new Anim_g());
 	}else if(ptouchY > height * 2 / 3 && ptouchX > width / 2){
 		sound[5].play();
		animation.push(new Anim_h());
 	}
	
	if(animation.length > 6){
		animation.splice(1, 1);
	}

	return false;
}

function keyTyped() {
	if(key == 'a'){
		sound[0].play();
		animation.push(new Anim_a());
	} else if(key == 's'){
		sound[1].play();
		animation.push(new Anim_s());
	} else if(key == 'd'){
		sound[2].play();
		animation.push(new Anim_d());
	} else if(key == 'f'){
		sound[3].play();
		animation.push(new Anim_f());
	} else if(key == 'g'){
		sound[4].play();
		animation.push(new Anim_g());
	} else if(key == 'h'){
		sound[5].play();
		animation.push(new Anim_h());
	}

	if(key == ' '){
		bgm.play();
	}
	
	if(animation.length > 6){
		animation.splice(1, 1);
	}
}


class Anim_a{
	constructor() {
		this.diameter = 0;
		this.alpha = 100;
	}
	draw() {
		fill(0, 100, 100, this.alpha);
		circle(width/2, height/2, this.diameter);
		this.diameter += 10;
		if(this.diameter > 200){
			this.alpha *= 0.9;
		}
	}
}

class Anim_s{
	constructor() {
		this.xPos = 0;
	}
	draw() {
		fill(60, 100, 100);
		rect(this.xPos, 0, 50, height);
		this.xPos += 50;
	}
}

class Anim_d{
	constructor() {
		this.size = 1.0;
	}
	draw() {
		fill(120, 100, 100);
		rectMode(CENTER);
		rect(width/2, height/2, width * this.size, height * this.size);
		this.size *= 0.9;
		rectMode(CORNER);
	}
}

class Anim_f{
	constructor() {
		this.alpha = 100;
	}
	draw() {
		background(180, 100, 100, this.alpha);
		this.alpha *= 0.95;
	}
}

class Anim_g{
	constructor() {
		this.yPos = height;
	}
	draw() {
		fill(200, 100, 100);
		rect(0 , this.yPos - 50, width, 50);
		this.yPos -= 40;	
	}
}

class Anim_h{
	constructor() {
		this.size = 1.0;
	}
	draw() {
		stroke(300, 100, 100);
		strokeWeight(10);
		noFill();
		circle(width/2, height/2, this.size);
		this.size += 50;
		noStroke();
	}
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}