class Direction{
    constructor(name, keyCode) {
        this.name = name;
        this.keyCode = keyCode;
    }

    static UP = new Direction("UP", "ArrowUp");
    static DOWN = new Direction("DOWN", "ArrowDown");
    static LEFT = new Direction("LEFT", "ArrowLeft");
    static RIGHT = new Direction("RIGHT", "ArrowRight");

    static getAll() {
        return [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]
    }

    getAssociatedKeycode() {
        return this.keyCode
    }

    getName() {
        return this.name;
    }
}
