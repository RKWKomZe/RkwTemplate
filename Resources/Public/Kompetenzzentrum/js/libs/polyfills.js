if (!Math.sign)
    Math.sign = function sign(n) {
        n = Number(n);
        return n ? n < 0 ? -1 : 1 : n === n ? n : NaN;
    };
