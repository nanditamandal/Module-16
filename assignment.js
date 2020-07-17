 //Calculate feet to mile

 function feetToMile(feet)
 {
     var checkPositiveOrNot=Math.sign(feet);
     if(checkPositiveOrNot===1 || checkPositiveOrNot===0)
     {
        var oneFeet=1/5280;
        var mile=oneFeet*feet;
        return mile;
     }
     else{
         return -1;
     }
    
 }

 var result=feetToMile(100);
 if (result!=-1)
 {
    console.log("The result of feet to mile is : "  ,result.toFixed(5));
 }
 else{
    console.log("distance can not be a negative number.");
 }
 
 //Wood Calculaor for chair table bed

 function woodCalculator(chair, table, bed)
 {
    const woodForPerChair=1;
    const woodForPerTable=3;
    const woodForPerBed=5;

    var isPositiveForChair=Math.sign(chair);
    var isPositiveForTable=Math.sign(table);
    var isPositiveForBed=Math.sign(bed);
   
    if((isPositiveForChair===1 || isPositiveForChair===0) &&(isPositiveForTable===1 || isPositiveForTable===0 )  && ( isPositiveForBed===1 || isPositiveForBed===0))
    {
        var totalWoodForChair=woodForPerChair*chair;
        var totalWoodForTable=woodForPerTable*table;
        var totalWoodForBed=woodForPerBed*bed;
    
        var totalWood=totalWoodForChair+totalWoodForTable+totalWoodForBed;
        return totalWood;

    }
    else{
        return -1;
    }
  
  

 }

 var resultForWood=woodCalculator(14, 5, 12);
 if(resultForWood!=-1)
 {
    console.log("Total wood :" ,resultForWood);
 }
 else{
     console.log("table or chair or bed negative value cant count");
 }

 //Brick Calculator

 function brickCalculator(floor){

    const brickPerFeet=1000;

    const fisrtTenFloorHeight=15;
    const secondTenFloorHeight=12;
    const avobeTwentyFloor=10;

    var totalBrickFirstTenFloor=0;
    var totalBrickFSecondTenFloor=0;

    if(floor>=0 && floor<=10)
    {
        totalBrickFirstTenFloor=floor*brickPerFeet*fisrtTenFloorHeight;
        return totalBrickFirstTenFloor;
    }
    else if(floor>10 && floor<=20)
    {
        totalBrickFirstTenFloor=10*brickPerFeet*fisrtTenFloorHeight;

        var elevenToTewnty=floor-10;
        totalBrickFSecondTenFloor=(elevenToTewnty*brickPerFeet*secondTenFloorHeight)+totalBrickFirstTenFloor;
        return totalBrickFSecondTenFloor;


    }
    else if(floor>20)
    {
        var moreTwenty=floor-20;
        totalBrickFirstTenFloor=10*brickPerFeet*fisrtTenFloorHeight;

        totalBrickFSecondTenFloor=totalBrickFirstTenFloor+(10*brickPerFeet*secondTenFloorHeight);

        var totalBrickeForMoreThenTwentyFloor=  totalBrickFSecondTenFloor+(avobeTwentyFloor*brickPerFeet*moreTwenty);
        return totalBrickeForMoreThenTwentyFloor;

    }

    else{
        return -1;
    }
   


 }
 var totalBrick=brickCalculator(33);
 if(totalBrick!= -1)
 {
    console.log("Total Brick :", totalBrick);
 }
 else{
     console.log("Negative value can not calculate total brick");
 }
 
 

 // tiny friend

 var nameList=[ 'nandita', 'sanjay', 'opu' ];
 function tinyFriend(name)
 {
    var arraylength=name.length;
   
    if(arraylength>0)
    {
        var shortName=name[0].length;
        var friendName;

        for(var i=0; i<arraylength; i++)
        {
            if(shortName>name[i].length)
            {
                shortName=name[i].length;
                friendName=name[i];
            
              }
        }
        return friendName;
    }
    else{
        return -1;
    }

 }
 

 var friend=tinyFriend(nameList);
 if(friend!=-1)
 {
    console.log("Tiny friend name is: ", friend);
 }
 else{
     console.log("Array is empty...");
 }

