const {MainService} = require('mock-lib-1');

const otherFuntion = async () => {
    console.log(await MainService.post());
}

otherFuntion();



// console.log("Hello");