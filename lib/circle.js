class Circle {
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

<circle cx="100" cy="100" r="100" fill="${this.color}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    }
}
module.exports = Circle;