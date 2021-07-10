/* 
Fibonacci
*/

const solve = (n) => {
    let x = 0
    let y = 1
    let z; 
    // Z exists - temp digit

    tmp=[]

    while(tmp.length < n){
        z = x+y
        x=y
        y=z

        tmp.push(y)
    }

    return tmp

}


console.log(solve(10))