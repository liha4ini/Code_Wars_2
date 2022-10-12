// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


const getSize = (w, h, d) => [2 * (w * h + w * d + h * d), w * h * d];