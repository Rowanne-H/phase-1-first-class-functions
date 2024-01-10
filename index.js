function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function name() {
        return '';
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        return '';
    }
}