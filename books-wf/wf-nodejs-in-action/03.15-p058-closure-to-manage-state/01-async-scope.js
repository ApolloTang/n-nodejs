var color = 'blue';

function asyncFunction(callback) {
    setTimeout(callback, 200);
}

asyncFunction(function() {
    console.log('The color in exposed scope is ' + color);
});

(function(color) {
    asyncFunction(function() {
        console.log('The color inside closure is ' + color);
    })
})(color);

color = 'green';

