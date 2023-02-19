class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insertBST(value){
        const newNode = new Node(value)
        if(this.root== null){
            this.root=newNode;
        }else{
            let current = this.root
            while(true){
                if(value==this.root) undefined;
             if(value>this.root){
                if(current.right === null){
                    current.right = newNode
                }
                current = current.right
            }else{
                if(current.left === null){
                    current.left = newNode
                }
                current = current.left
              }
            }
        }
    }

    checkBst(){
       let current = this.root;
       let current2 = this.root;
        while(current){
            if(current.right>current.value){
                current= current.right;
            }else{
                console.log('wrong');
            }
        }
        while(current2){
            if(current2.left>current2.value){
                current2= current2.left;
            }else{
                console.log('wrong');
            }
        }
    }

    BstInorder(){
        if(this.root===null) undefined;
        let current = this.root;

        let visited=[];
        visited.push(current.value)
        while(current.right!==null){
            visited.push(current.right)
            current = current.right
        }
        current = this.root;
        while(true){
            let left;
            let right;
            temp = current;
            if(current.left!==null){
                visited.push(current.left)
                current = current.left
            }else{
                right = false;  
                current = temp;
                if(current.left!==null){
                    visited.push(current.right);
                    current = current.right;
                }else{
                    right = false;
                }
            }
            if(!left && !right) {
                break;
            }  
        }
    }
}