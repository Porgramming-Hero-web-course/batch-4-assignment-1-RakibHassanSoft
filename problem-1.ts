{
    // THe sumArray function
    function sumArray(nums: number[]): number {

        let sum: number = 0;
        for (let i: number = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        return sum;
    }

    let result: number = sumArray([1, 2, 3, 4, 5]);
    console.log(result); // 15
}