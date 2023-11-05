function add_to(f) {
    let args = [];

    function insert(arg) {
        args.push(arg);
        if (args.length === 2) {
            args[0] = f(args[0], args[1]);
            args.pop();
        }
    }

    function result() {
        return args[0];
    }

    return {
        insert: insert,
        result: result
    };
}