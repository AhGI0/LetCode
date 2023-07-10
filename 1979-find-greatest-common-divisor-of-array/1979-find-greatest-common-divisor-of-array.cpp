class Solution {
public:
    int findGCD(vector<int>& nums) {
        int gcd = 0;
        int max= *max_element(nums.begin(),nums.end());
        int min= *min_element(nums.begin(),nums.end());
        for(int i=1;i<=min;i++)
        {
            if(min%i==0 && max%i==0 && gcd<i)
            {
                gcd=i;
            }
        }
        return gcd;
    }
};
