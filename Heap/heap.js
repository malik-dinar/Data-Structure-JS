class MaxBinaryHeap{
    constructor(){
        this.values=[]
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp()
    }

    bubbleUp(){
        index=this.values.length-1;
        element=this.values[index];
        while(index>0){
            parentIndex = Math.floor((index-1)/2);
            parentElement = this.values[parentIndex];
            if(element>parentElement){
                temp = element;
                element = parentElement;
                parentElement = temp;
            }
        }
    }
}