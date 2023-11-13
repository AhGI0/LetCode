class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        new =0
        for i in range(len(prices)- 1):
            new += max((prices[i+1]-prices[i]),0)
        return new


        