const productArray = num => num.map(el => num.reduce((prev, curr) => prev * curr) / el);