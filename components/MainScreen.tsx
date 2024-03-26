import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'

enum Strategems {
    EAGLE_AIRSTRIKE = "EAGLE_AIRSTRIKE",
    STALWART = "STALWART",
}

const IconContainer = styled.View`
    display: block;
    align-items: center;
    height: 50px;
`;

const Arrows = styled.View`
    display: inline-grid;
    height: 20px;
`;

const MainScreen = () => {
    return (
        <React.Fragment>
            <IconContainer>
                <Text>Icons</Text>
            </IconContainer>
            <Arrows>
                <Text>{'\u2192'}</Text>
                <Text>{'\u2192'}</Text>
                <Text>{'\u2192'}</Text>
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