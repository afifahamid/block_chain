class Father {
    constructor(name) {
    this.name = name;
    }
   
    calling() {
    console.log(`${this.name} called his child`);

    }
    }
   
    class Child extends Father {

    calling() {
    super.calling();

    console.log(`${this.name} got his answer by child `);
    }
    }
   
    let obj = new Child('Father');
    obj.calling();