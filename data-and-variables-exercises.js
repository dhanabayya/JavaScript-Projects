// declaration and initialization of variables
let shuttleName='Determination';
let shuttleSpeedMph= 17500;//mph
let distanceToMarsKm=225000000;//km
let distanceToTheMoonKm=384400;//km
const milesPerKm=0.621;

//print out the type of each variable
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(distanceToMarsKm));
console.log(typeof(distanceToTheMoonKm));
console.log(typeof(milesPerKm));

//calculating howmany days it will take to mars
//declaring and initializing milesToMars,hoursToMars,daysToMars
let milesToMars=distanceToMarsKm * milesPerKm;
let hoursToMars=milesToMars / shuttleSpeedMph;
let daysToMars=hoursToMars / 24;
console.log(shuttleName +" will take "+ daysToMars +" days to reach mars.");

//calculating howmany days it will take to moon
//declaring and initializing milesToMoon,hoursToMoon,daysToMoon
let milesToMoon=distanceToMarsKm * milesPerKm;
let hoursToMoon=milesToMoon / shuttleSpeedMph;
let daysToMoon=hoursToMoon / 24;
console.log(shuttleName +" will take "+ daysToMoon +" days to reach moon.");

