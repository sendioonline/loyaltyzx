async function GettingStarted() {
  return (
    <section className="started-area p-4 py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading text-center pb-12">
          <h2 className="text-2xl mb-2">Getting started is easy</h2>
          <p>Earn Stars and get rewarded in a few easy steps.</p>
        </div>
        <div className="all-started grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
          <div className="started w-full p-2">
            <div className="started-text flex flex-col items-center">
              <span className="h-14 w-14 border text-2xl flex justify-center items-center rounded-full border-bgMain text-bgMain">
                1
              </span>
              <h2 className="text-xl my-3">Create an account</h2>
              <p className="text-center">
                To get started, join now. You can also Join in the app to get
                access to the full range of Loyaltyzx Rewards benefits.
              </p>
            </div>
          </div>
          <div className="started w-full p-2">
            <div className="started-text flex flex-col items-center">
              <span className="h-14 w-14 border text-2xl flex justify-center items-center rounded-full border-bgMain text-bgMain">
                2
              </span>
              <h2 className="text-xl my-3">Order and pay how you’d like</h2>
              <p className="text-center">
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways. Learn how
              </p>
            </div>
          </div>
          <div className="started w-full p-2">
            <div className="started-text flex flex-col items-center">
              <span className="h-14 w-14 border text-2xl flex justify-center items-center rounded-full border-bgMain text-bgMain">
                3
              </span>
              <h2 className="text-xl my-3">Earn Stars, get Rewards</h2>
              <p className="text-center">
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;
