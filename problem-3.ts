{
    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.split(/\s+/); // Spliting  into words
        let count = 0;

        for (let i = 0; i < words.length; i++) if (words[i] === word) count++;

        return count;
    }
    // Sample Input:
    let result: number = countWordOccurrences("I love typescript", "typescript");
    console.log(result)
    // Sample Output:
    //1;
}