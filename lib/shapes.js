class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  setTextColor(chooseTextColor) {
    this.textColor = chooseTextColor;
  }

  setShapeColor(chooseShapeColor) {
    this.shapeColor = chooseShapeColor;
  }

  setTextType(chooseText) {
    this.text = chooseText;
  }
}

// makes shape class the parent class
class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" /> <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150,20 250,180 50, 180" fill="${this.shapeColor}" /> <text x="150" y="155" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

module.exports = { Circle, Square, Triangle };
