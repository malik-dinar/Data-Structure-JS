class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

class Linkedlist{
    constructor(){
        this.head = null;
        this.size =0;
    }
    isEmpty=()=> this.size == 0;

    push=(value)=>{
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.size++;
        }else{
            let prev = this.head;
            while(prev.next!== null){
                prev = prev.next;
                this.size++;
            }
            prev.next = node;
        }
    }
    peek=()=>{
        this.head
    } 

    pop=()=>{
        let item=this.head
        this.head.next = this.head;
        return item
    }


    print=()=>{
        let prev= this.head;
        while(prev.next!==null){
            console.log(prev);
            prev=prev.next;
        }
    }
}

const list = new Linkedlist();
list.push(5);
list.push(34)
list.print();
list.pop()
list.print()


