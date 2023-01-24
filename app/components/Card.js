import React, { useState, useRef } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../config/colors";

//icons
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 15,
    backgroundColor: "#d3dde8",
    borderRadius: 10,
    marginVertical:'2.5%',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: colors.gray,
  },
  "flex-row": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card__header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "space-between",
  },
  card__header_div: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },
  header__div: {
    marginLeft: "6%",
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
  },
  timestamp: {
    fontSize: 12,
    fontWeight: "300",
  },
  reflection: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: "1.5%",
    marginTop: "2%",
  },
  type: {
    fontSize: 14,
    fontWeight: "300",
    alignSelf: "flex-end",
    marginRight: "4%",
    marginTop:'3.5%',
  },
  main: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: "3%",
    marginTop: "2.5%",
    flexDirection: "column",
    columnGap: "2%",
    display:'flex',
  },
});

function Card({name,timestamp,threadBy,thread,reflection,type}) {
    const [open, setOpen] = useState(false)

  return (
    <View style={styles.card}>
      <View style={styles.card__header}>
        <View style={styles.card__header_div}>
          <Image
            source={require("../assets/elon-terror-pose.jpg")}
            style={styles.profile}
          />
          <View style={styles.header__div}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.timestamp}>{timestamp}</Text>
          </View>
        </View>
        <Text style={styles.name} onPress={()=>(setOpen(!open))}>
          {(open===true)?  <Entypo
            name="chevron-down"
            size={14}
            color="black"
          /> : <Entypo
            name="chevron-up"
            size={14}
            color="black"
          />
          }{" "}
          See Thread
        </Text>
      </View>
      <View style={{display:`${(open)? "flex" : "none"}`,backgroundColor:colors.white,borderRadius:10,padding:"3%",marginTop:"2.5%",flexDirection:"column",columnGap:"2%"}}>
        <Text style={styles.name}>{threadBy}</Text>
        <Text style={styles.thread}>
          {thread}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.reflection}>
          {reflection}
        </Text>
        <Text style={styles.type}>
          {type} <FontAwesome name="smile-o" size={14} color="black" />
        </Text>
      </View>
    </View>
  );
}



export default Card;
