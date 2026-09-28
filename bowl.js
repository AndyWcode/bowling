
const frames = [ 
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0, 10],
]



for(let frame = 0; frame < frames.length-1; frame++){
        if(frames[frame][0] === 10 && frames[frame +1][0] === 10 && frames[frame +2][0] === 10)
            console.log((frames[frame][0] +  frames[frame + 1][0] +frames[frame + 2][0]));}

function bowloign(atempt){
    let scoreframes  = []

    for(let frame = 0; frame < atempt.length-1; frame++){
        if(atempt[frame][0] === 10)
            {scoreframes.push(atempt[frame][0] +  atempt[frame + 1][0] +atempt[frame + 2][0]);}
        else if(atempt[frame][0] + atempt[frame][1] === 10)
            {scoreframes.push(atempt[frame][0] + atempt[frame][1] +  atempt[frame + 1][0]);}
        
        else(atempt[frame][0] + atempt[frame][1] < 10)
                {scoreframes.push(atempt[frame][0] + atempt[frame][1]);}
        

    if(atempt[9][0] === 10){scoreframes.push(atempt[9][0] + atempt[9][1] + atempt[9][2]);}
    else if(atempt[9][0] + atempt[9][1] === 10)
        {scoreframes.push(atempt[9][1] + atempt[9][2] + atempt[9][3]);}
    

    else{scoreframes.push(atempt[9][0] + atempt[9][1]);}



        }
    let final_score = 0
    for(let i = 0; i< scoreframes.length; i ++)
        final_score = final_score + scoreframes[i] 
    console.log(final_score);
    }








/// bowloign(frames);
