describe("Vector", function() {
  it("Создание объекта Vector", function() {
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

describe("Grid", function() {
  it("Создание пространства", function() {
    var grid = new Grid(4, 4);
    assert.equal(grid.width, 4);
    assert.equal(grid.height, 4);
    assert.deepEqual(grid.space, new Array(16));
  });
  
  it("Возвращает и добавляет объект в пространство", function() {
    var grid = new Grid(5, 5);
    grid.set(new Vector(2, 2), 5);
    assert.equal(grid.get(new Vector(2, 2)), 5);
  });
  
  it("Проверяет попадает ли точка с заданными координатами в координатную плоскость пространства", function() {
    var grid = new Grid(5, 5);
    assert.isTrue(grid.isInside(new Vector(2, 2)));
    assert.isNotTrue(grid.isInside(new Vector(7, 7)));
  });
});

describe("World", function() {
  it("Создание мира", function() {
    var plan = ["############################",
                "#    #    #   o           ##",
                "#              #            ",
                "         #      #####      #",
                "       ## # #          ## # ",
                "###    ##            # #    ",
                "#       ###     #     #     ",
                "        #        ####      #",
                "#     ##        o          #",
                "# o #       o          ### #",
                "#            #             #",
                "############################"];
    
    var str = "############################\n#    #    #   o           ##\n#              #            \n         #      #####      #\n       ## # #          ## # \n###    ##            # #    \n#       ###     #     #     \n        #        ####      #\n#     ##        o          #\n# o #       o          ### #\n#            #             #\n############################\n";
    
    var world = new World(plan, {"#": Wall, "o": BouncingCritter});
 
    assert.equal(world.toString(), str);
  });
});
