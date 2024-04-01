import * as React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native'

enum Strategems {
    EAGLE_AIRSTRIKE = "EAGLE_AIRSTRIKE",
    STALWART = "STALWART",
}

const StrategemList = styled.View`
    display: flex;
    align-items: center;
    height: 50px;
`;

const Arrows = styled.View`
    height: 20px;
    align-items: center;
`;

const MainScreen = () => {
    return (
        <React.Fragment>
            <StrategemList>
                <View style={{backgroundColor: 'black', height: 50, width: 50}}></View>
            </StrategemList>
            <Arrows>
                <Text>{'\u2192'}{'\u2192'}{'\u2192'}{'\u2192'}</Text>
            </Arrows>
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