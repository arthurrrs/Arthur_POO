export class Dog extends animal {

    constructor(name: string, weight: number)
        super(name, weight);

}

bark(): void {
    console.log("au au");
}

