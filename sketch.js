function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(3);
  stroke(200,0,0)
  noFill();
  frameRate(1)//number of frames per secong
  background(121)
}

function draw() {
  translate(-10,10);//positive y is down, translated origin point
  var width = innerWidth - 2*30;
  var height = innerWidth - 2 *30;
  var shift = 5;
  
  var numsquares = 6;
  var r = 15;
  var spac = 10
  var sidelength = (width / numsquares) - spac;
  
  var counter = 0
  for (var y = 0; y < height; y += sidelength){
    if(y != 0){
     translate(-width+((numsquares+10.2)*(spac+6)), spac)
  }
    if (y %4*sidelength == 0){
      stroke(0,0,200)
    }
    
    else{
      
      stroke(200,0,0)
    }
    
    for(var x = 0; x < width; x += sidelength){
    counter ++;
      translate(spac, 0)
      
      
      //spac += spac;
       if (counter % 3 == 0){
      stroke(0,200,0)
    }
      else if(counter % 2 == 0){
               stroke(0,0,200)
              }
              
    else{
      
      stroke(200,0,0)
    }
      //quad(x, y, x+sidelength,y, x+sidelength,y+sidelength, x, y+sidelength)
      //if (mouseIsPressed){
      
      a = 0 
      b = random(0,255)
      c = random(0,255)
     d = color(a,b,c)
      if (counter % 3 == 0){
        e = (a,b*(0.4), c)
        fill(e)
        
      }
      else{
      fill(a,b,c*(0.4))
    }
    let value = lightness(d)
    quad(x + random(-shift, shift)+spac, y, x+sidelength+spac,y, x+sidelength+spac,y+sidelength, x+spac, y+sidelength)
      
      text(counter,x + random(-shift, shift)+spac+10, y+10, sidelength, sidelength)
      
    //quad(x + random(-shift, shift)+spac, y, x+sidelength+spac,y, x+sidelength+spac,y+sidelength, x+spac, y+sidelength)
  //}
      //else{
        //scale(.5)
        //quad(x, y, x+sidelength,y, x+sidelength+spac,y+sidelength, x+spac, y+sidelength);
      //}
      
      //ellipse(x+sidelength/2+10, y+sidelength/2, r,r )
      
  }
      }
  
  //quad(0,0, 0,200, 200,200, 200,0);
  //quad(240, 0, 440,0, 440,200, 240,200);
  //quad(0, 240, 200,240,200,440, 0,440);
  //quad(240, 240, 440, 240, 440,440, 240,440);
  //FIRST FOUR
  //NOW INSIDE
  //var spac = 40
  //ellipse(100,100,r,r);
  //ellipse(340, 100, r,r);
  //ellipse(100,340,r,r)
  //ellipse(340,340,r,r)
  
  //function mouseClicked() {
    //if (mouseX < 200 && mouseX < 400) {
      //fill(0,0,0)
      //color = 0;
    //} 
    //if (mouseY > 200 && mouseY < 400)
      //fill(255,255,255)

  //}
  //noLoop()

}
