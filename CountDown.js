/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var x = 60;
var y ;
while (x>=0){
    y= x===50 ?'Orbiter transfers from ground to internal power':(x===31? 'Ground launch sequencer is go for auto sequence start':(x===16? 'Activate launch pad sound suppression system':(x===10? 'Activate main engine hydrogen burnoff system':(x===6?'Main engine start':(x===0? 'Solid rocket booster ignition and liftoff!':'T-'+x+' seconds')))));
    console.log(y);
    x= x-1;
}
