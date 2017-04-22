// JavaScript

"use strict";

var isPopupShown = false;
var isKeyShown = true;
var isInfoBoxShown = true;

var maxElem = 118;

var elementNameAndGroup =
{
	1: ['Hydrogen', 'hydrogen'],
	2: ['Helium', 'noble_gases'],
	3: ['Lithium', 'alkali_metals'],
	4: ['Beryllium', 'alkali_earth_metals'],
	5: ['Boron', 'metalloids'],
	6: ['Carbon', 'nonmetals'],
	7: ['Nitrogen', 'nonmetals'],
	8: ['Oxygen', 'nonmetals'],
	9: ['Fluorine', 'halogens'],
	10: ['Neon', 'noble_gases'],
	11: ['Sodium', 'alkali_metals'],
	12: ['Magnesium', 'alkali_earth_metals'],
	13: ['Aluminum', 'poor_metals'],
	14: ['Silicon', 'metalloids'],
	15: ['Phosphorus', 'nonmetals'],
	16: ['Sulfur', 'nonmetals'],
	17: ['Chlorine', 'halogens'],
	18: ['Argon', 'noble_gases'],
	19: ['Potassium', 'alkali_metals'],
	20: ['Calcium', 'alkali_earth_metals'],
	21: ['Scandium', 'transition_metals'],
	22: ['Titanium', 'transition_metals'],
	23: ['Vanadium', 'transition_metals'],
	24: ['Chromium', 'transition_metals'],
	25: ['Manganese', 'transition_metals'],
	26: ['Iron', 'transition_metals'],
	27: ['Cobalt', 'transition_metals'],
	28: ['Nickel', 'transition_metals'],
	29: ['Copper', 'transition_metals'],
	30: ['Zinc', 'transition_metals'],
	31: ['Gallium', 'poor_metals'],
	32: ['Germanium', 'metalloids'],
	33: ['Arsenic', 'metalloids'],
	34: ['Selenium', 'nonmetals'],
	35: ['Bromine', 'halogens'],
	36: ['Krypton', 'noble_gases'],
	37: ['Rubidium', 'alkali_metals'],
	38: ['Strontium', 'alkali_earth_metals'],
	39: ['Yttrium', 'transition_metals'],
	40: ['Zirconium', 'transition_metals'],
	41: ['Niobium', 'transition_metals'],
	42: ['Molybdenum', 'transition_metals'],
	43: ['Technetium', 'transition_metals'],
	44: ['Ruthenium', 'transition_metals'],
	45: ['Rhodium', 'transition_metals'],
	46: ['Palladium', 'transition_metals'],
	47: ['Silver', 'transition_metals'],
	48: ['Cadmium', 'transition_metals'],
	49: ['Indium', 'poor_metals'],
	50: ['Tin', 'poor_metals'],
	51: ['Antimony', 'metalloids'],
	52: ['Tellurium', 'metalloids'],
	53: ['Iodine', 'halogens'],
	54: ['Xenon', 'noble_gases'],
	55: ['Cesium', 'alkali_metals'],
	56: ['Barium', 'alkali_earth_metals'],
	57: ['Lanthanum', 'rare_earth_metals'],
	58: ['Cerium', 'rare_earth_metals'],
	59: ['Praseodymium', 'rare_earth_metals'],
	60: ['Neodymium', 'rare_earth_metals'],
	61: ['Promethium', 'rare_earth_metals'],
	62: ['Samarium', 'rare_earth_metals'],
	63: ['Europium', 'rare_earth_metals'],
	64: ['Gadolinium', 'rare_earth_metals'],
	65: ['Terbium', 'rare_earth_metals'],
	66: ['Dysprosium', 'rare_earth_metals'],
	67: ['Holmium', 'rare_earth_metals'],
	68: ['Erbium', 'rare_earth_metals'],
	69: ['Thulium', 'rare_earth_metals'],
	70: ['Ytterbium', 'rare_earth_metals'],
	71: ['Lutetium', 'rare_earth_metals'],
	72: ['Hafnium', 'transition_metals'],
	73: ['Tantalum', 'transition_metals'],
	74: ['Tungsten', 'transition_metals'],
	75: ['Rhenium', 'transition_metals'],
	76: ['Osmium', 'transition_metals'],
	77: ['Iridium', 'transition_metals'],
	78: ['Platinum', 'transition_metals'],
	79: ['Gold', 'transition_metals'],
	80: ['Mercury', 'transition_metals'],
	81: ['Thallium', 'poor_metals'],
	82: ['Lead', 'poor_metals'],
	83: ['Bismuth', 'poor_metals'],
	84: ['Polonium', 'poor_metals'],
	85: ['Astatine', 'halogens'],
	86: ['Radon', 'noble_gases'],
	87: ['Francium', 'alkali_metals'],
	88: ['Radium', 'alkali_earth_metals'],
	89: ['Actinium', 'actinide_metals'],
	90: ['Thorium', 'actinide_metals'],
	91: ['Protactinium', 'actinide_metals'],
	92: ['Uranium', 'actinide_metals'],
	93: ['Neptunium', 'actinide_metals'],
	94: ['Plutonium', 'actinide_metals'],
	95: ['Americium', 'actinide_metals'],
	96: ['Curium', 'actinide_metals'],
	97: ['Berkelium', 'actinide_metals'],
	98: ['Californium', 'actinide_metals'],
	99: ['Einsteinium', 'actinide_metals'],
	100: ['Fermium', 'actinide_metals'],
	101: ['Mendelevium', 'actinide_metals'],
	102: ['Nobelium', 'actinide_metals'],
	103: ['Lawrencium', 'actinide_metals'],
	104: ['Rutherfordium', 'superheavy_elements'],
	105: ['Dubnium', 'superheavy_elements'],
	106: ['Seaborgium', 'superheavy_elements'],
	107: ['Bohrium', 'superheavy_elements'],
	108: ['Hassium', 'superheavy_elements'],
	109: ['Meitnerium', 'superheavy_elements'],
	110: ['Darmstadtium', 'superheavy_elements'],
	111: ['Roentgenium', 'superheavy_elements'],
	112: ['Copernicium', 'superheavy_elements'],
	113: ['Nihonium', 'superheavy_elements'],
	114: ['Flerovium', 'superheavy_elements'],
	115: ['Moscovium', 'superheavy_elements'],
	116: ['Livermorium', 'superheavy_elements'],
	117: ['Tennessine', 'superheavy_elements'],
	118: ['Oganesson', 'superheavy_elements']
}

