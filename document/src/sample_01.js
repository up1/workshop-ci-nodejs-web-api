/**
 * Calculate the area of a rectangle.
 * 
 * @param { (number | string) } width - The width of the rectangle.
 * @param { (number | string) } [length=20] - The length of the rectangle.
 * 
 * @returns {number} The area of a rectangle.
 * 
 * @throws {TypeError} When the width or length cannot be cast to a number.
 * 
 * @example
 * // Correct usage.
 * calcArea(10, 20);
 * 
 * @example
 * // Correct usage with a default value for length.
 * calcArea(10);
 * 
 * @example
 * // OK but not recommended.
 * calcArea('10', '20');
 * 
 * @example
 * // Throws TypeError
 * calcArea('string1', 'string2');
 */
function calcArea(width, length = 20) {
    width = Number(width);
    length = Number(length);
  
    if (isNaN(width) || isNaN(length)) {
      throw new TypeError("Not a number.")
    }
  
    return width * length
  }