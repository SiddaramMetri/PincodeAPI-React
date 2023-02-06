import { useState, useEffect } from "react";

function App() {
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const fetchDate = () => {
    if (pincode.length === 6) {
      fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((data) => data.json())
        .then((data) => {
          if (data[0].Status === "Success") {
            setCity(data[0].PostOffice[0].Name);
            setDistrict(data[0].PostOffice[0].District);
            setState(data[0].PostOffice[0].State);
          } else {
            alert("No Data Found");
          }
        });
    } else {
      setCity("");
      setDistrict("");
      setState("");
    }
  };

  useEffect(fetchDate, [pincode]);

  return (
    <div className="flex flex-col w-[500px] m-auto mt-10 items-center justify-center gap-4">
      <h5>Enter Your Pincode</h5>
      <input
        type="number"
        value={pincode}
        onChange={(e) => {
          setPincode(e.target.value);
        }}
        className="p-2 border-2 rounded shadow-md"
        placeholder="Pincode"
      />
      <div className="flex gap-4">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className="p-2 border-2 rounded shadow-md"
          placeholder="City"
        />

        <input
          value={district}
          onChange={(e) => {
            setDistrict(e.target.value);
          }}
          className="p-2 border-2 rounded shadow-md"
          placeholder="District"
        />
        <input
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
          className="p-2 border-2 rounded shadow-md"
          placeholder="Sstate"
        />
      </div>
    </div>
  );
}

export default App;
