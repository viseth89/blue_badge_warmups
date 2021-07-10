easy_input = [1721, 979, 366, 299, 675, 1456]

const solve = arr => {

for (let i = 0; i<easy_input.length; i++){
    for(let j = i+1; j<easy_input.length; j++){
        console.log(i,j,easy_input[j] + easy_input[i])
            console.log(easy_input[i]*easy_input[j])
    }
}
}

solve(easy_input)