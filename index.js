function solution(A) {
    let result = 0;

    for (let i = 0; i < A.length; i++) {
        // XOR ^ sets each bit to 1 if only one of the 2 is 1
        result ^= A[i];
    }

    return result;
}

const A = [2, 7, 2, 7, 5, 4, 5];
console.log(solution(A));  