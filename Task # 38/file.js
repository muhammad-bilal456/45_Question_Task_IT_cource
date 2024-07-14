"use strict";
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function described_cities(city, country = "Pakistan") {
    console.log(`\n The ${city} is in ${country}`);
}
// 1st call
described_cities("Islamabad");
//2nd call
described_cities("Multan");
//3rd call and both argument are changed
described_cities("Tokyo", "Japan");
