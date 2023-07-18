class Triangle {
    constructor(color, textColor, text) {
        this.color = (color || "green");
        this.textColor = (textColor || "white");
        this.text = (text || "SVG");
    }
    setColor(setColor) {
        this.color = setColor;
    }
    setText(setText) {
        this.text = setText;
    }
    setTextColor(setTextColor) {
        this.textColor = setTextColor;
    }
    render() {
        return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<polygon points="0 50, 150 200, 300 50" style="fill:${this.color};stroke:${this.color};stroke-width:1" />

<text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    }
}
module.exports = Triangle;