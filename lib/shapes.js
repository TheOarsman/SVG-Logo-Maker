class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor;
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
