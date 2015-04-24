//Another cell
var TextCell = function(text) {
  this.text = text.split("\n");
}

var StretchCell = function(inner, width, height){
  this.inner = inner;
  this.width = width;
  this.height = height;
  this.minWidth = function(){
    return width+2;
  };
  this.minHeight = function(){
    return height;
  };
  this.draw = function(width,height){
    var space = "    "
    return [inner.text.toString(), space];
  };
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
