class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null ) this.root = node
        else{
            let current = this.root
            while(true){
                if(current.value > value){
                    if(current.left == null){
                        current.left = node
                        return
                    }
                    current = current.left
                }else if(current.value < value){
                    if(current.right == null){
                        current.right = node
                        return
                    }
                    current = current.right
                }
            }
        }
    }

    search(value){
        if(this.root === null) return 
        let current = this.root;
        let found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        return current      
    }
}

