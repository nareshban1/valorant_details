import React from "react";
import {
  ArsenalCard,
  DamageCard,
  DamageContainer,
  DamageDataContainer,
  DamageFlex,
  DamageRange,
  DamageType,
  DamageValue,
  StatData,
  StatHeader,
  WeaponImage,
  WeaponImageContainer,
  WeaponInfo,
  WeaponName,
} from "./WeaponCard.css";

const WeaponCard = ({ weapon }) => {
  return (
    <ArsenalCard>
      <WeaponName color={"#0E1921"}>{weapon.displayName}</WeaponName>
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
          <StatData>{weapon.weaponStats?.reloadTimeSeconds}sec</StatData>
        </StatHeader>
        <DamageDataContainer>
          <StatHeader>Damage Range </StatHeader>
          <DamageContainer>
            {weapon.weaponStats?.damageRanges?.map((damageRange, index) => (
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
            ))}
          </DamageContainer>
        </DamageDataContainer>
      </WeaponInfo>
    </ArsenalCard>
  );
};

export default WeaponCard;
