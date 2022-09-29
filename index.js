class startEngine {
    constructor (type,model,color,weight,voice) {
        this.type = type;
        this.model = model;
        this.color = color;
        this.weight = weight;
        this.voice = voice;
    }
    voi () {
        console.log(this.voice);
    }
}
class Car extends startEngine {
    constructor(type,model,color,weight,yearofissue,voice) {
        super (type,model,color,weight,voice);
        this.yearofissue = yearofissue
    }
    year() {
        console.log(this.type);
    }
}
const dimon = new Car ("Gibrid","M5","Black",5,2015,"gaf gaf")
dimon.voi()
dimon.year ()

class Aviation {
    constructor(length,color,weight) {
        this.length = length;
        this.color = color;
        this.weight = weight;
    }
    Avia () {
        console.log(this.length,this.color,this.weight);
    }
}
class air extends Aviation {
    constructor (length,color,weight,width) {
        super (length,color,weight);
        this.width = width
    }
    Plane () {
        console.log(this.length,this.color,this.weight,this.width);
    }
}

const description = new air ('25','white','28','15')
description.Avia ()
description.Plane ()

class vodka {
    constructor (color,material,model) {
        this.color = color;
        this.material = material;
        this.model = model;
    }
    lodka () {
        console.log(this.color,this.material,this.model);
    }
}
class yachta extends vodka {
    constructor(color,material,model,length) {
        super (color,material,model);
        this.length = length
    }
    yoh () {
        console.log(this.color,this.material,this.model,this.length);
    }
}
const character = new yachta ('color:brown','Material:стеклопластик','model:Pershing 64','length:83cm')
character.lodka ()
character.yoh ()