export class Dog extends Animal {
    constructor(name: string, weight: number)
        super(name, weight);

}

bark(): void {
    console.log("au au");
}

  
constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
}

    eat(quantity: number); void {
        console.log("the animal has eaten " + quantity);
    }

    a