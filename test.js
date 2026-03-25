// Objects
// Similar to Python Dictionaries

var Object_Car = { "Name": "Totoyo", "Model": "U891", "Color": "Vanta Black", "Owner": "BATTMAAN" }

console.log(Object_Car)
console.log(Object_Car["Name"])


// loop through Object

for (let key in Object_Car) {
    console.log(key, Object_Car[key])
}