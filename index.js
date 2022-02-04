
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {

}



/*
question 860: At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

EXAMPLE: Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

 */

/*
leamonade stand $5. each customer will only buy 1 one
customer can only pay these denominations: $5, $10, $20
how to provide correct change?
    -provide correct change per customer 
    -net transaction are customers paying $5
    -initially no change at hang
'bills'-integer array 
bills[i] is the bill ith customers pays
return true if you can provide every customer w/ the correct change 
    otherwise return false if not correct change can be provided to customer
*/