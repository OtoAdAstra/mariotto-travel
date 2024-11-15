import Select from "react-select";

export default function SelectInput() {
  const options = [
    { value: "dubai", label: "Dubai | დუბაი" },
    { value: "barcelona", label: "Barcelona | ბარსელონა" },
    { value: "rome", label: "Rome | რომი" },
  ];

  const customStyles = {
    // Style for the control (input box)
    control: (base) => ({
      ...base,
      borderRadius: "50px", // Round the corners
      height: "50px", // Set the height of the input box
      fontSize: "18px", // Set the font size
      borderColor: "#ccc", // Change border color when focused
      boxShadow: "none", // Remove the default shadow when focused
      outline: "none", // Remove the blue outline when focused\
      padding: "0 0 0 15px",
      "&:hover": {
        // Remove border on hover
        borderColor: "none", // Set border color to normal on hover
        boxShadow: "none",
      }, // Remove shadow on hover
    }),

    // Style for the selected value
    singleValue: (base) => ({
      ...base,
      fontSize: "18px",
      color: "#333",
    }),

    // Style for the menu
    menu: (base) => ({
      ...base,
      fontSize: "18px",
      backgroundColor: "#f9f9f9",
      borderRadius: "20px",
    }),

    // Style for the individual options
    option: (base, state) => ({
      ...base,
      fontSize: "18px",
      backgroundColor: state.isFocused ? "#f0f0f0" : "transparent", // Hover effect
      color: "#333",
      padding: "10px",
      borderRadius: "20px",
    }),
  };

  return <Select options={options} styles={customStyles} />;
}
