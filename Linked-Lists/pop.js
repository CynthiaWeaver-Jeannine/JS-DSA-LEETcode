class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}

	printList() {
		let temp = this.head;
		while (temp !== null) {
			console.log(temp.value);
			temp = temp.next;
		}
	}

	getHead() {
		if (this.head === null) {
			console.log("Head: null");
		} else {
			console.log("Head: " + this.head.value);
		}
	}

	getTail() {
		if (this.tail === null) {
			console.log("Tail: null");
		} else {
			console.log("Tail: " + this.tail.value);
		}
	}

	getLength() {
		console.log("Length: " + this.length);
	}

	makeEmpty() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	/// WRITE POP METHOD HERE ///
	/* look at the nodes in the list as nested objects. 
    Start at the head and iterate through the entire list until you get to the new tail node. 
    assign variables, temp and pre. pre is used to set tail = to it. temp becomes the removed node.
    move tail over to the previous item: tail.next = null, which removes the originial tail node. Edge case- no items in the linked list: return undefinde: Edge case - one item in the linked list:*/

	pop() {
		//empty linked list
		if (!this.head) return undefined;

		//two or more items in list
		let temp = this.head;
		let pre = this.head;
		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;

		//one item in list
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		//return the removed item
		return temp;
	}
}

function test() {
	let myLinkedList = new LinkedList(1);
	myLinkedList.push(2);

	// (2) Items in LL - Returns 2 Node
	if (myLinkedList.length !== 0) {
		console.log("2 items", myLinkedList.pop().value);
	} else {
		console.log("null");
	}

	// (1) Item in LL - Returns 1 Node
	if (myLinkedList.length !== 0) {
		console.log("one item", myLinkedList.pop().value);
	} else {
		console.log("null");
	}

	// (0) Items in LL - Returns null
	if (myLinkedList.length !== 0) {
		console.log(myLinkedList.pop().value);
	} else {
		console.log("zero items", "null");
	}
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/
