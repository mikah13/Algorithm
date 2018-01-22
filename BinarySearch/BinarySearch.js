function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.insertIteratively = function(a) {
    if (!this.root) {
        this.root = new Node(a);
    } else {
        let pointer = this.root;
        let stop = true;
        while (stop) {
            if (a > pointer.value) {
                if (pointer.right) {
                    pointer = pointer.right;
                } else {
                    pointer.right = new Node(a);
                    stop = false;
                }
            } else {
                if (pointer.left) {
                    pointer = pointer.left;
                } else {
                    pointer.left = new Node(a);
                    stop = false;
                }
            }
        }
    }
    return this;
}
// 
// BinarySearchTree.prototype.insertRecursively = function(a) {
//     if (!this.root) {
//         this.root = new Node(a);
//     } else {
//         let pointer = this.root;
//         let stop = true;
//         while (stop) {
//             if (a > pointer.value) {
//                 if (pointer.right) {
//                     pointer = pointer.right;
//                 } else {
//                     pointer.right = new Node(a);
//                     stop = false;
//                 }
//             } else {
//                 if (pointer.left) {
//                     pointer = pointer.left;
//                 } else {
//                     pointer.left = new Node(a);
//                     stop = false;
//                 }
//             }
//         }
//     }
//     return this;
// }

BinarySearchTree.prototype.findIteratively = function(a) {
    let stop = true;
    let pointer = this.root;
    while (stop && pointer) {
        if (a === pointer.value) {
            stop = false;
        } else if (a > pointer.value) {
            pointer = pointer.right;
        } else if (a < pointer.value) {
            pointer = pointer.left;
        }
    }
    if (pointer) {
        return pointer;
    } else {
        return undefined;
    }
}
// BinarySearchTree.prototype.findRecursively = function(a) {
//     let stop = true;
//     let pointer = this.root;
//     while (stop && pointer) {
//         if (a === pointer.value) {
//             stop = false;
//         } else if (a > pointer.value) {
//             pointer = pointer.right;
//         } else if (a < pointer.value) {
//             pointer = pointer.left;
//         }
//     }
//     if (pointer) {
//         return pointer;
//     } else {
//         return undefined;
//     }
// }

BinarySearchTree.prototype.search = function(a, store, index, pos) {
    if (a) {
        if (index === 0 && !pos) {
            store.push(a.value)
        } else if (pos === 1 && index !== store.length - 1) {
            store.splice(index + 1, 0, a.value)
        } else if (pos === 1 && index === store.length - 1) {
            store.push(a.value);
        } else if (pos === -1 && index !== 0) {
            store.splice(index - 1, 0, a.value)
        } else if (pos === -1 && index === 0) {
            store.unshift(a.value);
        }
        if (a.right) {
            this.search(a.right, store, store.indexOf(a.value), 1);
        }
        if (a.left) {
            this.search(a.left, store, store.indexOf(a.value), -1);
        }
    }
}

BinarySearchTree.prototype.toArray = function() {
    let array = [];
    let pointer = this.root;
    if (this.root) {
        this.search(this.root, array, 0);
    }
    return array;
}
