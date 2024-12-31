function GettingStarted() {
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
              <h2 className="text-xl my-3">Get bonus on signing up</h2>
              <p className="text-center">
                Just signup and earn points that you can use with the first
                order
              </p>
            </div>
          </div>
          <div className="started w-full p-2">
            <div className="started-text flex flex-col items-center">
              <span className="h-14 w-14 border text-2xl flex justify-center items-center rounded-full border-bgMain text-bgMain">
                2
              </span>
              <h2 className="text-xl my-3">Buy and earn points</h2>
              <p className="text-center">
                You can earn points anytime you buy. You can eat in shop or
                order online, you will earn points if you signin or ask serving
                staff.
              </p>
            </div>
          </div>
          <div className="started w-full p-2">
            <div className="started-text flex flex-col items-center">
              <span className="h-14 w-14 border text-2xl flex justify-center items-center rounded-full border-bgMain text-bgMain">
                3
              </span>
              <h2 className="text-xl my-3">Earn with Campaigns</h2>
              <p className="text-center">
                Follow us on our FB page for opportunity to earn more points
                with campaigns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;
