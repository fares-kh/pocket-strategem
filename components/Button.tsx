import * as React from 'react';
import styled from 'styled-components/native'

const ArrowContainer = styled.View`
    width: 400px;
    height: 400px;
    background-color: black;
    flex: 3;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  `;

const Text = styled.Text`
    line-height: 100px;
    font-size: 30px;
    text-align: center;
  `;

const Row = styled.View`
    flex-direction: row;
  `;

const UpArrow = styled.View`
    background-color: white;
    margin: 16px 0 16px 0;
    max-width: 100px;
    height: 100px;
    flex: 1;
  `;

const LeftArrow = styled.View`
    background-color: white;
    margin: 16px 64px 16px 0;
    max-width: 100px;
    height: 100px;
    flex: 2;
  `;

const RightArrow = styled.View`
    background-color: white;
    margin: 16px 0 16px 64px;
    max-width: 100px;
    height: 100px;
    flex: 2;
  `;

const DownArrow = styled.View`
    background-color: white;
    margin: 16px 0 16px 0;
    max-width: 100px;
    height: 100px;
    flex: 4;
  `;

const Button = () => {
    return (
        <React.Fragment>
            <ArrowContainer>
                <Row>
                    <UpArrow id="up">
                        <Text>{'\u2191'}</Text>
                    </UpArrow>
                </Row>
                <Row>
                    <LeftArrow id="left">
                        <Text>{'\u2190'}</Text>
                    </LeftArrow>
                    <RightArrow id="right">
                        <Text>{'\u2192'}</Text>
                    </RightArrow>
                </Row>
                <Row>
                    <DownArrow id="down">
                        <Text>{'\u2193'}</Text>
                    </DownArrow>
                </Row>
            </ArrowContainer>
        </React.Fragment>
    )
}
export default Button;