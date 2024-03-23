class KnightTravails {
  constructor() {
    this.chess = 8;
    this.moves = [
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2],
    ];
  }

  KnightMove(start, end) {
    const queue = [{ position: start, path: [start] }];
    const visited = new Set([`${start[0]},${start[1]}`]);

    while (queue.length) {
      const dequeue = queue.shift();
      if (dequeue.position[0] === end[0] && dequeue.position[1] === end[1]) {
        return dequeue.path;
      }
      this.moves.forEach((move) => {
        const newPostion = [
          dequeue.position[0] + move[0],
          dequeue.position[1] + move[1],
        ];
        if (
          this.moveCheck(newPostion) &&
          !visited.has(`${newPostion[0]},${newPostion[1]}`)
        ) {
          visited.add(`${newPostion[0]},${newPostion[1]}`);
          queue.push({
            position: newPostion,
            path: [...dequeue.path, newPostion],
          });
        }
      });
    }
    return "No path was found";
  }
  moveCheck([x, y]) {
    return x >= 0 && x < this.chess && y >= 0 && y < this.chess;
  }
}
