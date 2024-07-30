class Workers{
    constructor(firstName,lastName,yearsWorked){
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}

let worker1 = new Workers("Rishen","Surjoobhalee","18")
let worker2 = new Workers("John","Doe","69")

let workerArray = [worker1,worker2];

Workers.prototype.details = function(){
    console.log(`The worker ${this.firstName} ${this.lastName} has been working here for ${this.yearsWorked} years`)

}

console.log(worker1)
workerArray.forEach((worker) => {worker.details()})
