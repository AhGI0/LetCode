class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        biggest = max(candies)
        status=""
        new = []
        for i in candies:
            status = i+ extraCandies >= biggest
            new.append(status)
        return new
        