function callBack(orderId) {
    console.log(`Order #${orderId} is completed`);
}

class OrderManager {
    constructor() {
        this.activeOrders = new Map();
        this.completedOrders = new Set();
    }

    processOrder(orderId, customerName, callback) {
        this.activeOrders.set(orderId, customerName);
        console.log(`New order received: #${orderId} from ${customerName}`);

        setTimeout(() => {
            this.activeOrders.delete(orderId);

            this.completedOrders.add(customerName);

            callback(orderId);

            this.printStatus();
        }, 3000);
    }

    printStatus() {
        console.log("Active Orders:");
        for (const [orderId, customerName] of this.activeOrders) {
            console.log(`Order #${orderId}: ${customerName}`);
        }

        console.log("Completed Orders:");
        for (const customerName of this.completedOrders) {
            console.log(customerName);
        }
    }
}

const manager = new OrderManager();

manager.processOrder(101, "Alice", callBack);
manager.processOrder(102, "Bob", callBack);
manager.processOrder(103, "Charlie", callBack);
