// Assignment problem 1
function seerToMon(value) {
    const mon = value / 40;
    if (value < 0 || typeof value == 'string' || typeof value == 'boolean') {
        return "value can't be negative, string or boolean.";
    }
    return mon;
}
const mon1 = seerToMon(80);
console.log(mon1);
//Assignment problem 2
function totalSales(shirt, pant, shoe) {
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    const shirtSales = shirt * shirtPrice;
    const pantSales = pant * pantPrice;
    const shoeSales = shoe * shoePrice;
    const total = shirtSales + pantSales + shoeSales;
    if (typeof shirt == 'string' || shirt < 0 || typeof pant == 'string' || pant < 0 || typeof shoe == 'string' || shoe < 0 || typeof shirt == 'boolean' || typeof pant == 'boolean' || typeof shoe == 'boolean') {
        return "value can't be negative, string or boolean.";
    }
    return total;
}
const Sales = totalSales(1, 1, 1);
console.log(Sales);
//Assignment problem 3
function deliveryCost(amount) {

    const costTishirt1 = 100 * 100;
    const costTishirt2 = costTishirt1 + (amount - 100) * 80;
    const costTishirt3 = costTishirt1 + (100 * 80) + (amount - 200) * 50;

    if (amount < 0 || typeof amount == 'string' || typeof amount == 'boolean') {
        return "value can't be negative, string or boolean.";
    } else if (amount <= 100) {
        return amount * 100;
    } else if (amount > 100 && amount <= 200) {
        return costTishirt2;
    } else {
        return costTishirt3;
    }
}
const costwhole = deliveryCost(100);
const costwhole = deliveryCost(20);
const costwhole = deliveryCost(150);
console.log(costwhole);
// Assignment problem 4
function perfectFriend(friend) {

    let bestFriend = '';

    if (friend.length == 0 || typeof friend == 'string' || typeof friend == 'number' || typeof friend == 'boolean') {
        return "value can't be negative, string or boolean.";
    }

    for (let i = 0; i < friend.length; i++) {

        if (typeof friend[i] == 'number') {
            return 'Number type input is not allowed.';
        } else if (friend[i].length == 5) {
            bestFriend = friend[i];
            break;
        } else {
            bestFriend = "Don't have any best friend.";
        }
    }
    return bestFriend;
}
const emptySet = perfectFriend('');
console.log(emptySet);