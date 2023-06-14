/** A class for rectangle. */
export class Rectangle {
    /** The width property of a rectangle. */
    width: number | string;
    /** The length property of a rectangle. */
    length: number | string;
  
    /**
     * Create a Rectangle instance.
     * 
     * @param width - The width of the rectangle.
     * @param length - The length of the rectangle.
     */
    constructor(width: number | string, length: number | string = 20) {
      this.width = width;
      this.length = length;
    }
  
    /**
     * Calculate the area of a rectangle.
     *
     * @returns The area of a rectangle.
     *
     * @throws TypeError
     * When the width or length cannot be cast to a number.
     *
     * @example Correct usage.
     * ```js
     * // Returns 200
     * calcArea(10, 20);
     * ```
     */
    calcArea(): number {
      let width = Number(this.width);
      let length = Number(this.length);
  
      if (isNaN(width) || isNaN(length)) {
        throw new TypeError("Not a number.");
      }
  
      return width * length;
    }
  }