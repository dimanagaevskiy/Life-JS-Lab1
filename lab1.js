const width = 50;
const height = 30;
let a;
let Arr = [], Arr2 = [];

for(let i = 0; i < height; i ++ ){
    Arr[i] = [];
    Arr2[i] = [];
    for(let j = 0; j < width; j++){
        if ((i === 0 || i === height - 1) || (j === 0 || j === width - 1)) {
            Arr[i][j] = 0;
            Arr2[i][j] = 0;
        }
        else{
            let v =  Math.floor(Math.random() * 2);
            Arr[i][j]= v;
            Arr2[i][j] = v;
        }
         
    }
}

function draw(){

    for(let i = 0; i < height; i ++ ){
        for(let j = 0; j < width; j++){

            if(Arr2[i][j]){
                process.stdout.write("*");
            }
            else{
                process.stdout.write(" ");
            }
        
            if(j === width - 1)
            {
                console.log();
            }
        }
    }    
} 

function copy(){
    for(let i = 0; i < height; i ++ ){
        for(let j = 0; j < width; j++){
            Arr[i][j] = Arr2[i][j]; 
        }
    }
}

function main() {
    console.clear();
    for(let i = 1; i < height - 1; i ++ ){
        for(let j = 1; j < width - 1; j++){

        let s = Arr[i - 1][j - 1] + Arr[i - 1][j] + Arr[i - 1][j+1]+ Arr[i][j - 1]
             + Arr[i][j+ 1] + Arr[i + 1][j - 1] + Arr[i+ 1][j] + Arr[i + 1][j + 1]; 
            if (s === 3 ||(s === 2 && Arr[i][j] === 1)) {
                Arr2[i][j] = 1;
            }

            else if(Arr[i][j] === 1 && (s > 3 || s < 2)){
                Arr2[i][j] = 0;
            }

            else{
                Arr2[i][j] = 0;
            }  
        }
    }
}

draw();
setInterval(()=>{
    main();
    draw();
    copy();
}, 100)









