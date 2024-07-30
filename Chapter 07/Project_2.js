class Food{
    #Price = 5;
    #Price2 = 6;
    constructor(item1,item2){
        this.item1 = item1;
        this.item2 = item2;

    }
    calcTotal(){
        return (this.item1 * this.#Price) + (this.item2 * this.#Price2 );

    }
    get total(){
        console.log(this.calcTotal());
    }
}

let food1 = new Food(1,1)
let food2 = new Food(3,2)
let food3 = new Food(7,4)

food1.total
food2.total
food3.total
