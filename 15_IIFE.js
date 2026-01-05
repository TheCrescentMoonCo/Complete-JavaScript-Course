// IIFE: Immediately Invoked Function Expressions is use to avoid pollution due to global data and also it can be called by itself

(()=> {console.log('hi!');  // Unnamed IIFE;
})();

(function display(){console.log('DB Connected')})();    // Named IIFE

// IIFE with variable

((name) => console.log(`${name}`))('DBMS');