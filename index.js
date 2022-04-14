var OutsideValues;
(function (OutsideValues) {
    OutsideValues[OutsideValues["none"] = 0] = "none";
    OutsideValues[OutsideValues["topLeft"] = 1] = "topLeft";
    OutsideValues[OutsideValues["topRight"] = 2] = "topRight";
    OutsideValues[OutsideValues["topSide"] = 4] = "topSide";
    OutsideValues[OutsideValues["bottomSide"] = 8] = "bottomSide";
    OutsideValues[OutsideValues["bottomLeft"] = 16] = "bottomLeft";
    OutsideValues[OutsideValues["bottomRight"] = 32] = "bottomRight";
})(OutsideValues || (OutsideValues = {}));
var InsideValues;
(function (InsideValues) {
    InsideValues[InsideValues["none"] = 0] = "none";
    InsideValues[InsideValues["topLeft"] = 1] = "topLeft";
    InsideValues[InsideValues["topRight"] = 2] = "topRight";
    InsideValues[InsideValues["topCenter"] = 4] = "topCenter";
    InsideValues[InsideValues["bottomLeft"] = 8] = "bottomLeft";
    InsideValues[InsideValues["bottomRight"] = 16] = "bottomRight";
    InsideValues[InsideValues["bottomCenter"] = 32] = "bottomCenter";
})(InsideValues || (InsideValues = {}));
var diamond = {
    outside: OutsideValues.none,
    inside: InsideValues.none,
    vowelFirst: false
};
function updateOutside(newVal, button) {
    diamond.outside ^= newVal;
    button.classList.toggle('selected');
    translateDiamond();
}
function updateInside(newVal, button) {
    diamond.inside ^= newVal;
    button.classList.toggle('selected');
    translateDiamond();
}
function updateOrder(button) {
    diamond.vowelFirst = !diamond.vowelFirst;
    button.classList.toggle('selected');
    translateDiamond();
}
function translateDiamond() {
    var elem = document.getElementById('result');
    if (diamond.vowelFirst) {
        elem.innerText = translateOutside() + translateInside();
    }
    else {
        elem.innerText = translateInside() + translateOutside();
    }
}
function translateOutside() {
    switch (diamond.outside) {
        case OutsideValues.topLeft | OutsideValues.topRight | OutsideValues.topSide | OutsideValues.bottomSide: return 'a';
        case OutsideValues.topLeft | OutsideValues.topRight | OutsideValues.bottomLeft | OutsideValues.bottomRight: return 'ar';
        case OutsideValues.topLeft | OutsideValues.topSide | OutsideValues.bottomSide: return 'ah';
        case OutsideValues.topLeft: return 'ay';
        case OutsideValues.topSide | OutsideValues.bottomSide | OutsideValues.bottomLeft | OutsideValues.bottomRight: return 'eh';
        case OutsideValues.topLeft | OutsideValues.topSide | OutsideValues.bottomSide | OutsideValues.bottomLeft | OutsideValues.bottomRight: return 'ee';
        case OutsideValues.topLeft | OutsideValues.topSide | OutsideValues.bottomSide | OutsideValues.bottomRight: return 'eer';
        case OutsideValues.topLeft | OutsideValues.topRight: return 'uh';
        case OutsideValues.topSide | OutsideValues.bottomSide | OutsideValues.bottomRight: return 'air';
        case OutsideValues.bottomLeft | OutsideValues.bottomRight: return 'ih';
        case OutsideValues.topRight: return 'iy';
        case OutsideValues.topRight | OutsideValues.topSide | OutsideValues.bottomRight | OutsideValues.bottomLeft | OutsideValues.bottomSide: return 'ir';
        case OutsideValues.topLeft | OutsideValues.topRight | OutsideValues.topSide | OutsideValues.bottomRight | OutsideValues.bottomLeft | OutsideValues.bottomSide: return 'oh';
        case OutsideValues.bottomLeft: return 'oy';
        case OutsideValues.topLeft | OutsideValues.topRight | OutsideValues.topSide | OutsideValues.bottomLeft | OutsideValues.bottomSide: return 'oo';
        case OutsideValues.topSide | OutsideValues.bottomSide | OutsideValues.bottomLeft: return 'oh';
        case OutsideValues.bottomRight: return 'ow';
        case OutsideValues.topLeft | OutsideValues.topRight | OutsideValues.topSide | OutsideValues.bottomRight | OutsideValues.bottomSide: return 'ore';
        default: return '';
    }
}
function translateInside() {
    switch (diamond.inside) {
        case InsideValues.topCenter | InsideValues.bottomRight: return 'b';
        case InsideValues.topLeft | InsideValues.bottomCenter: return 'ch';
        case InsideValues.topCenter | InsideValues.bottomLeft | InsideValues.bottomRight: return 'd';
        case InsideValues.topRight | InsideValues.bottomLeft | InsideValues.bottomCenter: return 'f';
        case InsideValues.topRight | InsideValues.bottomRight | InsideValues.bottomCenter: return 'g';
        case InsideValues.topCenter | InsideValues.bottomRight | InsideValues.bottomCenter: return 'h';
        case InsideValues.topCenter | InsideValues.bottomLeft: return 'j';
        case InsideValues.topCenter | InsideValues.topRight | InsideValues.bottomRight: return 'k';
        case InsideValues.topCenter | InsideValues.bottomCenter: return 'l';
        case InsideValues.bottomLeft | InsideValues.bottomRight: return 'm';
        case InsideValues.topLeft | InsideValues.bottomLeft | InsideValues.bottomRight: return 'n';
        case InsideValues.topLeft | InsideValues.topCenter | InsideValues.topRight | InsideValues.bottomLeft | InsideValues.bottomCenter | InsideValues.bottomRight: return 'ng';
        case InsideValues.topRight | InsideValues.bottomCenter: return 'p';
        case InsideValues.topRight | InsideValues.topCenter | InsideValues.bottomCenter: return 'r';
        case InsideValues.topRight | InsideValues.topCenter | InsideValues.bottomCenter | InsideValues.bottomLeft: return 's';
        case InsideValues.topLeft | InsideValues.topRight | InsideValues.bottomLeft | InsideValues.bottomCenter | InsideValues.bottomRight: return 'sh';
        case InsideValues.topLeft | InsideValues.topRight | InsideValues.bottomCenter: return 't';
        case InsideValues.topLeft | InsideValues.topCenter | InsideValues.topRight | InsideValues.bottomCenter: return 'th';
        case InsideValues.topCenter | InsideValues.bottomLeft | InsideValues.bottomCenter | InsideValues.bottomRight: return 'th';
        case InsideValues.topLeft | InsideValues.topCenter | InsideValues.bottomRight: return 'v';
        case InsideValues.topRight | InsideValues.topLeft: return 'w';
        case InsideValues.topLeft | InsideValues.topCenter | InsideValues.bottomCenter: return 'y';
        case InsideValues.topLeft | InsideValues.topCenter | InsideValues.bottomCenter | InsideValues.bottomRight: return 'z';
        case InsideValues.topLeft | InsideValues.topCenter | InsideValues.topRight | InsideValues.bottomLeft | InsideValues.bottomRight: return 'zh';
        default: return '';
    }
}