var elementRowCol =
{
	1: [1, 1, 0],
    2: [1, 18, 0],
    3: [2, 1, 0],
    4: [2, 2, 0],
    5: [2, 13, 0],
    6: [2, 14, 0],
    7: [2, 15, 0],
    8: [2, 16, 0],
    9: [2, 17, 0],
    10: [2, 18, 0],
    11: [3, 1, 0],
    12: [3, 2, 0],
    13: [3, 13, 0],
    14: [3, 14, 0],
    15: [3, 15, 0],
    16: [3, 16, 0],
    17: [3, 17, 0],
    18: [3, 18, 0],
    19: [4, 1, 0],
    20: [4, 2, 0],
    21: [4, 3, 0],
    22: [4, 4, 0],
    23: [4, 5, 0],
    24: [4, 6, 0],
    25: [4, 7, 0],
    26: [4, 8, 0],
    27: [4, 9, 0],
    28: [4, 10, 0],
    29: [4, 11, 0],
    30: [4, 12, 0],
    31: [4, 13, 0],
    32: [4, 14, 0],
    33: [4, 15, 0],
    34: [4, 16, 0],
    35: [4, 17, 0],
    36: [4, 18, 0],
    37: [5, 1, 0],
    38: [5, 2, 0],
    39: [5, 3, 0],
    40: [5, 4, 0],
    41: [5, 5, 0],
    42: [5, 6, 0],
    43: [5, 7, 0],
    44: [5, 8, 0],
    45: [5, 9, 0],
    46: [5, 10, 0],
    47: [5, 11, 0],
    48: [5, 12, 0],
    49: [5, 13, 0],
    50: [5, 14, 0],
    51: [5, 15, 0],
    52: [5, 16, 0],
    53: [5, 17, 0],
    54: [5, 18, 0],
    55: [6, 1, 0],
    56: [6, 2, 0],
    57: [8, 4, 1],
    58: [8, 5, 1],
    59: [8, 6, 1],
    60: [8, 7, 1],
    61: [8, 8, 1],
    62: [8, 9, 1],
    63: [8, 10, 1],
    64: [8, 11, 1],
    65: [8, 12, 1],
    66: [8, 13, 1],
    67: [8, 14, 1],
    68: [8, 15, 1],
    69: [8, 16, 1],
    70: [8, 17, 1],
    71: [8, 18, 1],
    72: [6, 4, 0],
    73: [6, 5, 0],
    74: [6, 6, 0],
    75: [6, 7, 0],
    76: [6, 8, 0],
    77: [6, 9, 0],
    78: [6, 10, 0],
    79: [6, 11, 0],
    80: [6, 12, 0],
    81: [6, 13, 0],
    82: [6, 14, 0],
    83: [6, 15, 0],
    84: [6, 16, 0],
    85: [6, 17, 0],
    86: [6, 18, 0],
    87: [7, 1, 0],
    88: [7, 2, 0],
    89: [9, 4, 1],
	90: [9, 5, 1],
    91: [9, 6, 1],
    92: [9, 7, 1],
    93: [9, 8, 1],
    94: [9, 9, 1],
    95: [9, 10, 1],
    96: [9, 11, 1],
    97: [9, 12, 1],
    98: [9, 13, 1],
    99: [9, 14, 1],
    100: [9, 15, 1],
    101: [9, 16, 1],
    102: [9, 17, 1],
    103: [9, 18, 1],
    104: [7, 4, 0],
    105: [7, 5, 0],
    106: [7, 6, 0],
    107: [7, 7, 0],
    108: [7, 8, 0],
    109: [7, 9, 0],
    110: [7, 10, 0],
    111: [7, 11, 0],
    112: [7, 12, 0],
    113: [7, 13, 0],
    114: [7, 14, 0],
    115: [7, 15, 0],
    116: [7, 16, 0],
    117: [7, 17, 0],
    118: [7, 18, 0]
}

