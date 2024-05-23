1.
//How to compare two JSON have the same properties without order
//let obj1 = {name:"person1", age:5}
//ler obj2 = {age:5 , name:"person1"}
function compareJSON(json1, json2) {
    // Convert JSON objects to strings
    var str1 = JSON.stringify(json1);
    var str2 = JSON.stringify(json2);
    
    // Sort strings to ensure consistent order
    var sortedStr1 = str1.split('').sort().join('');
    var sortedStr2 = str2.split('').sort().join('');
    
    // Compare sorted strings
    return sortedStr1 === sortedStr2;
}

var obj1 = {"name": "Person 1", "age": 5};
var obj2 = {"age": 5, "name": "Person 1"};

console.log(compareJSON(obj1, obj2)); 