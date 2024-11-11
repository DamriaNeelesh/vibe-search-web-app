"use client";
import { HStack, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Lottie from "lottie-react";
import fashionDiceRoll from "./fashionDiceRoll/fashionDiceRoll";
import Dice from "../../svg/dice.svg";
import diceAnimation from "../../gif/diceAnimation.json";
import { useState } from "react";
import styles from "./FashionDiceRoll.module.css";
export default function FashionDiceRoll() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.FashionDiceRoll}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        fashionDiceRoll();
      }}
    >
      {isHovered ? (
        <Lottie
          animationData={diceAnimation}
          style={{ width: "34px", height: "34px" }}
          width="34"
          height="34"
          loop={true}
        />
      ) : (
        <Image className={styles.FashionDiceRoll__Dice} src={Dice} alt="Hushh Fashion Dice" />
      )}
      <Text
        color="#222222"
        fontWeight="700"
        lineHeight="22px"
        fontSize={{ md: "1rem", base: "0.65rem" }}
      >
        Fashion Dice Roll
      </Text>
    </div>
  );
}
