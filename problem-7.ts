{
    class Car {
        constructor( public make: string, public model: string, public year: number) {}

        getCarAge(): number {
            const currentYear = new Date().getFullYear(); 
            return currentYear - this.year;
        }
    }

    // Sample Input:
    const car = new Car("Honda", "Civic", 2018);

    // Sample Output:
    console.log(car.getCarAge()); // Output: 6 (assuming current year is 2024)
}