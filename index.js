function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const namedFunction = () => console.log("This is a named function");   // the function is named = named function
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return () => console.log("This is an anonymous function!")
}

