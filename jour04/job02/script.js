async function jsonValueKey(json, key){
    const jsonValueKey = await fetch('data.json');
    const data = await jsonValueKey.json();
    console.log(data[key]);
    return data[key];
};

test = jsonValueKey('data.json', 'city');
console.log(test);