// Load
if (window.addEventListener) {
    window.addEventListener("load", doLoad);
    window.addEventListener("resize", doResize);
} else if (window.attachEvent) {
    window.attachEvent("onload", doLoad);
    window.attachEvent("onresize", doResize);
} else {
    window.onload = doLoad;
    window.onresize = doResize;
}

function doLoad()
{
	calcElemMap();
	showKey();
}

var resizeTimer;
function doResize()
{
	// Do resize actions only after user is done resizing
	var millisecs = 500;
	clearTimeout(resizeTimer);
    resizeTimer = setTimeout(doResizeDone, millisecs);
}

function doResizeDone()
{
	calcElemMap();
}

function calcElemMap()
{
	// Calculate elements clickable image map when image is loaded or resized
	var numElemCols = 18;
	var rectRatio = 4/3; // Element rectangle height/width
	var topMarginFactor = 0.5; // Top margin for title
	var leftMarginFactor = 0;
	var lanthanideOffsetFactor = 1/8; // Gap between main table and Lanthanide/Actinide rows
	var img = document.getElementById('elementsImg');
	var imageWidth = img.clientWidth;
	var rectWidth = imageWidth / numElemCols;
	var rectHeight = rectWidth * rectRatio;
	var map = document.getElementById('elementsMap');
	var areas = map.getElementsByTagName('area');
	var numAreas = areas.length;
	var i, elemNum;
	var rowCol, row, col, isRowOffset;
	var x1, y1, x2, y2;

	// Loop over all element rectangles
	for (i = 0; i < numAreas; i++) {
		// Get element row, column, and row offset
		elemNum = parseInt(areas[i].id);
		rowCol = elementRowCol[elemNum];
		row = rowCol[0];
		col = rowCol[1];
		isRowOffset = rowCol[2];

		// Calculate map area rectangle coordinates for one element
		x1 = (col - 1 + leftMarginFactor) * rectWidth;
		y1 = (row - 1 + topMarginFactor + (isRowOffset * lanthanideOffsetFactor)) * rectHeight;
		x2 = x1 + rectWidth;
		y2 = y1 + rectHeight;
		areas[i].coords = (x1 + ',' + y1 + ',' + x2 + ',' + y2);
    }
}

function elemNumStr(elemNum)
{
	// Given 1, return 'e001'
	return 'e' + ('000' + elemNum).slice(-3);
}

function showElem(elemNum)
{
	// Show element and group images
	hidePopup();
	var elemNumName = elemNumStr(elemNum);
	var img1 = document.getElementById('keyImg1');
	var img2 = document.getElementById('keyImg2');
	var img3 = document.getElementById('keyImg3');
	img1.src = "img/elems/" + elemNumName + ".png";
	img2.src = "img/elems/" + elemNumName + "b" + ".png";
	img3.src = "img/elem_groups/" + "group_desc_" + elementNameAndGroup[elemNum][1] + "_horiz.png";
	isKeyShown = false;
	isInfoBoxShown = false;
}

function showKey()
{
	// Show key images
	hidePopup();
	var img1 = document.getElementById('keyImg1');
	var img2 = document.getElementById('keyImg2');
	var img3 = document.getElementById('keyImg3');
	img1.src = "img/elems_key/elements_box_key.png";
	img2.src = "img/elems_key/elements_symbol_key.png";
	img3.src = "img/elems_key/elements_color_key_horiz.png";
	isKeyShown = true;
	isInfoBoxShown = false;
}

function showInfoBox()
{
	// Show info box images
	hidePopup();
	var img1 = document.getElementById('keyImg1');
	var img2 = document.getElementById('keyImg2');
	var img3 = document.getElementById('keyImg3');
	img1.src = "img/elems_key/elements_box_key.png";
	img2.src = "img/elems_key/elements_atoms_info.png";
	img3.src = "img/elems_key/elements_bonding_info_horiz.png";
	isKeyShown = false;
	isInfoBoxShown = true;
}

function showPopup(fileName, isHorizontal)
{
	hidePopup();
	var div1 = document.getElementById('popupBox1');
	var img1 = document.getElementById('popupImg1');
	if (isKeyShown || isInfoBoxShown) {
		if (isHorizontal) {
			div1.style.width = "432px"; // 432=2*216
		} else {
			div1.style.width = "324px"; // 324=2*162
		}
	} else {
		if (isHorizontal) {
			div1.style.width = "324px"; // 324=1.5*216
		} else {
			div1.style.width = "243px"; // 243=1.5*162
		}
	}
	img1.src = fileName;
	div1.style.display = "block";
	isPopupShown = true;
}

function hidePopup()
{
	if (!isPopupShown) return;
	var div1 = document.getElementById('popupBox1');
	var img1 = document.getElementById('popupImg1');
	img1.src = "";
	div1.style.display = "none";
	isPopupShown = false;
}

