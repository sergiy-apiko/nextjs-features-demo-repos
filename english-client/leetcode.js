var maxProfit = function(prices) {
    const maxProfix=0    
 
    for(let i=0; i < prices.length; i++){
        console.log(i)
        const profits=[]

        const curr=prices[i]
         for(let j=i+1; j<prices.length; j++){
            profits.push(prices[j]-curr)
        }
        console.log(profits)

     }
   

 

    return maxProfit
};

maxProfit([7,1,5,3,6,4])

 
 