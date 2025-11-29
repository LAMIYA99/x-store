import { Trash2, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../Store/store";
import { decrease, increase, removeFromCart } from "../../Store/cartSlice";

export default function Checkout() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  console.log(cartItems, cartItems?.image);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-slate-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-slate-100"
                >
                  <div className="flex gap-6">
                    <div className="relative group">
                      <img
                        src={item?.image || "https://via.placeholder.com/150"}
                        alt={item.title}
                        className="w-32 h-32 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-300" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => dispatch(decrease(item.id))}
                            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => dispatch(increase(item.id))}
                            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="p-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
            <h2 className="text-lg font-medium text-slate-900">Order Summary</h2>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-slate-700">
                <span>Subtotal</span>
                <span>
                  $
                  {cartItems.reduce(
                    (total: number, item: any) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Tax</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between text-slate-900 font-medium">
                <span>Total</span>
                <span>
                  $
                  {cartItems.reduce(
                    (total: number, item: any) => total + item.price * item.quantity,
                    0
                  ) + 10}
                </span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}