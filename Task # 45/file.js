"use strict";
//Exercise no 45
//Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments.
//Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned
// to make sure all the information was stored correctly.
function car_details(manufacturer, model, color, tyres) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    if (color !== undefined) {
        car.color = color;
    }
    if (tyres != undefined) {
        car.tyres = tyres;
    }
    return car;
}
//without any opt param
let My_car = car_details("Honda", "City");
console.log(My_car);
//with 2 optional param
My_car = car_details("Honda", "City", "silver", 4);
console.log(My_car);
