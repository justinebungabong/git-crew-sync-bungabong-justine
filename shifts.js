function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
    if (hours > 8) {
        let regularPay = 8 * rate;
        let overtimeHours = hours - 8;
        let overtimePay = overtimeHours * (rate * 1.5);
        return Math.round(regularPay + overtimePay);
    } else {
        return Math.round(hours * rate);
    }
}

module.exports = { isValidShift, calculatePay };
