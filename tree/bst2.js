class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode=new Node(value);
        let current=this.root
        if(current===null){
            current=newNode;
        }else{
            while(true){
                if(value<current.value){
                    if(current.left===null){
                        current.left=newNode;
                        return this;
                    }
                    current=current.left;
                }else if(value>current.value){
                    if(current.right===null){
                        current.right=newNode;
                        return this;
                    }
                    current=current.right;
                }
            }
        }
    }

    search(value){
        let current = this.root; 
        let found=false;
        if(this.root===null) return undefined;
        while(current && !found){
            if(current.value>value){
                current=current.left;
            }else if(current.value<value){
                current = current.right;
            }else{
                found = true;
            }
        }

        if(!found) return false;
        return current;
    }
}

const tree=new BinarySearchTree();
tree.insert(40);
console.log(tree.search(40));