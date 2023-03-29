import p5 from "p5";
import 'p5/lib/addons/p5.sound';

const sketch = (p: p5) => {

    
  p.preload = () => {
	sound = p.loadSound('./SoundSamples/se01.wav');
  };

  p.setup = () => {
    p.createCanvas(400, 400);
    sound.play();

  };

  p.draw = () => {
    p.background(220);
    p.ellipse(50, 50, 80, 80);
  };
};

new p5(sketch);