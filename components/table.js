import axios from "axios";
import { useEffect, useState } from "react";

function Table({ customerID }) {
  const [userTransaction, setUserTransaction] = useState(null);
  useEffect(() => {
    const fetchUserTransaction = async () => {
      try {
        const response = await axios.post(
          "https://bestloyaltysolution.com/api/CustomerPointsLogs",
          {
            customer_id: customerID,
          },
          {
            headers: {
              Authorization:
                "Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
            },
          }
        );
        setUserTransaction(response.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUserTransaction();
  }, [customerID]);
  return (
    <section className="features-area mx-auto max-w-4xl p-4 pb-20">
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
            {userTransaction?.map((item, index) => (
              <tr
                key={item.point_logs_id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #{item.point_logs_id}
                </th>
                <td className="px-6 py-4">
                  {item.action_type === "sub" ? "-" : "+"}
                  {item.used_points}
                </td>
                <td className="px-6 py-4">{item.timestamp}</td>
                <td className="px-6 py-4">{item.userfor}</td>
                <td className="px-6 py-4">#{item.POS_order_id}</td>
                <td className="px-6 py-4">{item.action_type.toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
