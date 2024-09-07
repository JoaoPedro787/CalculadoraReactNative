import React, { useState } from "react";
import { View, Text } from "react-native";

// Style
import Styles from "./style";

// Class
import Digit from "./digitC";

export default Calculator = () => {
  const digits = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', 'X',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  const [DisplayNumbers, SetDisplayNumbers] = useState(['0']);

  const signals = ['+', '-', 'X', '/', '%', '+/-'];

  const CalcFunction = (digit) => {
    if (digit === '=') {
      const expression = DisplayNumbers.join('').replace(/X/g, '*');
      try {
        const result = eval(expression);
        SetDisplayNumbers([result.toString()]);
      } catch (error) {
        SetDisplayNumbers(['Erro']);
      }
      return;
    }

    if (digit === 'AC') {
      return SetDisplayNumbers(['0']);
    }

    if (DisplayNumbers.length === 1 && DisplayNumbers[0] === '0' && digit === '0') {
      return;
    }

    if (digit === '.') {
      const lastItem = DisplayNumbers[DisplayNumbers.length - 1];
      if (lastItem.includes('.')) {
        return;
      }
      if (DisplayNumbers.length === 0 || signals.includes(lastItem)) {
        return SetDisplayNumbers((prev) => [...prev, '0.']);
      }
    }

    if (signals.includes(DisplayNumbers[DisplayNumbers.length - 1]) && signals.includes(digit)) {
      SetDisplayNumbers((prev) => {
        const newArray = [...prev];
        newArray.pop();
        newArray.push(digit);
        return newArray;
      });
      return;
    }

    SetDisplayNumbers((prev) => {
      if (prev.length === 1 && prev[0] === '0') {
        return [digit];
      }
      return [...prev, digit];
    });
  };

  return (
    <View style={Styles.bgContainer}>
      <View style={Styles.displayContainer}>
        <Text style={Styles.displayText}>
          {DisplayNumbers.join('')}
        </Text>
      </View>

      <View style={Styles.digitsContainer}>
        <View style={Styles.digitContainer}>
          {digits.map((el, i) => (
            <Digit
              key={i}
              digitName={el}
              onPress={CalcFunction}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
