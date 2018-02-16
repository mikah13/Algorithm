class Graph {
    constructor() {
        this.vertices = [];
        this.adjacencyList = {};
    }
    addVertex(a) {
        this.vertices.push(a);
        this.adjacencyList[a] = [];
    }
    addEdge(a, b) {
        this.adjacencyList[a].push(b);
        this.adjacencyList[b].push(a);
    }
    removeEdge(a,b){
        this.adjacencyList[a] = this.adjacencyList[a].filter(x=>x!==b);
        this.adjacencyList[b] = this.adjacencyList[b].filter(x=>x!==a);
    }
    removeVertex(a){
        this.vertices = this.vertices.filter(x=>x!==a);
        for(let el in this.adjacencyList){
            this.adjacencyList[el] = this.adjacencyList[el].filter(x=>x!==a);
        }
    }
    size(){
        return this.vertices.length;
    }
    numberOfEdges(){
        let n = 0;
        for(let el in this.adjacencyList){
            n+= this.adjacencyList[el].length;
        }
        return n/2;
    }



    depthFirstSearch(a){
        let res = [a];

        while(res.length!=this.size()){
            let pointer = res.pop();
            

        }


    }

}
