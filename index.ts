enum OutsideValues{
    none = 0,
    topLeft = 1,
    topRight = 2,
    topSide = 4,
    bottomSide = 8,
    bottomLeft = 16,
    bottomRight = 32
}

enum InsideValues{
    none = 0,
    topLeft = 1,
    topRight = 2,
    topCenter = 4,
    bottomLeft = 8,
    bottomRight = 16,
    bottomCenter = 32
}


interface Diamond{
    outside: OutsideValues
    inside: InsideValues
    vowelFirst: boolean
}

const diamond: Diamond = {
    outside: OutsideValues.none,
    inside: InsideValues.none,
    vowelFirst: false
}

function updateOutside(newVal: OutsideValues, button: HTMLButtonElement){
    diamond.outside ^= newVal;
    button.classList.toggle('selected');
    translateDiamond();
}

function updateInside(newVal: InsideValues, button: HTMLButtonElement){
    diamond.inside ^= newVal;
    button.classList.toggle('selected');
    translateDiamond();
}

function updateOrder(button: HTMLButtonElement){
    diamond.vowelFirst = !diamond.vowelFirst;
    button.classList.toggle('selected');
    translateDiamond();
}

function translateDiamond() {
    const elem = document.getElementById('result');
    if (diamond.vowelFirst) {
        elem.innerText = translateOutside() + translateInside();
    }
    else {
        elem.innerText = translateInside() + translateOutside();
    }
}

function translateOutside() : string {
    switch(diamond.outside){
        case OutsideValues.topLeft|OutsideValues.topRight|OutsideValues.topSide|OutsideValues.bottomSide: return 'a';
        case OutsideValues.topLeft|OutsideValues.topRight|OutsideValues.bottomLeft|OutsideValues.bottomRight: return 'ar';
        case OutsideValues.topLeft|OutsideValues.topSide|OutsideValues.bottomSide: return 'ah';
        case OutsideValues.topLeft: return 'ay';
        case OutsideValues.topSide|OutsideValues.bottomSide|OutsideValues.bottomLeft|OutsideValues.bottomRight: return 'eh';
        case OutsideValues.topLeft|OutsideValues.topSide|OutsideValues.bottomSide|OutsideValues.bottomLeft|OutsideValues.bottomRight: return 'ee';
        case OutsideValues.topLeft|OutsideValues.topSide|OutsideValues.bottomSide|OutsideValues.bottomRight: return 'eer';
        case OutsideValues.topLeft|OutsideValues.topRight: return 'uh';
        case OutsideValues.topSide|OutsideValues.bottomSide|OutsideValues.bottomRight: return 'air';
        case OutsideValues.bottomLeft|OutsideValues.bottomRight: return 'ih';
        case OutsideValues.topRight: return 'iy';
        case OutsideValues.topRight|OutsideValues.topSide|OutsideValues.bottomRight|OutsideValues.bottomLeft|OutsideValues.bottomSide: return 'ir';
        case OutsideValues.topLeft|OutsideValues.topRight|OutsideValues.topSide|OutsideValues.bottomRight|OutsideValues.bottomLeft|OutsideValues.bottomSide: return 'oh';
        case OutsideValues.bottomLeft: return 'oy';
        case OutsideValues.topLeft|OutsideValues.topRight|OutsideValues.topSide|OutsideValues.bottomLeft|OutsideValues.bottomSide: return 'oo';
        case OutsideValues.topSide|OutsideValues.bottomSide|OutsideValues.bottomLeft: return 'oh';
        case OutsideValues.bottomRight: return 'ow';
        case OutsideValues.topLeft|OutsideValues.topRight|OutsideValues.topSide|OutsideValues.bottomRight|OutsideValues.bottomSide: return 'ore';
        default: return '';
    }
}


function translateInside() : string {
    switch(diamond.inside){
        case InsideValues.topCenter|InsideValues.bottomRight: return 'b';
        case InsideValues.topLeft|InsideValues.bottomCenter: return 'ch';
        case InsideValues.topCenter|InsideValues.bottomLeft|InsideValues.bottomRight: return 'd';
        case InsideValues.topRight|InsideValues.bottomLeft|InsideValues.bottomCenter: return 'f';
        case InsideValues.topRight|InsideValues.bottomRight|InsideValues.bottomCenter: return 'g';
        case InsideValues.topCenter|InsideValues.bottomRight|InsideValues.bottomCenter: return 'h';
        case InsideValues.topCenter|InsideValues.bottomLeft: return 'j';
        case InsideValues.topCenter|InsideValues.topRight|InsideValues.bottomRight: return 'k';
        case InsideValues.topCenter|InsideValues.bottomCenter: return 'l';
        case InsideValues.bottomLeft|InsideValues.bottomRight: return 'm';
        case InsideValues.topLeft|InsideValues.bottomLeft|InsideValues.bottomRight: return 'n';
        case InsideValues.topLeft|InsideValues.topCenter|InsideValues.topRight|InsideValues.bottomLeft|InsideValues.bottomCenter|InsideValues.bottomRight: return 'ng';
        case InsideValues.topRight|InsideValues.bottomCenter: return 'p';
        case InsideValues.topRight|InsideValues.topCenter|InsideValues.bottomCenter: return 'r';
        case InsideValues.topRight|InsideValues.topCenter|InsideValues.bottomCenter|InsideValues.bottomLeft: return 's';
        case InsideValues.topLeft|InsideValues.topRight|InsideValues.bottomLeft|InsideValues.bottomCenter|InsideValues.bottomRight: return 'sh';
        case InsideValues.topLeft|InsideValues.topRight|InsideValues.bottomCenter: return 't';
        case InsideValues.topLeft|InsideValues.topCenter|InsideValues.topRight|InsideValues.bottomCenter: return 'th';
        case InsideValues.topCenter|InsideValues.bottomLeft|InsideValues.bottomCenter|InsideValues.bottomRight: return 'th';
        case InsideValues.topLeft|InsideValues.topCenter|InsideValues.bottomRight: return 'v';
        case InsideValues.topRight|InsideValues.topLeft: return 'w';
        case InsideValues.topLeft|InsideValues.topCenter|InsideValues.bottomCenter: return 'y';
        case InsideValues.topLeft|InsideValues.topCenter|InsideValues.bottomCenter|InsideValues.bottomRight: return 'z';
        case InsideValues.topLeft|InsideValues.topCenter|InsideValues.topRight|InsideValues.bottomLeft|InsideValues.bottomRight: return 'zh';
        default: return '';
    }
}
