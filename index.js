function solution(A) {
    let result = 0;

    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }

    return result;
}

// Example usage:
const A = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(A));  // Expected output: 7