class Matrix{
    constructor(m) {
        this.matrix = m;
    }
    add(a) {
        if(this.checkAdd(a)){
            this.matrix = this.matrix.map((x,k)=>x.map((i,j)=>i+a[k][j]))
        }
    }
    checkAdd(a) {
        return a.length === this.matrix.length && a[0].length === this.matrix[0].length;
    }
}
