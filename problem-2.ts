{
    // removeDuplicates function
    function removeDuplicates(nums: number[]): number[] {
        let uniqueNums: number[] = [];
        
        for (let i = 0; i < nums.length; i++)   if (nums[i] !== nums[i + 1])     uniqueNums.push(nums[i]);
    
        return uniqueNums;
    }

    // Sample Input:
    let result: number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result);

    // Sample Output:
    // [1, 2, 3, 4, 5]
}
