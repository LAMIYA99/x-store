import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  name?: string | null;
  loading?: boolean;
  error?: any;
  houseId?: string | number;
};

const DetailSection = ({ name, houseId }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [reservedDates, setReservedDates] = useState<
    { from: Date; to: Date }[]
  >([]);

  useEffect(() => {
    if (houseId) {
      const storedReservations = localStorage.getItem(
        `reservations_${houseId}`
      );
      if (storedReservations) {
        const parsed = JSON.parse(storedReservations);
        setReservedDates(
          parsed.map((r: any) => ({
            from: new Date(r.from),
            to: new Date(r.to),
          }))
        );
      }
    }
  }, [houseId]);

  const isDateReserved = (date: Date) => {
    return reservedDates.some((res) => date >= res.from && date <= res.to);
  };

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date");
      return;
    }

    const currentDate = new Date(checkIn);
    while (currentDate <= checkOut) {
      if (isDateReserved(currentDate)) {
        alert("Some dates are already reserved");
        return;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const newReservation = {
      from: checkIn.toISOString(),
      to: checkOut.toISOString(),
    };
    const storedReservations = localStorage.getItem(`reservations_${houseId}`);
    const existing = storedReservations ? JSON.parse(storedReservations) : [];
    existing.push(newReservation);
    localStorage.setItem(`reservations_${houseId}`, JSON.stringify(existing));

    setReservedDates((prev) => [...prev, { from: checkIn, to: checkOut }]);
    alert("Booking successful!");
    setCheckIn(null);
    setCheckOut(null);
    setShowModal(false);
  };
  return (
    <section>
      <div className="w-full max-h-[260px] overflow-hidden transform -translate-y-[70px] z-0">
        <img
          className="w-full h-[260px] object-cover "
          src="https://cdn.prod.website-files.com/68c0e3e4af3be748783bb100/68c0edb4f20b8cd1ed5eedc8_6896bc0f3c522ce38b705edb_Serene%2520Sunlit%2520Interior.png"
          alt=""
        />
      </div>

      <div className="flex justify-center bg-[#f5f5f5] py-12 px-4 ">
        <div className="bg-white w-full max-w-[800px] rounded-2xl shadow-lg p-8 border border-gray-100 -translate-y-[180px]">
          <div className="flex items-center gap-2 text-gray-600 cursor-pointer mb-6">
            <span className="text-xl">←</span>
            <span>Back To Home</span>
          </div>

          <h1 className="text-5xl font-normal text-gray-800 tracking-tight">
            {name ?? "Monochrome Mood"}
          </h1>
          <p className="text-gray-500 mt-2 text-[15px]">
            Black-and-white tones with bold emotion.
          </p>

          <div className="flex items-center gap-6 mt-5 text-gray-600 text-[15px]">
            <div className="flex items-center gap-2">
              <span>🛁</span>
              <span>4 Bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🛏️</span>
              <span>3 Bedroom</span>
            </div>
            <div className="ml-auto text-lg font-semibold text-gray-800">
              $ 5000.00
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="https://cdn.prod.website-files.com/68c0e3e4af3be748783bb100/68c0edb44ff0185640e79b4e_6896bc20ea3c50c9cc704eba_Modern%2520Airy%2520Living%2520Room%2520with%2520Indoor%2520Greenery.png"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img
              src="https://cdn.prod.website-files.com/68c0e3e4af3be748783bb100/68c0edb44ff0185640e79b4e_6896bc20ea3c50c9cc704eba_Modern%2520Airy%2520Living%2520Room%2520with%2520Indoor%2520Greenery.png"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img
              src="https://cdn.prod.website-files.com/68c0e3e4af3be748783bb100/68c0edb44ff0185640e79b4e_6896bc20ea3c50c9cc704eba_Modern%2520Airy%2520Living%2520Room%2520with%2520Indoor%2520Greenery.png"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img
              src="https://cdn.prod.website-files.com/68c0e3e4af3be748783bb100/68c0edb44ff0185640e79b4e_6896bc20ea3c50c9cc704eba_Modern%2520Airy%2520Living%2520Room%2520with%2520Indoor%2520Greenery.png"
              className="rounded-2xl w-full h-64 object-cover"
            />
          </div>

          <div className="mt-10 text-gray-700 leading-relaxed text-[16px]  ">
            <p>
              The villa is a secluded sanctuary where timeless elegance meets
              modern luxury.
            </p>
            <p className="mt-4">
              Spanning 7,000 sq. ft., this six-bedroom, six-and-a-half-bathroom
              masterpiece offers an exceptional living experience for those who
              appreciate space, comfort, and sophistication.
            </p>
            <p className="mt-4">
              Designed for both grand entertaining and intimate moments, the
              home features expansive living areas, a state-of-the-art gourmet
              kitchen, and a magnificent dining room.
            </p>
            <p className="mt-4">
              The master suite is a private oasis, complete with a spa-inspired
              ensuite and a spacious walk-in closet. Outside, a shimmering
              infinity pool, lush gardens, and an inviting terrace create the
              perfect setting for relaxation or entertainment.
            </p>
            <p className="mt-4">
              The master suite is a private oasis, complete with a spa-inspired
              ensuite and a spacious walk-in closet. Outside, a shimmering
              infinity pool, lush gardens, and an inviting terrace create the
              perfect setting for relaxation or entertainment.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-900 text-white px-6 mt-10 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Book Now
          </button>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0   flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Select Dates</h2>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Check-in
                  </label>
                  <DatePicker
                    selected={checkIn}
                    onChange={(date) => setCheckIn(date)}
                    filterDate={(date) =>
                      !isDateReserved(date) && date >= new Date()
                    }
                    placeholderText="Select check-in date"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Check-out
                  </label>
                  <DatePicker
                    selected={checkOut}
                    onChange={(date) => setCheckOut(date)}
                    filterDate={(date) =>
                      !isDateReserved(date) &&
                      (checkIn ? date > checkIn : date > new Date())
                    }
                    placeholderText="Select check-out date"
                    className="w-full px-3 py-2 border rounded-lg"
                    minDate={checkIn || new Date()}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleBooking}
                    className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      setCheckIn(null);
                      setCheckOut(null);
                    }}
                    className="flex-1 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
