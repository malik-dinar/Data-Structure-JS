class Graph{adjecencyList
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjecencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].push(vertex2);
        this.adjecencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1] = this.adjecencyList[vertex1].filter(vertex=> vertex !==vertex2 )
        this.adjecencyList[vertex2] = this.adjecencyList[vertex2].filter(vertex=> vertex !==vertex2 )
    }
}

const g = new Graph()
g.addVertex('tokyo');
g.addVertex('ireland');
g.addVertex('kochi');
g.addEdge('tokyo','kochi');
g.addEdge('tokyo','ireland');
g.removeEdge('tokyo','ireland')
console.log(g.adjecencyList);