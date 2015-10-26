function bubble(){
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r is radius which is 1/2 the width of the circle
    this.bubbleSize = r*2; //width and height are twice the radius

    //draw the bubble
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
} // end bubble






function setup(){
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    var myArray = []; // create a blank array

    for(var i=0; i<10000; i++){

        myArray[i] = ellipse(i,i,10,10);
    }

    console.log(myArray);

    for(var i=0; i < myArray.length; i++){
        myArray[i]+=10;


       // console.log(myArray[i]);
        console.log(myArray);
                    }
    console.log("myArray",myArray);

//    console.log(myArray[0]);
//    console.log(myArray[1]);
//    console.log(myArray[2]);
//    console.log(myArray);
//    console.log("myArray", myArray);
} //end setup
