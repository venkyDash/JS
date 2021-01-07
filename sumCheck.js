/**Function that validates array elements for numeric values 
 * @param(container) An array of elements
 * return boolean
*/

const validInput = (container) => {
    if (container.includes(null)) {
        throw new Error("Null value in array")
    } else if (container.includes(undefined)) {
        throw new Error("undefined value in array")
    } else if (container.some(isNaN)) {
        throw new Error ("Only numeric values please")
    } 
    else if (container.length==0){
        throw new Error("Empty array cannot be tested")
    } else {
        return true
    }
}

/**
 * Function that checks whether sum of a
 * pair of elems is present or not
 * @param(container) Input array of numbers
 * return boolean 
 */
const sumCheck = (container) => {
    if (validInput(container))
     {
        let sumPresent = true;
        for (let i=0; i<container.length; i++) {
            let j =i+1;
            while (sumPresent && j<container.length-1) {
                sumPresent = !container.includes(container[i]+container[j])
                j++;
            }
            if (!sumPresent) {
                break;
            }
        }
        return sumPresent
    }
}

console.log(` No sum elements in the array [66, 99, 33, 42] ${sumCheck([66, 99, 33, 42])}`);

module.exports = sumCheck;