import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'

enum Strategems {
    EAGLE_AIRSTRIKE = "EAGLE_AIRSTRIKE",
    STALWART = "STALWART",
}

const MainScreen = () => {
    return (
        <React.Fragment>
            <Text>Icons</Text>
        </React.Fragment>
    )
}

function generateRandomStrategem(enumList: any) {
    const values = Object.keys(enumList);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumList[enumKey];
  }

console.log(generateRandomStrategem(Strategems))

export default MainScreen;