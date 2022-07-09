function trail(r) {
    r = r.split("");
    let e = [];
    return r.forEach(function(a, t) {
        switch (a) {
            case ">":
                if ("<" === r[t + 1]) throw new Error("character collided with less-than sign");
                e.push(1);
                break;
            case "<":
                if (">" === r[t - 1]) throw new Error("character collided with greater-than sign");
                e.push(0);
                break;
            case "ˇ":
                break;
            case ")":
                e.push(" ");
                break;
            default:
                throw new Error("character not allowed")
        }
    }), String.fromCharCode(...e.join("").split(" ").map(r => parseInt(r, 2)))
}
