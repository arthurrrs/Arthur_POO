//1

class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "A fila está vazia";
      }
      return this.queue.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "A fila está vazia";
      }
      return this.queue[0];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  
    print() {
      console.log(this.queue);
    }
  }
  
 
  const ticketQueue = new Queue();
  
  ticketQueue.enqueue("Ticket 1");
  ticketQueue.enqueue("Ticket 2");
  ticketQueue.enqueue("Ticket 3");
  
  ticketQueue.print(); 
  console.log(ticketQueue.front());
  
  ticketQueue.dequeue();
  
  console.log(ticketQueue.size()); 
  ticketQueue.print();

 
  //2 

  class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      this.stack.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "A pilha está vazia";
      }
      return this.stack.pop();
    }
  
    top() {
      if (this.isEmpty()) {
        return "A pilha está vazia";
      }
      return this.stack[this.stack.length - 1];
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  
    size() {
      return this.stack.length;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  
  const actionStack = new Stack();
  
  actionStack.push("Ação 1");
  actionStack.push("Ação 2");
  actionStack.push("Ação 3");
  
  actionStack.print();
  
  console.log(actionStack.top()); 
  
  actionStack.pop();
  
  console.log(actionStack.size()); 
  
  actionStack.print(); 