
class Stack<T> {
    private items: T[] = []


    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | undefined {

        if (this.isEmpty()) {
            return undefined
        }
        else {

            return this.items.pop();
        }

    }

    peek(): T | undefined {

        return this.items[this.items.length - 1];

    }

    isEmpty(): boolean {
        return this.items.length === 0
    }

    size(): number {
        return this.items.length
    }

    clear(): void {
        this.items = [];
    }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.pop();
console.log(stack.peek())