window.onload = function () {
    var rgb = document.getElementById("rgb");
    var hex = document.getElementById("hex");

    var rng_r = document.getElementById("rng_r");
    var rng_g = document.getElementById("rng_g");
    var rng_b = document.getElementById("rng_b");

    var bar_r = document.getElementById("bar_r");
    var bar_g = document.getElementById("bar_g");
    var bar_b = document.getElementById("bar_b");
    var newcl = document.getElementById("newcl");
    var for_r;
    var for_g;
    var for_b;

    rng_r.oninput = function () {
        var clr_r = "rgb" + "(" + rng_r.value + "," + 0 + "," + 0 + ")";
        bar_r.style.width = rng_r.value / 255 * 100 + "%";
        bar_r.innerHTML = rng_r.value;
        bar_r.style.background = clr_r;
        chng();
    };

    rng_g.oninput = function () {
        var clr_g = "rgb" + "(" + 0 + "," + rng_g.value + "," + 0 + ")";
        bar_g.style.width = rng_g.value / 255 * 100 + "%";
        bar_g.innerHTML = rng_g.value;
        bar_g.style.background = clr_g;
        chng();
    };

    rng_b.oninput = function () {
        var clr_b = "rgb" + "(" + 0 + "," + 0 + "," + rng_b.value + ")";
        bar_b.style.width = rng_b.value / 255 * 100 + "%";
        bar_b.innerHTML = rng_b.value;
        bar_b.style.background = clr_b;
        chng();
    };

    function rgbTohex(r, g, b) {
        return (
            "#" +
            parseInt(r).toString(16) +
            parseInt(g).toString(16) +
            parseInt(b).toString(16)
        );
    }

    function chng() {
        var clr =
            "rgb" + "(" + rng_r.value + "," + rng_g.value + "," + rng_b.value + ")";
        var hx = rgbTohex(rng_r.value, rng_g.value, rng_b.value);
        document.body.style.background = hx;
        rgb.innerHTML = clr;

        hex.innerHTML = hx;
    }

    function rndmClr(min, max) {
        return Math.floor(Math.random() * (max - min)) - min;
    }

    var btn = document.getElementById("btn");
    btn.addEventListener("click", rndmChange);

    function rndmChange() {
        rng_r.value = rndmClr(0, 255);
        rng_g.value = rndmClr(0, 255);
        rng_b.value = rndmClr(0, 255);
        var rndm =
            "rgb" + "(" + rng_r.value + "," + rng_g.value + "," + rng_b.value + ")";
        document.body.style.background = rndm;
        bar_r.style.width = rng_r.value / 255 * 100 + "%";
        bar_g.style.width = rng_g.value / 255 * 100 + "%";
        bar_b.style.width = rng_b.value / 255 * 100 + "%";
        bar_r.innerHTML = rng_r.value;
        bar_g.innerHTML = rng_g.value;
        bar_b.innerHTML = rng_b.value;
        var clr_r = "rgb" + "(" + rng_r.value + "," + 0 + "," + 0 + ")";
        var clr_g = "rgb" + "(" + 0 + "," + rng_g.value + "," + 0 + ")";
        var clr_b = "rgb" + "(" + 0 + "," + 0 + "," + rng_b.value + ")";
        bar_r.style.background = clr_r;
        bar_g.style.background = clr_g;
        bar_b.style.background = clr_b;
        chng();
    }
};
