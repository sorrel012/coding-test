class Solution {
    public int solution(int chicken) {
        int coupon = chicken;
		int leftCoupon = 0;
		int service = 0;

		while (coupon >= 10) {
			leftCoupon = coupon % 10;
			coupon /= 10;
			service += coupon;
			coupon += leftCoupon;
		}
        
        return service;
    }
}