const Footer = () => {
  return (
    <footer className="bg-[#24262D] text-white py-12 px-8 relative z-9999999">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full  justify-between">
          <div className="">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-gray-900 text-xl font-bold">✤</span>
              </div>
              <span className="text-xl font-normal">Fazora</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Find your perfect stay by selecting destination, dates, and
              guests.
            </p>
            <p className="text-gray-500 text-sm">
              © Fazen, All rights reserved 2025
            </p>
          </div>
          <div className="flex items-center justify-end  gap-30">
            <div>
              <h3 className="text-white font-medium mb-4">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
