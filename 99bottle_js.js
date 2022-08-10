 
numbottle = 99 
function beer(){
    for (numBottle = 99; numBottle > 0; numBottle--){
        if(numBottle == 1){
            
            console.log(numBottle + " bottle of beer on the wall, "+ numBottle + " bottle of beer. Take 1 down, pass it around, " + (numBottle-1) + " no more bottles of beer on the wall" )
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " +numbottle+" bottles of beer on the wall" )
        }
        else{console.log(numBottle + " bottles of beer on the wall, "+ numBottle + " bottles of beer. Take 1 down, pass it around, " + (numBottle-1) + " bottles of beer on the wall")
    }
        
    }
}
beer();