console.log(
    fn("hello").fn("world").fn("!!!").fn('It').fn('is').fn('working').fn('!!!').fn()
)
//Will print: hello world !!!
console.log(
    fn("This").fn("is").fn("just").fn("a").fn("test").fn()
)
//Will print: This is just a test

function fn (str) {
    // here we are creating the object with property name "fn", and value of this property is function.
    return {
        fn : (accumulateStr) => {
            /* if "accumulateStr" (fn("hello".fn())) is undefind we are returning "str" 
            which will be equal hello if not we adding to string new value with spase 
            and calling main function "fn" to return the object again */ 
            if (accumulateStr !== undefined) {
                
                str += ' ' + accumulateStr;

                return fn(str);
            } else {
                return str;
            }
        }
    };
}