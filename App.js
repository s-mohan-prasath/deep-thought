import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';

import Card from "./app/components/Card";
import colors from "./config/colors";

export default function App() {

  const [selectedValue, setSelectedValue] = useState("option1");
  const options = [
    { label: 'Category', value: 'Category' },
    { label: 'Value', value: 'Value' },
    { label: 'Wisdom', value: 'Wisdom' },
    { label: 'Emotion', value: 'Emotion' },
  ];
  const option2 = [
    { label: 'Sub-Category', value: 'Sub-Category' },
    { label: 'a', value: 'a' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c' },
  ];
  const container = [
    {
      name: "Shagun",
      timestamp: "1 day ago",
      reflection: "Have a great day to the one who is seeing this project",
      type: "Happy",
      thread:
        'I am Mohan Prasath. I am pursuing Bachelor"s in mathematics. I have a boundless ambition in learing new technoloies and to apply them to solve the real world problem. I aspire to be an entrepreneur. Very soon I will achieve it. Success is something which will not come in a day, for that we have to work hard everyday to achieve it in one day. All matters is consistency, which play a great role in success. Don"t listen to the other person"s bull shit words , just go one and achieve and experience. If you succeed happiness will the gift and if you fail , Experience will be the mega gift that god offers you. it"s all god"s grace. \tThank You💖',
      threadBy: "Mohan Prasath S",
    },
    {
      name: "Shagun",
      timestamp: "3 day ago",
      reflection: "Have a great day to the one who is seeing this project",
      type: "Happy",
      thread:
        'I am Mohan Prasath. I am pursuing Bachelor"s in mathematics. I have a boundless ambition in learing new technoloies and to apply them to solve the real world problem. I aspire to be an entrepreneur. Very soon I will achieve it. Success is something which will not come in a day, for that we have to work hard everyday to achieve it in one day. All matters is consistency, which play a great role in success. Don"t listen to the other person"s bull shit words , just go one and achieve and experience. If you succeed happiness will the gift and if you fail , Experience will be the mega gift that god offers you. it"s all god"s grace. \tThank You💖',
      threadBy: "Mohan Prasath S",
    },
    {
      name: "Saurabe",
      timestamp: "1 day ago",
      reflection: "Nice",
      type: "Happy",
      thread:
        'I am Mohan Prasath. I am pursuing Bachelor"s in mathematics. I have a boundless ambition in learing new technoloies and to apply them to solve the real world problem. I aspire to be an entrepreneur. Very soon I will achieve it. Success is something which will not come in a day, for that we have to work hard everyday to achieve it in one day. All matters is consistency, which play a great role in success. Don"t listen to the other person"s bull shit words , just go one and achieve and experience. If you succeed happiness will the gift and if you fail , Experience will be the mega gift that god offers you. it"s all god"s grace. \tThank You💖',
      threadBy: "Mohan Prasath S",
    },
    {
      name: "Shagun",
      timestamp: "1 day ago",
      reflection: "Have a great day to the one who is seeing this project",
      type: "Happy",
      thread:
        'I am Mohan Prasath. I am pursuing Bachelor"s in mathematics. I have a boundless ambition in learing new technoloies and to apply them to solve the real world problem. I aspire to be an entrepreneur. Very soon I will achieve it. Success is something which will not come in a day, for that we have to work hard everyday to achieve it in one day. All matters is consistency, which play a great role in success. Don"t listen to the other person"s bull shit words , just go one and achieve and experience. If you succeed happiness will the gift and if you fail , Experience will be the mega gift that god offers you. it"s all god"s grace. \tThank You💖',
      threadBy: "Mohan Prasath S",
    },
    {
      name: "Shagun",
      timestamp: "1 day ago",
      reflection: "Have a great day to the one who is seeing this project",
      type: "Happy",
      thread:
        'I am Mohan Prasath. I am pursuing Bachelor"s in mathematics. I have a boundless ambition in learing new technoloies and to apply them to solve the real world problem. I aspire to be an entrepreneur. Very soon I will achieve it. Success is something which will not come in a day, for that we have to work hard everyday to achieve it in one day. All matters is consistency, which play a great role in success. Don"t listen to the other person"s bull shit words , just go one and achieve and experience. If you succeed happiness will the gift and if you fail , Experience will be the mega gift that god offers you. it"s all god"s grace. \tThank You💖',
      threadBy: "Mohan Prasath S",
    },
    {
      name: "Shagun",
      timestamp: "1 day ago",
      reflection: "Have a great day to the one who is seeing this project",
      type: "Happy",
      thead:
        'I am Mohan Prasath. I am pursuing Bachelor"s in mathematics. I have a boundless ambition in learing new technoloies and to apply them to solve the real world problem. I aspire to be an entrepreneur. Very soon I will achieve it. Success is something which will not come in a day, for that we have to work hard everyday to achieve it in one day. All matters is consistency, which play a great role in success. Don"t listen to the other person"s bull shit words , just go one and achieve and experience. If you succeed happiness will the gift and if you fail , Experience will be the mega gift that god offers you. it"s all god"s grace. \tThank You💖',
      threadBy: "Mohan Prasath S",
    },
    {
      name: "Shagun",
      timestamp: "1 day ago",
      reflection: "Have a great day to the one who is seeing this project",
      type: "Happy",
      thead:
        'I am Mohan Prasath. I am pursuing Bachelor"s in mathematics. I have a boundless ambition in learing new technoloies and to apply them to solve the real world problem. I aspire to be an entrepreneur. Very soon I will achieve it. Success is something which will not come in a day, for that we have to work hard everyday to achieve it in one day. All matters is consistency, which play a great role in success. Don"t listen to the other person"s bull shit words , just go one and achieve and experience. If you succeed happiness will the gift and if you fail , Experience will be the mega gift that god offers you. it"s all god"s grace. \tThank You💖',
      threadBy: "Mohan Prasath S",
    },
    {
      name: "Shagun",
      timestamp: "1 day ago",
      reflection: "Have a great day to the one who is seeing this project",
      type: "Happy",
      thead:
        'I am Mohan Prasath. I am pursuing Bachelor"s in mathematics. I have a boundless ambition in learing new technoloies and to apply them to solve the real world problem. I aspire to be an entrepreneur. Very soon I will achieve it. Success is something which will not come in a day, for that we have to work hard everyday to achieve it in one day. All matters is consistency, which play a great role in success. Don"t listen to the other person"s bull shit words , just go one and achieve and experience. If you succeed happiness will the gift and if you fail , Experience will be the mega gift that god offers you. it"s all god"s grace. \tThank You💖',
      threadBy: "Mohan Prasath S",
    },
    {
      name: "Shagun",
      timestamp: "1 day ago",
      reflection: "Have a great day to the one who is seeing this project",
      type: "Happy",
      thead:
        'I am Mohan Prasath. I am pursuing Bachelor"s in mathematics. I have a boundless ambition in learing new technoloies and to apply them to solve the real world problem. I aspire to be an entrepreneur. Very soon I will achieve it. Success is something which will not come in a day, for that we have to work hard everyday to achieve it in one day. All matters is consistency, which play a great role in success. Don"t listen to the other person"s bull shit words , just go one and achieve and experience. If you succeed happiness will the gift and if you fail , Experience will be the mega gift that god offers you. it"s all god"s grace. \tThank You💖',
      threadBy: "Mohan Prasath S",
    },
  ];
  const valueList = [
    "Category",
    "Humility",
    "Altruism",
    "Rigor",
    "Purpose",
    "Leadership",
    "Compassion",
    "Perseverance",
    "Accountability",
    "Integrity",
    "Loyalty",
  ];
  const emotionList = [
    "Sub-category",
    "CExcites",
    "Gratefull",
    "Inspired",
    "Anxious",
    "Sad",
    "Hopeful",
    "Confused",
    "Motivated",
    "Disillusioned",
    "Celebration",
  ];
  const wisdomList = [
    "Sub-category",
    "Inter-disciplinary",
    "Cross-functional",
    "insight",
    "Heuristic",
  ];
  return (
    <ScrollView>
      <View style={styles.page}>
          <View style={{marginTop:20}}>
      <Text style={{fontSize:32,fontWeight:"800",marginLeft:20}}>Feed</Text>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(selectedValue) => setSelectedValue(selectedValue)}
              style={{marginHorizontal:10,borderColor:colors.gray,borderRadius:25}}
            >
              {options.map(item => (<Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />))}
            </Picker>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(selectedValue) => setSelectedValue(selectedValue)}
              style={{marginHorizontal:10,borderColor:colors.gray,borderRadius:25}}
            >
              {option2.map(item => (<Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />))}
            </Picker>
          </View>
    </View>
      <View style={styles.container}>
        {
          container.map((data,key) => (
            <Card {...data}key={key}/>
          ))
        }
        <Text>Helo</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "4%",
  },
  bg: {
    flex: 1,
  },
  page:{
    marginTop:30,
  },
  dropContainer:{
    width:"100%",
    flexDirection:"row",
    rowGap:10,
    marginHorizontal:10,
  }
});
