import { useState } from "react";

function Zone(props) {
  const options = [
    { label: "Select zone", value: "default" },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "11", value: 11 },
    { label: "12", value: 12 },
  ];

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    props.zoneStateFunc(e.target.value);
  };

  return (
    <div>
      Zone:
      <select value={value} onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>You have selected Zone {value}!</p>
    </div>
  );
};

export default Zone;
