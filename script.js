const functionName = function() {
    alert(arguments.callee.name);
};

// Call the function
functionName();
