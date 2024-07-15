const Cart = () => {
  return (
    <div className="flex flex-wrap justify-center align-middle p-4 min-w-60 gap-4">
      <div className="border p-4 rounded-md mb-4">
        <div className="flex justify-between p-2">
          <div>
            <h2 className="font-bold">Deliver to: Gursharn Kaur, 143116</h2>
            <p className="pr-4">
              Verka Dairy, VPO Saidpur, Tehsil Baba Bakalla, Amritsar, Bhattike,
              Amritsar
            </p>
          </div>
          <button className="bg-[#FF3F6C] text-white px-4 py-1 rounded-md">
            Change Address
          </button>
        </div>

        <div className="p-2">
          <div className="flex items-center mb-2">
            <img className="max-h-5 mr-2" src="/offers.svg" alt="offers" />
            <h3 className="font-bold">Available Offers</h3>
          </div>
          <ul className="list-disc ml-6">
            <li>
              7.5% Instant Discount on up to ₹750 every spends with Myntra Kotak
              Credit Card. TCA
            </li>
          </ul>
        </div>
      </div>

      <div className="border p-4 rounded-md">
        <h2 className="font-bold mb-4">Coupons</h2>
        <div className="flex items-center mb-4">
          <img className="max-h-5 m-2" src="/coupon.svg" alt="coupon" />
          <p>Apply Coupons</p>
          <button className="bg-[#FF3F6C] text-white px-4 py-2 rounded-md ml-auto">
            Apply
          </button>
        </div>

        <h2 className="font-bold mb-4">
          Support Transformative Social Work in India
        </h2>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <p>Donate and make a difference</p>
        </div>
        <div className="flex justify-between">
          <button className="border px-4 py-2 rounded-md">₹10</button>
          <button className="border px-4 py-2 rounded-md">₹20</button>
          <button className="border px-4 py-2 rounded-md">₹50</button>
          <button className="border px-4 py-2 rounded-md">₹100</button>
        </div>

        <h2 className="font-bold mt-4">Price Details (1 Item)</h2>
        <div className="mt-2">
          <div className="flex justify-between">
            <p>Total MRP</p>
            <p>₹5,999</p>
          </div>
          <div className="flex justify-between">
            <p>Discount on MRP</p>
            <p>-₹4,200</p>
          </div>
          <div className="flex justify-between">
            <p>Coupon Discount</p>
            <p>Apply Coupon</p>
          </div>
          <div className="flex justify-between">
            <p>Platform Fee</p>
            <p>₹20</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
        </div>
        <div className="flex justify-between font-bold mt-4">
          <p>Total Amount</p>
          <p>₹1,819</p>
        </div>
        <button className="bg-[#FF3F6C] text-white px-4 py-2 rounded-md w-full mt-4">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
