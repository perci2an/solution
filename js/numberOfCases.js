function solution(balls, share) {
    function factorial(n) {
        let result = BigInt(1);
        for (let i = BigInt(2); i <= n; i++) { // factorial의 특성상 2로 설정해도 1과 다르지 않다
            result *= i;
        }
        return result;
    }
    
    const answer = factorial(BigInt(balls)) / (factorial(BigInt(balls) - BigInt(share)) * factorial(BigInt(share))); // 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
    
    return Number(answer);
}