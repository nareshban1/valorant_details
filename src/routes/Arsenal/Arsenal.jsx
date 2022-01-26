import React from "react";
import { useState } from "react";
import ArsenalSelect from "../../components/ArsenalSelect/ArsenalSelect";
import {
  ArsenalCard,
  ArsenalContentContainer,
  ArsenalContentHeader,
  ArsenalGrid,
  ArsenalPageContainer,
  DamageCard,
  DamageContainer,
  DamageDataContainer,
  DamageFlex,
  DamageRange,
  DamageType,
  DamageValue,
  HeaderFlex,
  StatData,
  StatHeader,
  WeaponImage,
  WeaponImageContainer,
  WeaponInfo,
  WeaponName,
} from "./Arsenal.css";
import { useApi } from "../../api/useApi";
import { useEffect } from "react";

const Arsenal = () => {
  const [type, setType] = useState("");
  const [filtered, setFiltered] = useState([]);
  const weapons = useApi("weapons");

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
                <ArsenalCard key={weapon.uuid}>
                  <WeaponName color={"#0E1921"}>
                    {weapon.displayName}
                  </WeaponName>
                  <WeaponImageContainer>
                    <WeaponImage src={weapon.displayIcon} />
                  </WeaponImageContainer>
                  <WeaponInfo>
                    <WeaponName>{weapon.displayName}</WeaponName>
                    <StatHeader>
                      Fire Rate:
                      <StatData> {weapon.weaponStats?.fireRate}</StatData>
                    </StatHeader>
                    <StatHeader>
                      Magazine Size:
                      <StatData> {weapon.weaponStats?.magazineSize}</StatData>
                    </StatHeader>
                    <StatHeader>
                      Reload Time:
                      <StatData>
                        {weapon.weaponStats?.reloadTimeSeconds}sec
                      </StatData>
                    </StatHeader>
                    <DamageDataContainer>
                      <StatHeader>Damage Range </StatHeader>
                      <DamageContainer>
                        {weapon.weaponStats?.damageRanges?.map(
                          (damageRange, index) => (
                            <DamageCard key={index}>
                              <DamageRange>
                                {damageRange.rangeStartMeters} to&nbsp;
                                {damageRange.rangeEndMeters} m
                              </DamageRange>
                              <DamageFlex>
                                <DamageType>
                                  Head
                                  <DamageValue>
                                    {damageRange.headDamage.toFixed(2)}
                                  </DamageValue>
                                </DamageType>
                                <DamageType>
                                  Body
                                  <DamageValue>
                                    {damageRange.bodyDamage.toFixed(2)}
                                  </DamageValue>
                                </DamageType>
                                <DamageType>
                                  Legs
                                  <DamageValue>
                                    {damageRange.legDamage.toFixed(2)}
                                  </DamageValue>
                                </DamageType>
                              </DamageFlex>
                            </DamageCard>
                          )
                        )}
                      </DamageContainer>
                    </DamageDataContainer>
                  </WeaponInfo>
                </ArsenalCard>
              ))}
            </ArsenalGrid>
          )}
        </>
      </ArsenalContentContainer>
    </ArsenalPageContainer>
  );
};

export default Arsenal;
