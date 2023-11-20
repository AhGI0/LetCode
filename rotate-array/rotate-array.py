class Solution:
    def rotate(self, nums, k) -> None:
        n = len(nums)
        k = k % n  # Ensure k is within the range of the array length

        # Use slicing to rotate the array
        nums[:] = nums[-k:] + nums[:-k]
        
