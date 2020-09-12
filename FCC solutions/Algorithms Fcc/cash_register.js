var denom = [
  { name: "ONE HUNDRED", value: 100.0 },
  { name: "TWENTY", value: 20.0 },
  { name: "TEN", value: 10.0 },
  { name: "FIVE", value: 5.0 },
  { name: "ONE", value: 1.0 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 },
];
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  //you need to return a result object with a status key and a change key,
  //set that up at the top of the function to keep organized
  let result = {
    status: "",
    change: [],
  };
  let sumCid = 0;
  //add up all the change in the drawer to eliminate two cases the test is looking for
  //A. you dont have enough to pay back the customer what you owe
  //B. you have exactly enough
  for (let i = 0; i < cid.length; i++) {
    sumCid += cid[i][1]
  }
  console.log(sumCid, '=sumCid')

  //case A.
  if (sumCid < change) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  //case B.
  if (sumCid === change) {
    //you have exactly enough so you will give him everything you have, 
    //add it all to your change key in the result object.
    //also you will of course close out your store because your register is now empty, 
    //as youve paid him with everything that you have.
    result.status = "CLOSED"
    result.change = cid
    return result;
  }
  //this newResult array will hold all the denomination names and their totals that your paying him back, your going to put this as the value of the change key in the object that your returning
  let newResult = [];
  //this is just so that your denom object matches the order you have the things inside your drawer
  cid = cid.reverse();

  //this is the main part of the challenge, it takes care of all cases where
  //the total of everything in your drawer is not equal and not less than what you owe, as mentioned you are to use a greedy method

  //you need a for loop that runs the length of all the compartments that you have in your drawer
  for (let i = 0; i < cid.length; i++) {
    //you need a value variable that will be the amounts that you are paying back the customer of each specific denomination.
    let val = 0
    // console.log(cid[i][1], "=cid 1", cid[i][0])

    //you need a while loop that check each compartment in your register that the change you owe the customer is greater than or 
    //equal to the coin/denomination value, inside of the same while loop you will also have to check that you actually have coins/bills of that specific denomination in existence,
    //you can not pay him back with money that does not exist
    console.log(denom[i].value, "denom val")
    console.log(cid[i][0], "=cid i of zero")
    while (denom[i].value <= change && cid[i][1] > 0) {
      // console.log(cid[i][1], "=cid 1", cid[i][0])
      console.log('reached while')
      //inside of this while loop you basically need to do three things:
      //1. subtract from what you have in your possession the coin/denomination value that you are paying out
      cid[i][1] -= denom[i].value
      //2. subtract from your debt to the customer (the change you owe) the coin/denomination value
      change = change.toFixed(2)
      change -= denom[i].value
      console.log(change, "=change")

      //3. add the coin/denomination value to your value variable that your giving back in your object (representing the values of the denominations you are paying back to him)
      val += denom[i].value
    }
    //the conditions of your while loop are no longer true basically what this should mean to you is that your advancing to the next compartment in the register

    //here you need to check that your value variable has some amount, and if it does it means your paying him something 
    //add this value to the newResult array, along with the name of the denomination i.e. dollar, quarter, dime etc....
    if (val > 0) {
      // push something to the newResult array this something will be a subarray containing first the 
      //name of the denomination you are adding, and amounts that you are paying back the customer of each specific denomination.
      newResult.push([cid[i][0], val])
    }
  }
  //this means the total amount you had in your register is enough however you can not pay him back more than what you owe,
  //the test is not realistic enough to consider such a case that you can give him back more 
  //than what you owe and he would in turn again give you back the difference. it does not work that way,
  //you can ONLY return exact, else its insufficient
  //hence we need the below line:
  if (change > 0) {
    // console.log('change is greater than zero')
    console.log('change=', change)
    result.status = "INSUFFICIENT_FUNDS";
    return result
  }
  //this below means you can successfully pay him back exact change and you still have some left over for the next customer, i.e. the next transaction that might happen
  result.status = "OPEN";
  result.change = newResult;
  return result;
}
console.log(
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);


  // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  //  should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}