class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root=newNode;
            return this;
        }else{
            let current=this.root
            while(true){
                if(value>current.value){
                    if(current.right===null){
                        current.right= newNode
                        return this;
                    }
                    current=current.right;
                }else{
                    if(current.left===null){
                        current.left = newNode;
                       return this;
                    }
                    current=current.left;
                }
            }
        }
    }

    printPreOrder(){
        (function traverse(node){
            if(node!==null){
                console.log(node.value);
                traverse(node.left)
                traverse(node.right)
            }
        })(this.root)
    }

    printInOrder(){
        (function traverse(node){
            if(node!==null){
                traverse(node.left);
                traverse(node.right);
                console.log(node.value);
            }
        })(this.root)
    }

    postOrder(){
        (function traverse(node){
            if(node!==null){
                traverse(node.left);
                console.log(node.value);
                traverse(node.right)
            }
        })(this.root)
    }

    
}

const tree = new BinarySearchTree()
tree.insert(10);
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.postOrder()



