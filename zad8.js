function curry(fn) {
    return function curried(...args){
        if(args.length>=fn.length){
            return fn(...args);
        }else{
            return function (...moreArgs){
                return curried(...args, ...moreArgs);
            }
        }
    }
}

function format_date(day,month,year){
   return '${day}.${month}.${year}';
}

var date = curry(format_date)
console.log(date(1)(12, 2020))
