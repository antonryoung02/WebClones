function FooterSection() {
  return (
    <div className="flex flex-col">
      <button
        className="bg-slate-700 hover:bg-slate-600 w-full h-12 text-white text-sm text-center"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </button>
      <div className="grid-cols-1 space-y-2 text-center lg:flex lg:flex-row gap-20 bg-slate-800 w-full py-10 lg:justify-center">
        <div className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Get to Know Us </p>
          <p className="text-sm">Careers</p>
          <p className="text-sm">Amazon Newsletter</p>
          <p className="text-sm">Accessibility</p>
          <p className="text-sm">Sustainability</p>
          <p className="text-sm">Press Center</p>
          <p className="text-sm">Investor Relations</p>
          <p className="text-sm">Amazon Devices</p>
          <p className="text-sm">Amazon Science</p>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Make Money with Us</p>
          <p className="text-sm">Sell on Amazon</p>
          <p className="text-sm">Sell apps on Amazon</p>
          <p className="text-sm">Supply to Amazon</p>
          <p className="text-sm">Protect & Build your Brand</p>
          <p className="text-sm">Become an Affiliate</p>
          <p className="text-sm">Become a Delivery Driver</p>
          <p className="text-sm">Start a Package Delivery Business</p>
          <p className="text-sm">Advertise Your Products</p>
          <p className="text-sm">Self-Publish with Us</p>
          <p className="text-sm">Become an Amazon Hub Partner</p>
          <p className="text-sm">See More Ways to Make Money</p>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Amazon Payment Products</p>
          <p className="text-sm">Amazon Visa</p>
          <p className="text-sm">Amazon Store Card</p>
          <p className="text-sm">Amazon Secured Card</p>
          <p className="text-sm">Amazon Business Card</p>
          <p className="text-sm">Shop with Points</p>
          <p className="text-sm">Credit Card Marketplace</p>
          <p className="text-sm">Reload Your Balance</p>
          <p className="text-sm">Gift Cards</p>
          <p className="text-sm">Amazon Currency Converter</p>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Let Us Help You</p>
          <p className="text-sm">Your Account</p>
          <p className="text-sm">Your Orders</p>
          <p className="text-sm">Shipping Rates & Policies</p>
          <p className="text-sm">Amazon Prime</p>
          <p className="text-sm">Returns & Replacements</p>
          <p className="text-sm">Manage Your Content and Devices</p>
          <p className="text-sm">Recalls and Product Safety Alerts</p>
          <p className="text-sm">Registry & Gift List</p>
          <p className="text-sm">Help</p>
        </div>
      </div>
      <hr className="" />
      <div className="bg-slate-800 w-full h-20"></div>

      <div className=" bg-gray-900 flex justify-center">
        <div className="bg-clear grid grid-cols-2 lg:grid-cols-7 text-white text-xs w-1/2 gap-2 py-10">
          <div className="w-24">
            <h3>Amazon Music</h3>
            <p className="text-gray-500">Stream millions of songs</p>
          </div>
          <div className="w-24">
            <h3>Amazon Ads</h3>
            <p className="text-gray-500">
              Reach customers wherever they spend their time
            </p>
          </div>
          <div className="w-24">
            <h3>6pm</h3>
            <p className="text-gray-500">Score deals on fashion brands</p>
          </div>
          <div className="w-24">
            <h3>AbeBooks</h3>
            <p className="text-gray-500">Books, art & collectibles</p>
          </div>
          <div className="w-24">
            <h3>ACX</h3>
            <p className="text-gray-500">Audiobook Publishing Made Easy</p>
          </div>
          <div className="w-24">
            <h3>Sell on Amazon</h3>
            <p className="text-gray-500">Start a Selling Account</p>
          </div>
          <div className="w-24">
            <h3>Veeqo</h3>
            <p className="text-gray-500">
              Shipping Software Inventory Management
            </p>
          </div>

          <div className="w-24">
            <h3>Amazon Business</h3>
            <p className="text-gray-500">Everything For Your Business</p>
          </div>
          <div className="w-24">
            <h3>Amazon Fresh</h3>
            <p className="text-gray-500">Groceries & More Right To Your Door</p>
          </div>
          <div className="w-24">
            <h3>AmazonGlobal</h3>
            <p className="text-gray-500">Ship Orders Internationally</p>
          </div>
          <div className="w-24">
            <h3>Home Services</h3>
            <p className="text-gray-500">
              Experienced Pros Happiness Guarantee
            </p>
          </div>
          <div className="w-24">
            <h3>Amazon Web Services</h3>
            <p className="text-gray-500">Scalable Cloud Computing Services</p>
          </div>
          <div className="w-24">
            <h3>Audible</h3>
            <p className="text-gray-500">
              Listen to Books & Original Audio Performances
            </p>
          </div>
          <div className="w-24">
            <h3>Box Office Mojo</h3>
            <p className="text-gray-500">Find Movie Box Office Data</p>
          </div>

          <div className="w-24">
            <h3>Goodreads</h3>
            <p className="text-gray-500">Book reviews & recommendations</p>
          </div>
          <div className="w-24">
            <h3>IMDb</h3>
            <p className="text-gray-500">Movies, TV & Celebrities</p>
          </div>
          <div className="w-24">
            <h3>IMDbPro</h3>
            <p className="text-gray-500">
              Get Info Entertainment Professionals Need
            </p>
          </div>
          <div className="w-24">
            <h3>Kindle Direct Publishing</h3>
            <p className="text-gray-500">
              Indie Digital & Print Publishing Made Easy
            </p>
          </div>
          <div className="w-24">
            <h3>Amazon Photos</h3>
            <p className="text-gray-500">
              Unlimited Photo Storage Free With Prime
            </p>
          </div>
          <div className="w-24">
            <h3>Prime Video Direct</h3>
            <p className="text-gray-500">Video Distribution Made Easy</p>
          </div>
          <div className="w-24">
            <h3>Shopbop</h3>
            <p className="text-gray-500">Designer Fashion Brands</p>
          </div>
          <div className="w-24">
            <h3>Amazon Resale</h3>
            <p className="text-gray-500">
              Great Deals on Quality Used Products
            </p>
          </div>
          <div className="w-24">
            <h3>Whole Foods Market</h3>
            <p className="text-gray-500">America’s Healthiest Grocery Store</p>
          </div>
          <div className="w-24">
            <h3>Woot!</h3>
            <p className="text-gray-500">Deals and Shenanigans</p>
          </div>
          <div className="w-24">
            <h3>Zappos</h3>
            <p className="text-gray-500">Shoes & Clothing</p>
          </div>
          <div className="w-24">
            <h3>Ring</h3>
            <p className="text-gray-500">Smart Home Security Systems</p>
          </div>
          <div className="w-24">
            <h3>eero WiFi</h3>
            <p className="text-gray-500">Stream 4K Video in Every Room</p>
          </div>
          <div className="w-24">
            <h3>Blink</h3>
            <p className="text-gray-500">Smart Security for Every Home</p>
          </div>
          <div className="w-24">
            <h3>Neighbors App</h3>
            <p className="text-gray-500">Real-Time Crime & Safety Alerts</p>
          </div>
          <div className="w-24">
            <h3>Amazon Subscription Boxes</h3>
            <p className="text-gray-500">
              Top subscription boxes – right to your door
            </p>
          </div>
          <div className="w-24">
            <h3>PillPack</h3>
            <p className="text-gray-500">Pharmacy Simplified</p>
          </div>
          <div className="w-24">
            <h3>Amazon Renewed</h3>
            <p className="text-gray-500">Like-new products you can trust</p>
          </div>
          <div className="w-24">
            <h3>Amazon Luna</h3>
            <p className="text-gray-500">
              Video games from the cloud, no console required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
