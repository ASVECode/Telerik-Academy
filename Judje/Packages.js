const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '6',
    '4 8',
    '5 3',
    '2 1',
    '5 1',
    '5 8',
    '3 2',
    '4',
    '5',
    '2',
    '8',
    '1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor(node) {
        this.verticies = {};
    }

    addEdge(x, y) {
        if (!this.verticies[y]) {
            this.verticies[y] = [];
        }
        if (!this.verticies[x]) {
            this.verticies[x] = [];
        }
        this.verticies[x].push(y);
    }

    dfs(vertex, visited, path) {
        visited.add(vertex);
        path.push(vertex);
        this.verticies[vertex].forEach((v) => {
            if (!visited.has(v)) {
                this.dfs(v, visited, path);
            }
        });
    }
}


const m = +gets();
const graph = new Graph(m);
for (let i = 0; i < m; i++) {
    const [x, y] = gets().split(' ').map(Number);
    graph.addEdge(x, y);
}

const k = +gets();
for (let i = 0; i < k; i++) {
    const vertex = +gets();
    const visited = new Set();
    const path = [];
    graph.dfs(vertex, visited, path);
    print(path.sort((a, b) => a - b).join(' '));
}