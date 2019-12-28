const log = console.log

// Sync function
console.log('Starting...')  // should run 1st

// A basic synchronous program node provides, a call back function and milliseconds
setTimeout(() => {
    log('2 seconds timer')
}, 2000)    // should run 4th

// setTimeOut with 0 ms also runs async way
setTimeout(() => {
    log('0 second timer')
}, 0)   // should run 3rd

// Sync function again  // should run 2nd
console.log('Stopping...')

// Explanation of above order of execution
/*
1) main() function starts executing in Call Stack
2) main() executes console.log('Starting...') statement (1st to execute here)
3) setTimeOut is a Node function and not a JavaScript one. With first setTimeOut function
   an event gets registered with Node APIs and 2 second timer starts.
4) Second setTimeOut get picked up by Event Loop and another event gets registered with
   Node APIs and 0 second timer starts, which finishes immediately. This is added to
   Callback Queue. This now waits for Call Stack to be available so the function
   underneath - the console.log with '0 second timer' can be added to call stack and run,
   but main() is busy executing more statements and occupying Call Stack now.
5) main() function then executes second console.log statement and frees Call Stack.
6) Event Loop then takes console.log('0 second timer') statement from Callback Queue and adds
   it to Call Stack, which then gets executed.
7) Finally, 2 seconds is over, the function underneath second setTimeOut is added to Callback
   Queue momentarily and since Call Stack is free, its added there and gets executed.
*/
