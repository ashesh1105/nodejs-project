// Define a function with callback function placeholder
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

// Call the above function by supplying what we want to do with added sum, just logging here
add(2, 3, (sum) => {
    console.log(sum)    // Should print 5 after 2 seconds
})