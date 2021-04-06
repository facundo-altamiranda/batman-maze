const BOARD = [
    [false, true, false, false, false, false, false, false, false, false, false, false],
    [false, true, false, true, true, true, false, true, true, true, true, false],
    [false, true, true, true, false, true, false, true, false, true, false, false],
    [false, false, false, false, false, true, true, true, false, true, true, false],
    [false, true, true, true, true, true, false, false, false, false, true, false],
    [false, true, false, false, false, false, false, true, true, true, true, false],
    [false, true, true, true, true, true, false, true, false, false, false, false],
    [false, false, false, true, false, true, false, true, true, true, true, false],
    [false, true, true, true, false, true, false, false, false, false, false, false],
    [false, false, true, false, false, true, false, true, true, true, false, false],
    [false, true, true, true, false, true, true, true, false, true, true, true],
    [false, false, false, false, false, false, false, false, false, false, false, false],
];
const KEY_A = 65;
const KEY_ARROW_DOWN = 40;
const KEY_ARROW_LEFT = 37;
const KEY_ARROW_RIGHT = 39;
const KEY_ARROW_UP = 38;
const KEY_D = 68;
const KEY_S = 83;
const KEY_W = 87;
const WINNER_POSITION = {x: 12, y: 10};

export {
    BOARD,
    KEY_A,
    KEY_ARROW_DOWN,
    KEY_ARROW_LEFT,
    KEY_ARROW_RIGHT,
    KEY_ARROW_UP,
    KEY_D,
    KEY_S,
    KEY_W,
    WINNER_POSITION,
}