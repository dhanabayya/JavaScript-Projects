let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
let holdCabinet3 =[];
//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet3.concat(holdCabinet1,holdCabinet2));
console.log("concat does not alter the original arrays\n")
console.log(holdCabinet1);

//b) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(1,4));
console.log(holdCabinet1);
console.log("\nslice does not alter the original arrays\n")

//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log("\nrevesre method change the order of items in the array in reverse order.\n");
console.log(holdCabinet2);
console.log("\nsort method change the order of items in the array in increasing order.");