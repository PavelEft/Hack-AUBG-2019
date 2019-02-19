 for (el of document.getElementsByTagName("*")) {
    var color = new RGBColor(el.style.color);
    var bgColor = new RGBColor(el.style.backgroundColor);
    var brColor = new RGBColor(el.style.borderColor);
    switchColor(color.r, color.g, color.b);
    switchColor(bgColor.r, bgColor.g, bgColor.b);
    switchColor(brColor.r, brColor.g, brColor.b);
 }

 function switchColor() {}

 function adjustOverFlow(value) {
    if (value >= 255) return 255;
    else return value;
 }

 function adjustUnderFlow(value) {
    if (value <= 0) return 0;
    else return value;
 }
 fixColorblindness();

 function fixColorblindness() {
    document.body.innerHTML += '<div class="imgContextMenu contextMenu" hidden="" style="font-family: \'Montserrat\', sans-serif;margin: 0;padding: 0;font: 300 16px;position: absolute;color: #333;box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.2);z-index: 9999999999999;"><div class="contextMenuItem contextMenuIcon fixBlindness" style="-webkit-user-select: none;cursor: default;min-width: 150px;overflow: hidden;white-space: nowrap;padding: 12px 15px;background-color: #fff;border-bottom: 1px solid #ecf0f1;"><svg style="height: 20px;position: relative;top: 4px;margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.12 113.71"><defs><style>.cls-1{fill:#1d2020;}.cls-2{fill:#5d9beb;}</style></defs><title>peaker_logo</title><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M79.27,102.42a8.64,8.64,0,1,1,8.63-8.64A8.66,8.66,0,0,1,79.27,102.42Zm0-12a3.37,3.37,0,1,0,3.36,3.36A3.37,3.37,0,0,0,79.27,90.42Z" transform="translate(-2.94 -3.14)"/><path class="cls-2" d="M80,45h0l-.17-.17Z" transform="translate(-2.94 -3.14)"/><path class="cls-2" d="M106.77,80c-.43-.4-.87-.8-1.3-1.18L106.76,80l.73.68C107.25,80.4,107,80.18,106.77,80ZM117.39,94s0,0,0,.06,0,0,0,0v0ZM150.1,5.07c-.15,1.22-.32,2.45-.5,3.67.19-1.22.35-2.44.51-3.67ZM80,45h0l1.81,1.71Zm3.81,3.69c.33.33.65.66,1,1h0Z" transform="translate(-2.94 -3.14)"/><path class="cls-2" d="M150.11,5.07c-.16,1.23-.32,2.45-.51,3.67.18-1.22.35-2.45.5-3.67h0A177.66,177.66,0,0,0,85,40.52l4.82,4.67a169.79,169.79,0,0,1,33-22.06A172,172,0,0,1,149,12.39a158.94,158.94,0,0,1-6.11,24A157.94,157.94,0,0,1,114,87.81l-.19.21-.61-.83-.33-.44c-.23-.31-.48-.62-.73-.94l-.39-.49h0c-.68-.82-1.43-1.7-2.26-2.6l-1.31-1.38-.7-.69-.73-.68-1.29-1.19a44.29,44.29,0,0,0-9.71-6.45,35.88,35.88,0,0,0-15.64-3.64,37.26,37.26,0,0,0-15.8,3.51c1.7-2.23,3.47-4.44,5.29-6.61s3.77-4.37,5.73-6.47l-4.8-4.65q-3.12,3.33-6.05,6.81A180.69,180.69,0,0,0,46,87.81C44.8,89.89,43.66,92,42.56,94.1c1.57,1.8,3.17,3.57,4.81,5.29q1.62,1.73,3.29,3.38,2.42,2.42,4.92,4.71a38.6,38.6,0,0,0,22.55,9.32c.66,0,1.33.06,2,.06s1.16,0,1.72,0c10.57-.54,19-6,24.82-11.43l1.46-1.42.25-.25c1.45-1.4,2.86-2.84,4.25-4.32,1.64-1.72,3.23-3.49,4.8-5.29,0,0,0,0,0,0s0,0,0-.06l0,.06c.15-.15.27-.31.41-.45a165.1,165.1,0,0,0,31.4-55.06,166.33,166.33,0,0,0,6.88-28.26c.37-2.38.68-4.76.94-7.17C154.73,3.75,152.42,4.38,150.11,5.07Zm-70,105.1c-7.16,0-13.9-2.59-20.06-7.66a0,0,0,0,1,0,0c-1.55-1.42-3.07-2.88-4.57-4.36a47.61,47.61,0,0,1-4.26-5.43c2.87-4.54,12.41-17.34,28.9-17.34,7.87,0,15.25,3.14,21.93,9.34a47,47,0,0,1,6.88,8C105.57,97.37,95,110.17,80.12,110.17Z" transform="translate(-2.94 -3.14)"/><path class="cls-1" d="M114,87.81l-.19.21-.61-.83-.33-.44c-.23-.31-.47-.62-.73-.94l-.39-.49h0c-.68-.82-1.43-1.7-2.26-2.6l-1.31-1.38-.7-.69c-.24-.24-.48-.46-.72-.69-.43-.4-.87-.8-1.3-1.18a44.29,44.29,0,0,0-9.71-6.45C94,70,90.22,65.49,90.16,65.46Q87.4,62.18,84.47,59q-2.25-2.45-4.58-4.79l-.41-.39q-1.87-1.89-3.81-3.69c-.16-.17-.33-.32-.5-.49h0l0-.06a170,170,0,0,0-38-26.44A172.68,172.68,0,0,0,11,12.4a159.83,159.83,0,0,0,6.11,24A158,158,0,0,0,46,87.81C44.8,89.89,43.66,92,42.56,94.1c-.14-.15-.27-.31-.4-.46A164.83,164.83,0,0,1,10.75,38.58,166.45,166.45,0,0,1,3.87,10.33q-.56-3.57-.93-7.16c2.33.59,4.65,1.22,7,1.91a179.21,179.21,0,0,1,30.26,12.1,176.39,176.39,0,0,1,38,26.14l.68.61.78.71a1.7,1.7,0,0,0,.19.19L80,45h0l1.81,1.71,1,1,1,1c.33.33.65.66,1,1h0q5.57,5.56,10.69,11.66A179.07,179.07,0,0,1,114,87.81Z" transform="translate(-2.94 -3.14)"/><path class="cls-1" d="M107.49,80.64l-.73-.68-1.29-1.19c.43.38.87.78,1.3,1.18C107,80.18,107.25,80.4,107.49,80.64Z" transform="translate(-2.94 -3.14)"/></g></svg>Use Peaker</div></div>';
    var images = document.getElementsByTagName("img");
    var count = 0;
    for (img of images) {
        count++;
        if (img.src == null || img.src == "") {
            continue;
        }
        //fixImages(img);
        $(img).bind("contextmenu", (event) => {
            event.preventDefault();
            var that = event.target;
            $(".imgContextMenu").show().css({
                top: event.pageY,
                left: event.pageX
            });
            $(".fixBlindness").click(() => {
                $(".imgContextMenu").hide();
                fixImages(that, getAverageRGB(that));
            });
        });
        console.log("opa");
        if (count > 40) break;
    }
 }
 async function fixImages(img, avgRGB) {
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');
    var width = canvas.width = img.width;
    var height = canvas.height = img.height;
    context.drawImage(img, 0, 0, width, height);
    img.parentNode.style.position = "relative";
    img.parentNode.style.width = img.width + "px";
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.zIndex = "5";
    img.style.zIndex = "6";
    img.style.opacity = "0.01";
    img.style.position = "relative";
    img.parentNode.insertBefore(canvas, img.parentNode.firstChild);
    await setTimeout(() => {
        var imgWidth = img.width || img.naturalWidth,
            imgHeight = img.height || img.naturalHeight;
        var imageData = context.getImageData(0, 0, imgWidth, imgHeight);
        var pixelArray = imageData.data;
        var length = pixelArray.length / 4; // 4 component - red, green, blue and alpha
        for (var i = 0; i < length; i++) {
            var index = 4 * i;
            var r = pixelArray[index];
            var g = pixelArray[++index];
            var b = pixelArray[++index];
            var a = pixelArray[++index];
            var redFlag = false;
            var darkFlag = false;
            if (r < 67.732 && g < 64.23 && b < 61.32) {
                pixelArray[--index] = adjustUnderFlow(pixelArray[--index] / 3.071);
                pixelArray[--index] = adjustUnderFlow(pixelArray[--index] / 2.981);
                pixelArray[--index] = adjustUnderFlow(pixelArray[--index] / 3.067);
                darkFlag != darkFlag;
            }
            if (darkFlag) index += 6;
            if (r >= 130 && g < r * 0.7 && b < r * 0.6) {
                pixelArray[--index] = 0;
                pixelArray[--index] = adjustOverFlow(pixelArray[--index] * 0.168 + 121.28); //green
                pixelArray[--index] = adjustOverFlow(255 - pixelArray[--index] * 0.168); //red
                redFlag != redFlag;
            }
            if (redFlag) index += 5;
            if (g > 130 && r < 200 && b < 240) {
                pixelArray[--index] = adjustUnderFlow(pixelArray[index] / 1.207);
                pixelArray[--index] = adjustUnderFlow(pixelArray[index] / 1.311);
                pixelArray[--index] = adjustUnderFlow(pixelArray[index] / 1.203);
            }
        }
        context.putImageData(imageData, 0, 0);
    }, 100);
 }

 function getAverageRGB(imgEl) {
    var blockSize = 5,
        defaultRGB = {
            r: 0,
            g: 0,
            b: 0
        },
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {
            r: 0,
            g: 0,
            b: 0
        },
        count = 0;
    if (!context) {
        return defaultRGB;
    }
    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    context.drawImage(imgEl, 0, 0);
    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        return defaultRGB;
    }
    length = data.data.length;
    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);
    return rgb;
 }

 function RGBColor(color_string) {
    this.ok = false;
    if (color_string.charAt(0) == '#') {
        color_string = color_string.substr(1, 6);
    }
    color_string = color_string.replace(/ /g, '');
    color_string = color_string.toLowerCase();
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    for (var key in simple_colors) {
        if (color_string == key) {
            color_string = simple_colors[key];
        }
    }
    var color_defs = [{
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
        process: (bits) => {
            return [
                parseInt(bits[1]),
                parseInt(bits[2]),
                parseInt(bits[3])
            ];
        }
    }, {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        example: ['#00ff00', '336699'],
        process: (bits) => {
            return [
                parseInt(bits[1], 16),
                parseInt(bits[2], 16),
                parseInt(bits[3], 16)
            ];
        }
    }, {
        re: /^(\w{1})(\w{1})(\w{1})$/,
        example: ['#fb0', 'f0f'],
        process: (bits) => {
            return [
                parseInt(bits[1] + bits[1], 16),
                parseInt(bits[2] + bits[2], 16),
                parseInt(bits[3] + bits[3], 16)
            ];
        }
    }];
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            this.ok = true;
        }
    }
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);
    this.toRGB = () => {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    }
    this.toHex = () => {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    }
    this.getHelpXML = () => {
        var examples = new Array();
        for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;
            for (var j = 0; j < example.length; j++) {
                examples[examples.length] = example[j];
            }
        }
        for (var sc in simple_colors) {
            examples[examples.length] = sc;
        }
        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for (var i = 0; i < examples.length; i++) {
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText = 'margin: 3px; ' + 'border: 1px solid black; ' + 'background:' + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);
            } catch (e) {}
        }
        return xml;
    }
 }