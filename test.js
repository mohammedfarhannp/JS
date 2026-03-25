// Objects
// Similar to Python Dictionaries

var Object_Car = { "Name": "Totoyo", "Model": "U891", "Color": "Vanta Black", "Owner": "BATTMAAN" }

console.log(Object_Car)
console.log(Object_Car["Name"])


// loop through Object
// Method 1
for (let key in Object_Car) {
    console.log(key, Object_Car[key])
}

// Method 2
Object.keys(Object_Car).forEach( key => {
    console.log(key, Object_Car[key])
});

// Method 3
Object.values(Object_Car).forEach(value => {
    console.log(value)
})
