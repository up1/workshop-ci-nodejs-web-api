/** A class for rectangle. */
class Rectangle {
    /**
     * Create a Rectangle instance.
     * 
     * @param { (number | string) } width - The width of the rectangle.
     * @param { (number | string) } [length=20] - The length of the rectangle.
     */
    constructor(width, length = 20) {
      /**
       * The width of the rectangle. 
       * @type { (number | string) }
       */
      this.width = width;
      /**
       * The length of the rectangle.
       * @type { (number | string) }
       */
      this.length = length
    }
  
    /**
     * Calculate the area of a rectangle.
     * 
     * @returns {number} The area of a rectangle.
     * 
     * @throws {TypeError} When the width or length cannot be cast to a number.
     * 
     * @example
     * // Correct usage.
     * calcArea(10, 20);
     */
    calcArea() {
      let width = Number(this.width);
      let length = Number(this.length);
  
      if (isNaN(width) || isNaN(length)) {
        throw new TypeError("Not a number.")
      }
  
      return width * length
    }
  }