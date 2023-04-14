// synchronous examples -------
// console.log('I');
// console.log('eat');
// console.log('ice cream');
// console.log('with a');
// console.log('spoon');




// Asynchronous examples 



// console.log('I');
// console.log('eat');

// setTimeout(()=>{
//     console.log('ice cream')
// },4000);

// console.log('with a');
// console.log('spoon');



// callback---------
// calling a function inside an another function is called a callback function

// function one(call_two){
//     console.log("step-1 complete.please call step 2");
//     call_two();
// }

// function two(){
//     console.log("step-2");
// }

// one(two);



// example 2

// callback hell---------------


// let stocks = {
//     fruits:["strawberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//     holder:["cone","cup","stick"],
//     toppings:["chocolate","peanuts"],

// }



// let order = (fruits_name,call_production)=>{
//     setTimeout(()=>{
//         console.log(`${stocks.fruits[fruits_name]} was selected`);
//         call_production();

//     },2000)
    
// };

// let production = ()=>{
//     setTimeout(()=>{
//         console.log("production has started");

//         setTimeout(()=>{
//             console.log("The fruit has been chopped");

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//                 setTimeout(()=>{
//                     console.log("The machine was started");

//                     setTimeout(()=>{
//                         console.log(`Ice cream was placed on ${stocks.holder[0]}`);


//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} was added as toppings`);

//                             setTimeout(()=>{
//                                 console.log("serve ice cream");
//                             },2000)
//                         },3000)
//                     },2000)
//                 },1000);
//             },1000)
//         },2000)
//     },0000)
// };


// order(0,production); 


// solution for callback hell is PROMISE-----------


//  let stocks = {
//     fruits:["strawberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//     holder:["cone","cup","stick"],
//     toppings:["chocolate","peanuts"],

// }


// let is_shop_open = true;

// let order = (time , work )=>{

//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve (work())
    
//             },time)
//         }
//         else{
//             reject (console.log("our shop is closed"));
//         }
//     })


// };

// order(2000,()=>{console.log(`${stocks.fruits[0]} was selected`)})

// .then(()=>{
//     return order(0000,()=>{console.log("production has started")})
// })

// .then(()=>{
//     return order (2000,()=>{console.log("the fruit was chopped")})
// })

// .then(()=>{
//     return order(1000,()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)})
// })

// .then(()=>{
//     return order (1000,()=>{
//         console.log("start the machine")
//     })
// })

// .then(()=>{
//     return order (2000, ()=>{
//         console.log(`ice cream was placed on ${stocks.holder[0]}`)
//     })
// })

// .then(()=>{
//     return order(3000,()=>{
//         console.log(`${stocks.toppings[0]} was selected `)
//     })
// })

// .then(()=>{
//     return order(1000, ()=>{
//         console.log("ice cream was served")
//     })
// })


// .catch(()=>{
//     console.log("customer left");
// })

// // finally handler will execute if promise will be resolve or rejected
// .finally(()=>{
//     console.log("Day ended , shop is closed");
// })


// Async and Await-----------------------------


let stocks = {
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],

}


let is_shop_open = false;

function time(ms) {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject (console.log("shop is closed"));
        }
    });
}

async function kitchen (){
    try{
        await time(2000);
        console.log(`${stocks.fruits[0]} was selected`);
        await time(0000)
        console.log("start production")

        await time(2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)
        
        await time(2000)
        console.log("ice cream served")

    }
    catch(error){
        console.log("curtomer left")
    }
    finally{
        console.log("day ended, shop is closed")
    }
}

kitchen();