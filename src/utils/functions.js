


export function shuffleArray(array) {
    const newArray = array.slice(); // Create a shallow copy of the array to avoid modifying the original
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}


export const filterProducts = (value, products, productID) => {
    let data = value;
    // if (data.length === 4) {
    //     return shuffleArray(data);
    // } else if (data.length > 4) {
    //     return shuffleArray(data).filter((product, index) => index < 4);
    // } else {
    //     // if (data.length === 0) {
    //     return shuffleArray(products).filter((product, index) => (product.product_id !== productID))
    //     // }
    //     // let productsAfterFilter = products.filter(product => product.category_name !== data[0].category_name);
    //     // let index = 0
    //     // console.log(productsAfterFilter)
    //     // while (data.length < 4) {
    //     //     data.push(productsAfterFilter[index])
    //     //     index++;
    //     // }
    // }
    return shuffleArray(products).filter((product, index) => index < 4);
}


export function findMaxPrice(data) {
    if (!Array.isArray(data) || data.length === 0) {
        // Handle invalid input, return an appropriate value or throw an error
        return null;
    }
    // Extract all prices from the array of objects
    const prices = data.map(item => item.price);
    // Use Math.max to find the maximum price
    const maxPrice = Math.max(...prices);
    return maxPrice;
}


export function findMinPrice(data) {
    if (!Array.isArray(data) || data.length === 0) {
        // Handle invalid input, return an appropriate value or throw an error
        return null;
    }
    // Extract all prices from the array of objects
    const prices = data.map(item => item.price);
    // Use Math.min to find the minimum price
    const minPrice = Math.min(...prices);
    return minPrice;
}


export function findLowestPrice(products, targetPrice) {
    // Filter objects based on the specified price
    const filteredProducts = products.filter(product => product.price <= targetPrice);

    // If there are no matching products, return null
    if (filteredProducts.length === 0) {
        return null;
    }

    return filteredProducts;
}



export function getTopDiscountObjects(array) {
    // Filter out objects that contain the 'Discount' property
    const discountObjects = array.filter(obj => obj.discount);

    // Sort the filtered objects based on the 'Discount' property in descending order
    discountObjects.sort((a, b) => b.discount - a.discount);

    // Return the top 10 objects
    return discountObjects.slice(0, 10);
}
