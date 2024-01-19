// Represents the RGB color array of a 2048 tile
// 2-2048 follows a gradient from lightgray (#D3D3D3) to gold (#FFD700)
class CellColor {
    constructor(value) {
        this.LIGHTGRAY_RGB = [211,211,211];
        this.GOLD_RGB = [255,215,0];
        // this.color: hexadecimal color based on value
        this.color = this._generateGradientColor(value);
    }

    getColor() { return this.color }

    // Takes in an integer value
    // Returns an [r,g,b] color array of the result based on the factor
    // (factor: the number of elements we want to create a gradient of)
    _generateGradientColor(value) {
        // 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048
        // gradient factor: Math.log2(value)/11 (11 numbers between 2-2048, inclusive)
        let colorRGB;
        if (value >= 2 && value <= 2048) {
            let factor = Math.log2(value) / 11;
            colorRGB = this.LIGHTGRAY_RGB.slice();
            for (let i = 0; i < 3; i++) {
                colorRGB[i] = Math.round(colorRGB[i] + factor  * (this.GOLD_RGB[i] - this.LIGHTGRAY_RGB[i]));
            }
        }
        // if # is greater than 2048, return blue
        else {
            colorRGB = [0,0,255]; // blue
        }
        
        return colorRGB.toString();
    }
}
