// pages/api/info.js
import axios from "axios";
function InfoOther() {
  //   const { query } = req;
  //   console.log("body");
  //   console.log(query.title);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://sendio.online/rest-api/shop/",
    headers: {
      Authorization:
        "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
    },
  };
  axios
    .request(config)
    .then((response) => {
      let response_data = response.data.data;
      console.log(response_data);
      const results = response_data.find(
        (shop) =>
          shop.company_name.toLowerCase().replace(/\s+/g, "-") ===
          `${query.title}`
      );
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(error.response?.status || 500).json({ error: error.message });
    });
  return (
    <div>
      <h1>Data</h1>
      <h1>Data</h1>
    </div>
  );
}

export default InfoOther;
