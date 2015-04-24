//A vector type

var Vector = function(x,y) {
  this.x = x;
  this.y = y;
}

Object.defineProperty(Object.prototype, "plus",
                      {enumerable: false, value: function(vector){
    				    return new Vector(this.x + vector.x, this.y + vector.y);
                      }
                      });
Object.defineProperty(Object.prototype, "minus",
                      {enumerable: false, value: function(vector){
    				    return new Vector(this.x - vector.x, this.y - vector.y);
                      }
                      });
Object.defineProperty(Vector.prototype,
                      "length", {
                        get: function() {
                          return Math.sqrt(this.x*this.x + this.y*this.y);
                        }
                      });

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
