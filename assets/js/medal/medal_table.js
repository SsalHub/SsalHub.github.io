
/**
 * Get Medal Stat innerHTML String 
 * @param {String} stat medal stat
 */
function getTdData(data) {
    if (data == "" || data == "0") {
        // no data
        return '<font></font>';
    } else if (data[0] != '-') {
        return '<font>' + data + '</font>';
    }
    return "Error!";
}


/**
 * Get ClassName whether stat is 0 or not
 * @param {String} stat medal stat
 */
function getTdClassName(data) {
    if (data == "" || data == "0") {
        // no data
        return 'medal_data-no_exists';
    } else if (data[0] != '-') {
        return 'medal_data-exists';
    }
    return "Error!";
}


/**
 * Detect 
 * @param {Element} el target element
 */
function detectTop(el) {

}