// https://www.hackerrank.com/challenges/castle-on-the-grid/problem

function minimumMoves(grid, startX, startY, goalX, goalY) {
    // Write your code here
    const n = grid.length;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const visited = Array(n).fill(0).map(() => Array(n).fill(false));

    const queue = [[startX, startY, 0]];

    while (queue.length) {
        const [x, y, steps] = queue.shift();
        if (x === goalX && y === goalY) {
            return steps;
        }

        for (let i = 0; i < 4; i++) {
            let nx = x, ny = y;

            while (true) {
                nx += dx[i];
                ny += dy[i];
                if (nx < 0 || ny < 0 || nx >= n || ny >= n || grid[nx][ny] === 'X') {
                    break;
                }
                if (!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, steps + 1]);
                }

            }
        }
    }

    return -1;
}