var myArray = [];// create a blank array

function bubble(){
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r is radius which is 1/2 the width of the circle
    this.bubbleSize = this.r*2; //width and height are twice the radius

    //method: draw the bubble
    this.drawBubble = function(){
        fill('pink');
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
    }
} // end bubble

function setup(){
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("windows");


    for(var i=0; i<100; i++){

        myArray[i] = new bubble();
        myArray[i].drawBubble();
    }

} //end setup


function mousePressed(){

    console.log("mouse Pressed");
    var d;
   for(var i=0; i < myArray.length; i++){

d = dist(mouseX,mouseY,myArray[i].x,myArray[i].y); console.log("distance",d);

   }
}
