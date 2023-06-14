/**
 * Calculate the area of a rectangle.
 * 
 * @remarks
 * The area of is calculated by its width multiplied by its length.
 * 
 * @param width - The width of the rectangle.
 * @param length - The length of the rectangle.
 * @returns The area of a rectangle.
 * 
 * @throws TypeError
 * When the width or length cannot be cast to a number.
 
 * @example Correct usage.
 * ```ts
 * // Returns 200
 * calcArea(10, 20);
 * ```
 * 
 * @example Correct usage with a default value for length.
 * ```ts
 * // Returns 200
 * calcArea(10);
 * ```
 * 
 * @example OK but not recommended.
 * ```ts
 * // Returns 200
 * calcArea('10', '20');
 * ```
 * 
 * @example Throws TypeError
 * ```ts
 * calcArea('string1', 'string2');
 * ```
 */
function computeArea(
    width: number | string,
    length: number | string = 20
  ): number {
    width = Number(width);
    length = Number(length);
  
    if (isNaN(width) || isNaN(length)) {
      throw new TypeError("Not a number.");
    }
  
    return width * length;
  }