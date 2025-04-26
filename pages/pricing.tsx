import React from "react";

export default function PricingPage() {
  return (
    <>
      <section className="pt-24 pb-28 bg-blueGray-50 overflow-hidden">
        <div className="container px-4 mx-auto">
          <h2 className="mb-6 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight md:max-w-xl mx-auto">
            We have a plan for you.
          </h2>
          <h3 className="text-center">
            We don't like fixed rate plans that charge more than you need, only
            pay for team members that use OpenDoc.
          </h3>
          <div className="my-24 md:max-w-6xl mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/3 p-4">
                <div
                  className="flex flex-col justify-between px-9 pt-8 pb-9 h-full  bg-opacity-90 border-blueGray-100 border-2 rounded-4xl"
                  style={{ backdropFilter: "blur(46px)" }}
                >
                  <div>
                    <span className="mb-9 inline-block text-lg text-indigo-600 font-bold uppercase tracking-px leading-snug">
                      Free
                    </span>
                    <h3 className="mb-1 text-4xl dark:text-gray-300 font-bold leading-none">
                      Free
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                      No credit card required
                    </p>
                    <hr className="my-6" />
                    <p className="mb-2 dark:text-gray-300 font-medium leading-relaxed">
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                      Egestas lacus, blan dit pellentesque.
                    </p>
                    <ul className="dark:text-gray-300 mb-9  list-inside  tick-list ">
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                    </ul>
                  </div>
                  <button
                    className="py-4 dark:hover:text-black px-9 w-full font-semibold border-2 border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-50 transition ease-in-out duration-200"
                    type="button"
                  >
                    Get Started Now
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div
                  className="relative flex flex-col justify-between px-9 pt-8 pb-9 h-full bg-transparent border-2 bg-opacity-90 border-blueGray-100 rounded-4xl shadow-md  "
                  style={{ backdropFilter: "blur(46px)" }}
                >
                  <div className="relative z-10">
                    <span className="mb-9 inline-block text-lg text-indigo-600 font-bold uppercase tracking-px leading-snug">
                      Team
                    </span>
                    <h3 className="mb-1 text-4xl dark:text-gray-300 font-bold leading-none">
                      $19/mo
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                      Billed Annually
                    </p>
                    <hr className="my-6" />
                    <p className="mb-2 dark:text-gray-300 font-medium leading-relaxed">
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                      Egestas lacus, blan dit pellentesque.
                    </p>
                    <ul className="dark:text-gray-300 mb-9 list-inside  tick-list ">
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                    </ul>
                    <button
                      className="py-4 px-10 w-full   text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                      type="button"
                    >
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
              <div className={"w-full md:w-1/3 p-4"}>
                <div
                  className="flex flex-col justify-between px-9 pt-8 pb-9 h-full bg-transparent border-2 bg-opacity-90 border-blueGray-100 rounded-4xl"
                  style={{ backdropFilter: "blur(46px)" }}
                >
                  <div>
                    <span className="mb-9 inline-block text-lg text-indigo-600 font-bold uppercase tracking-px leading-snug">
                      Enterprise
                    </span>
                    <h3 className="mb-1 text-4xl dark:text-gray-300 font-bold leading-none">
                      On request
                    </h3>

                    <hr className="my-6 mt-12" />
                    <p className="mb-2 dark:text-gray-300 font-medium leading-relaxed">
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                      Egestas lacus, blan dit pellentesque.
                    </p>
                    <ul className="dark:text-gray-300 mb-9 list-inside  tick-list ">
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                    </ul>
                  </div>
                  <button
                    className="py-4 px-9 w-full dark:hover:text-black font-semibold border-2 border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-50 transition ease-in-out duration-200"
                    type="button"
                  >
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
