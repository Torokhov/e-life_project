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
  describe("View", function() {
    it("Осмотр мира", function() {
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
    
      var world = new World(plan, {"#": Wall, "o": BouncingCritter});
      var view = new View(world, new Vector(15, 1));
      assert.isTrue(view instanceof View);
      assert.equal(view.look("n"), "#");
    });
    
    it("Поиск всех направлений к объектам заданного типа", function() {
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
    
      var world = new World(plan, {"#": Wall, "o": BouncingCritter});
      var view = new View(world, new Vector(15, 1));
      assert.equal(view.findAll("#").length, 4);
    });
    
    it("Поиск одного случайного направления к объекту заданного типа", function() {
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
    
      var world = new World(plan, {"#": Wall, "o": BouncingCritter});
      var view = new View(world, new Vector(12, 9));
      assert.equal(view.find("r"), null);
      assert.equal(view.find("#"), "se");
    });
  });
  
  describe("Wall", function() {
    it("Создание препятствия", function() {
      var wall = new Wall();
      assert.isTrue(wall instanceof Wall);
    });
  });
  
  describe("BouncingCritter", function() {
    it("Создание существа", function() {
      var critter = new BouncingCritter();
      assert.isTrue(critter instanceof BouncingCritter);
    });
    
    it("Действие существа", function() {
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
    
      var world = new World(plan, {"#": Wall, "o": BouncingCritter});
      var view = new View(world, new Vector(12, 9));
      var critter = new BouncingCritter();
      assert.equal(critter.act(view).type, "move");
    });
  });
  
  describe("WallFollower", function() {
    it("Вычисление направления", function() {
      assert.equal(dirPlus("s", -2), "e");
    });
    
    it("Создание существа", function() {
      var wallFollower = new WallFollower();
      assert.equal(wallFollower.dir, "s");
    })
    
    it("Передвижение существа", function() {
      var world = new World(
        ["############",
         "#    #   ###",
         "#    ~  #~##",
         "#   #  #####",
         "# ## o## # #",
         "#       #   ",
         "############"],
        {"#": Wall,
         "~": WallFollower,
         "o": BouncingCritter});
      
      var view = new View(world, new Vector(9, 2));
      var wallFollower = new WallFollower();
      assert.equal(wallFollower.act(view).direction, "nw");
    });
  });
  
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
    
    var world = new World(plan, {"#": Wall, "o": BouncingCritter});
 
    assert.isTrue(world instanceof World);
  });
  
  it("Проверка направления", function() {
    var plan = ["############################",
                "#    #    #   o           ##",
                "#              #            ",
                "         #      #####      #",
                "       ## # #          ## # ",
                "###    ##            # #    ",
                "#       ###     #     #     ",
                "        #        ####      #",
                "#     ##   # #  o          #",
                "# o #      #o#         ### #",
                "#          ###             #",
                "############################"];
    
    var world = new World(plan, {"#": Wall, "o": BouncingCritter});
    var view = new View(world, new Vector(12, 9));
    var critter = new BouncingCritter();
    assert.deepEqual(world.checkDestination(critter.act(view), view.vector), new Vector(12, 8));
  });
  
  it("Передвижение существа", function() {
    var plan = ["############################",
                "#    #    #   o           ##",
                "#              #            ",
                "         #      #####      #",
                "       ## # #          ## # ",
                "###    ##            # #    ",
                "#       ###     #     #     ",
                "        #        ####      #",
                "#     ##   # #  o          #",
                "# o #      #o#         ### #",
                "#          ###             #",
                "############################"];
    
    var world = new World(plan, {"#": Wall, "o": BouncingCritter});
    var view = new View(world, new Vector(12, 9));
    var critter = new BouncingCritter();
    critter.originChar = "o";
    world.letAct(critter, view.vector);
    assert.equal(view.look("n"), "o");
    assert.equal(new View(world, new Vector(12, 8)).look("s"), " ");
  });
  
  it("Передвижение всех существ за один ход", function() {
    var plan = ["##o##",
                "## ##",
                "o   o",
                "## ##",
                "##o##"];
    
    var resultWorld = "## ##\n##o##\n o o \n##o##\n## ##\n";
    
    var world = new World(plan, {"#": Wall, "o": BouncingCritter});
    world.turn();
    assert.equal(world.toString(), resultWorld);
  });
  
  it("Представление мира в виде строки", function() {
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

describe("LifelikeWorld", function() {
  it("Создание мира", function() {
    var world = new LifelikeWorld(
      ["#####",
       "#o***",
       "#####"],
      {"#": Wall,
       "O": PlantEater,
       "*": Plant});
    
    assert.equal(world.toString(), "#####\n#o***\n#####");
  });
});










