/*
    How to compare 2 objects
    iterate through keys1, het value1, compare values to key1 of object2
    if value is object, call this method
    if value is array, use array compare method
    if value is others, user ===
*/
function isObjectsEqual(obj1, obj2){
    //if they have different length, meaning different numbers of key: value pair
    //then what's the point
    if(Object.keys(obj1).length != Object.keys(obj2).length) return false;
    if(!isArraysEqual(Object.keys(obj1), Object.keys(obj2))) return false;
    //same length means same set of keys
    //for all browsers
    var keys = Object.keys(obj1);
    var isSame = true;
    for(var i = 0; i<keys.length; i++){
        if(obj1[keys[i]] instanceof Array){
            if(obj2[keys[i]] instanceof Array){
                if(!isArraysEqual(obj1[keys[i]], obj2[keys[i]])){
                    isSame = false;
                    i += keys.length;
                }
            }else{
                isSame = false;
                i += keys.length;
            }
        }else if(obj1[keys[i]] instanceof Object){
            if(obj2[keys[i]] instanceof Object){
                if(!isObjectsEqual(obj1[keys[i]], obj2[keys[i]])){
                    isSame = false;
                    i += keys.length;
                }
            }else{
                isSame = false;
                i += keys.length;
            }
        }else{
            if(obj1[keys[i]] != obj2[keys[i]]){
                isSame = false;
                i += keys.length;
            }
        }
    }
    return isSame;
}

function isArraysEqual(arr1, arr2){
    if(!isArray(arr1) || !isArray(arr2)) return false;
    if(arr1.length != arr2.length) return false;
    //iterate through each item in array 1 to check if they are in array2, if one is missing, return false
    var isSame = true;
    arr1.sort();
    arr2.sort();
    for(var i = 0; i< arr1.length; i++){
        if(arr1[i] instanceof Object){
            if(!isObjectsEqual(arr1[i], arr2[2])){
                isSame  = false;
                i=arr1.length + 1;
            }
        }else if(arr1[i] instanceof Array){
            if(!isArraysEqual(arr1[i], arr2[2])){
                isSame  = false;
                i=arr1.length + 1;
            }
        }else {
            if(arr1[i] != arr2[i]){
                isSame  = false;
                i=arr1.length + 1;
            }
        }
    }
    return isSame;
}

function isArray(arr){
    if(Array.isArray){
        return Array.isArray(arr);
    }else{
        return Object.prototype.toString.call(arr) === "[object Array]";
        //you can use 
        //return arr.constructor.name === "Array";
    }
}




function test(){
    var o1={"name": "chema", "age": "200", "dead":"no","qual":{
        "10th": {"math":"90","phy":"96"},
        "12th": {"IP": 120, "PE": "failed"},
        "btech": [8,4,5,{'z':'1'},8]
    }, "disease":["cancer","hiv","todie"]};
    var o2={"name": "chema", "age": "200", "dead":"no","qual":{
        "10th": {"math":"90","phy":"96"},
        "12th": {"IP": 120, "PE": "failed"},
        "btech": [8,4,5,{'z':'1'},8]
    }, "disease":["cancer","hiv","todie"]};
    if(isObjectsEqual(o1,o2)){
        console.log("tested okay");
    }
}
