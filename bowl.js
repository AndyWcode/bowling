
const frames = [ 
    [6, 0],
    [2, 8],
    [3, 3],
    [4, 1],
    [5, 5],
    [3, 0],
    [2, 6],
    [7, 1],
    [4, 2],
    [9, 0],
]


function bowloign(atempt){
    let finalscore = 0
    let scoreframes  = []
    for(let frame = 0; frame < atempt.length; frame++){
        if(atempt[frame][0] + atempt[frame][1] < 10)
            {scoreframes.push(atempt[frame][0] + atempt[frame][1]);}








        }
    console.log(scoreframes);
    }








bowloign(frames);
