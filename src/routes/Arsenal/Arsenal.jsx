import React from "react";
import { useState } from "react";
import ArsenalSelect from "../../components/ArsenalSelect/ArsenalSelect";
import {
  ArsenalContentContainer,
  ArsenalContentHeader,
  ArsenalGrid,
  ArsenalPageContainer,
  HeaderFlex,
} from "./Arsenal.css";
import { useApi } from "../../api/useApi";
import { useEffect } from "react";
import WeaponCard from "../../components/WeaponCard/WeaponCard";

const Arsenal = () => {
  const [type, setType] = useState("");
  const [filtered, setFiltered] = useState([]);
  const weapons = useApi("https://valorant-api.com/v1/weapons");

  useEffect(() => {
    const filterWeapons = () => {
      if (type === "") {
        setFiltered(weapons.data?.data);
      } else {
        setFiltered(
          weapons.data?.data?.filter((weapon) => weapon.category === type)
        );
      }
    };
    filterWeapons();
  }, [type, weapons]);

  return (
    <ArsenalPageContainer>
      <ArsenalContentContainer>
        <HeaderFlex>
          <ArsenalContentHeader>
            Choose your <br />
            weapon
          </ArsenalContentHeader>
          <ArsenalSelect type={type} setType={setType} />
        </HeaderFlex>

        <>
          {weapons.loading ? null : (
            <ArsenalGrid>
              {filtered?.map((weapon) => (
                <WeaponCard key={weapon.uuid} weapon={weapon} />
              ))}
            </ArsenalGrid>
          )}
        </>
      </ArsenalContentContainer>
    </ArsenalPageContainer>
  );
};

export default Arsenal;
