/* 
Fibonacci
*/

const solve = () => {
    let x = 0
    let y = 1
    let z; 
    // Z exists - temp digit

    tmp=[]

    while(tmp.length < 4_000_001){
        z = x+y
        x=y
        y=z

        tmp.push(y)
    }

    return tmp.reduce((acc, val) =>{
        if (val % 2 == 0){
            acc += val
        }

        return acc
    }, 0)

}


console.log(solve(10))