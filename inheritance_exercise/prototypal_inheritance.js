Function.prototype.inherits = function(parent){
    function Surrogate() { };
    Surrogate.prototype = parent.prototype;
    // console.log(Surrogate.prototype);
    // console.log(this.prototype);
    this.prototype = new Surrogate();
    // console.log(this.prototype.__proto__);
    // console.log(this);
    // console.log(this.prototype.constructor);
    this.prototype.constructor = this;
    
}

function MovingObject(speed) {
    this.speed = speed;
}

MovingObject.prototype.saySpeed = function(){
    console.log(`Object's speed is ${this.speed}.`)
}



function Ship(speed) { 
    MovingObject.call(this,speed);
}
Ship.inherits(MovingObject);


// function Asteroid() { }
// Asteroid.inherits(MovingObject);

obj1 = new MovingObject(5);
// console.log(obj1);
obj1.saySpeed();

obj2 = new Ship(7);
obj2.saySpeed();