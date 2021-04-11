import React, { Component } from "react";
import { Image, SafeAreaView } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

export default class DefaultContainer extends Component {
  state = {
    date: new Date().toDateString(),
  };
  render() {
    const { date } = this.state;
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>Welcome to DefaultContainer</Text>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: "Image URL" }} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: "Image URL" }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>{date}</Text>
            </Right>
          </CardItem>
        </Card>
      </SafeAreaView>
    );
  }
}
