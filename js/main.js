function bubble(){
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r is radius which is 1/2 the width of the circle
    this.bubbleSize = this.r*2; //width and height are twice the radius

    //method: draw the bubble
    this.drawBubble = function(){
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
    }
} // end bubble






function setup(){
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("windows");

    var myArray = []; // create a blank array

    for(var i=0; i<10; i++){

        myArray[i] = new bubble();
        myArray[i].drawBubble();
    }

    console.log(myArray);

    for(var i=0; i < myArray.length; i++){


        console.log(myArray[i]);

    }
    console.log(myArray);
//   console.log("myArray",myArray);
//    console.log(myArray[0]);
//    console.log(myArray[1]);
//    console.log(myArray[2]);
//    console.log(myArray);
} //end setup
