var area = "rectangle";
var pi=3.142, l=5, b=4, r=3;

switch (area) {
    case "circle":
        console.log("Are of Circle :" +pi*r**2);
        break;
    case "traingle":
        console.log("Are of traingle :" + (l*b)/2);
        break;
    case "rectangle":
        console.log("Are of Rectangle :" +(l*b));
        break;

    default:
        console.log("Enter a valid data");
}