describe("Vector", function() {
  it("Создание объекта Vector", function(){
    var vector = new Vector(1, 4);
    assert.equal(vector.x, 1);
    assert.equal(vector.y, 4);
  });
  
  it("Сложение векторов", function() {
    var vector = new Vector(1, 4);
    vector = vector.plus(new Vector(1, 1))
    assert.equal(vector.x, 2);
    assert.equal(vector.y, 5);
  });
  
  it("Разность векторов", function() {
    var vector = new Vector(1, 4);
    vector = vector.minus(new Vector(1, 1));
    assert.equal(vector.x, 0);
    assert.equal(vector.y, 3);
  });
  
   it("Длина вектора", function() {
    var vector = new Vector(0, 4);
    assert.equal(vector.length, 4);
  });
});
