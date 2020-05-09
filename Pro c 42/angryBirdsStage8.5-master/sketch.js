var player ; 

function setup() {
        canvas = createCanvas(600,600) ;
        player  = new Player(100, 250, 250, 170, 330, 300);  ; 
} 

function draw() {
        background(220) ; 
        player.display() ;
  
        keyPressed() ; 



}   

function  keyPressed() {
        if(keyIsDown(LEFT_ARROW)) {
             
        }  
    
        if(keyIsDown(RIGHT_ARROW)) {
            this.velocityX = 30 ;
            this.velocityY = -100 ; 
        }
     }