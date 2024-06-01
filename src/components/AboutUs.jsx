import React, { useState } from "react";

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="text-center mb-12 w-[40vw] mx-auto">
          <h1 className="my-4 font-bold text-black">OUR VALUES</h1>
          <h2 className="text-5xl font-bold text-gray-600">The common </h2>
          <h2 className="text-5xl font-bold text-gray-600">
            spirit characterizes us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We have a vision: to help many other people to be even more
            successful. This is what we effectively work for every day.
          </p>
          {expanded ? (
            <button
              className="mt-6 px-8 py-3 bg-black text-white rounded-md "
              onClick={toggleReadMore}
            >
              Collapse
            </button>
          ) : (
            <button
              className="mt-6 px-8 py-3 bg-black text-white rounded-md "
              onClick={toggleReadMore}
            >
              Read More
            </button>
          )}
        </div>

        {expanded && (
          <div className="bg-white w-[80vw] mx-auto text-xl p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold mb-4 mx-auto w-fit">
              About Our Ecommerce Website
            </h3>
            <div className="bg-gray-100">
              <div className="container mx-auto p-6">
                <div className="text-center mb-12 w-[40vw] mx-auto">
                  <h1 className="my-4 font-bold text-black text-3xl">
                    Welcome to KamK
                  </h1>
                  <p className="text-lg text-gray-700 mb-6">
                    Your gateway to a world of convenience and endless
                    possibilities!
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    We're passionate about making your shopping experience
                    effortless and enjoyable.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                      Shop from the Comfort of Your Home
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Browse through our extensive collection of products across
                      various categories, all from the comfort of your couch.
                    </p>
                    <p className="text-gray-600 mb-4">
                      No more crowded stores or battling traffic – simply add
                      items to your cart with a few clicks.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                      Unbeatable Selection
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We offer a diverse range of high-quality products,
                      meticulously curated to cater to your needs and
                      preferences.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Whether you're searching for the latest trends, everyday
                      essentials, or unique finds, we've got you covered.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                      Competitive Prices & Exclusive Deals
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We believe everyone deserves access to amazing products
                      without breaking the bank.
                    </p>
                    <p className="text-gray-600 mb-4">
                      We offer competitive prices, exciting deals, and flash
                      sales to ensure you get the best value for your money.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                      Seamless Transactions & Secure Payment Options
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Our checkout process is designed for ease and speed.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Choose from a variety of secure payment gateways to
                      complete your purchase with confidence.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                      Hassle-Free Delivery & Returns
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We offer a variety of convenient delivery options to
                      ensure your purchases reach you promptly.
                    </p>
                    <p className="text-gray-600 mb-4">
                      We also understand that things might not always work out,
                      so we have a hassle-free return policy to offer complete
                      peace of mind.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                      Exceptional Customer Service
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Our dedicated customer support team is always here to
                      assist you.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Reach out with any questions or concerns, and we'll be
                      happy to help.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                      Join the [Your E-commerce Website Name] Community
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Stay up-to-date on new arrivals, exclusive offers, and
                      exciting trends by subscribing to our newsletter and
                      following us on social media.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                      Experience the Difference
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We strive to be more than just an online store; we want to
                      be your trusted shopping partner.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Let us simplify your shopping journey and help you
                      discover a world of amazing products!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div class="  flex justify-center flex-wrap w-[80vw] gap-6 mx-auto my-8">
          <div class="bg-white w-[22vw] text-xl p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Open to new ways</h3>
            <p class="text-gray-600">
              We analyze circumstances, strategies, and processes to find the
              optimal solution for our customers.
            </p>
          </div>
          <div class="bg-white w-[22vw] text-xl p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Transparency</h3>
            <p class="text-gray-600">
              We communicate ideas and processes clearly and transparently.
            </p>
          </div>
          <div class="bg-white w-[22vw] text-xl p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Passion and enthusiasm</h3>
            <p class="text-gray-600">
              We all love what we do. That's our powerful engine.
            </p>
          </div>

          <div class="bg-white w-[22vw] text-xl p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Personalized Shopping</h3>
            <p class="text-gray-600">
              Experience a curated selection of products tailored just for you,
              ensuring you find exactly what you need.
            </p>
          </div>

          <div class="bg-white w-[22vw] text-xl p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Exclusive Deals</h3>
            <p class="text-gray-600">
              Unlock special discounts and offers available only to our loyal
              customers. Save more with every purchase.
            </p>
          </div>

          <div class="bg-white w-[22vw] text-xl p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">24/7 Customer Support</h3>
            <p class="text-gray-600">
              Our dedicated support team is here to assist you anytime, ensuring
              a seamless shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
