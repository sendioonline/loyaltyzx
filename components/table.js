function Table() {
  return (
    <div className="relative overflow-x-auto rounded-lg shadow-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-slate-50 bg-bgMain dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Activity ID
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
            <th scope="col" className="px-6 py-3">
              Date/Time
            </th>
            <th scope="col" className="px-6 py-3">
              Channel
            </th>
            <th scope="col" className="px-6 py-3">
              OrderID
            </th>
            <th scope="col" className="px-6 py-3">
              Activity
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #5635
            </th>
            <td className="px-6 py-4">+255</td>
            <td className="px-6 py-4">11-11-2024 10:11</td>
            <td className="px-6 py-4">Woocommerce</td>
            <td className="px-6 py-4">#15635</td>
            <td className="px-6 py-4">Purchase</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #5636
            </th>
            <td className="px-6 py-4">-199</td>
            <td className="px-6 py-4">10-10-2024 11:20</td>
            <td className="px-6 py-4">POS</td>
            <td className="px-6 py-4">#5647</td>
            <td className="px-6 py-4">Redeemed</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #5635
            </th>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">11-11-2024 10:11</td>
            <td className="px-6 py-4">Table Order</td>
            <td className="px-6 py-4">#TAB68</td>
            <td className="px-6 py-4">Complete Quiz</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #5635
            </th>
            <td className="px-6 py-4">+199</td>
            <td className="px-6 py-4">11-11-2024 10:11</td>
            <td className="px-6 py-4">ReviewZX</td>
            <td className="px-6 py-4">#POS1235</td>
            <td className="px-6 py-4">Purchase</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
