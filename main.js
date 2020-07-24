var gameArea = {
    canvas : document.createElement("canvas"),
    start : function () {
        this.canvas.width = 760;
        this.canvas.height = 920;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
}

var cube;

function startGame() {
    gameArea.start();
    gameBoard = new rectangle(400, 800, "grey", 180, 80);
    console.log("fj")
}

function rectangle(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}