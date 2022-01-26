import React from "react";
import { ArsenalSelectContainer } from "./ArsenalSelect.css";
import Select from "react-select";

const ArsenalSelect = ({ type, setType }) => {
  const options = [
    { value: "", label: "All Weapons" },
    { value: "EEquippableCategory::Sidearm", label: "Sidearms" },
    { value: "EEquippableCategory::SMG", label: "Smgs" },
    { value: "EEquippableCategory::Shotgun", label: "Shotguns" },
    { value: "EEquippableCategory::Rifle", label: "Rifles" },
    { value: "EEquippableCategory::Sniper", label: "Snipers" },
    { value: "EEquippableCategory::Heavy", label: "Heavies" },
    { value: "EEquippableCategory::Melee", label: "Melee" },
  ];

  const handleSelect = (e) => {
    setType(e.value);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 60,
      minHeight: 50,
      width: 250,
      borderRadius: 0,
      boxShadow: "none",
      padding: 10,
    }),
    menuList: (base) => ({
      ...base,
      height: 200,

      "::-webkit-scrollbar": {
        width: "5px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#0E1921",
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "White" : "#0E1921",
      background: state.isSelected ? "#0E1921" : "white",
      padding: "10px 20px",
      ":hover": {
        background: "#0E1921",
        color: "White",
      },
    }),
  };
  return (
    <ArsenalSelectContainer>
      <Select
        defaultValue={options[0]}
        options={options}
        onChange={handleSelect}
        styles={customStyles}
      />
    </ArsenalSelectContainer>
  );
};

export default ArsenalSelect;
