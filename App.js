import * as React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
      <View style={{padding:15, backgroundColor: "#bee5b0"}}></View>
        <Image source={require("./assets/jonathanPortrait.jpg")} style={styles.photo} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameAndPronouns}>Jon (he/him)</Text>
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.bio}>Jonathan Ng is an aspiring software engineer aiming to use his technical skills to create programs that positively impacts the world. His professional interests include developing virtual assistants and creating more powerful AIs. He is currently part of the Snap Engineering Academy and is interning as a software engineer for Down! mobile.</Text>
          <Text style={styles.bio}>In his free time, Jonathan enjoys playing poker and reading self-development literature. He also keeps up with several shows and animes. Some of his favorites include Rick & Morty, Avatar: The Last Airbender, Loki, and FullMetal Alchemist: Brotherhood.</Text>
        </View>
        <View style={styles.blurbContainer}>
          <Text style={styles.blurb}>chirp chirp i'm a parakeet</Text>
        </View>
      </View>
      <View style={{padding:15}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    padding: 20,
  },
  photoContainer: {
    // flex: 3,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bee5b0",
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurbContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bee5b0",
    borderRadius: 15,
  },
  photo: {
    resizeMode: "cover",
    width: '70%',
    height: Dimensions.get('window').width*0.7,
    aspectRatio: 1,
    borderRadius: 15,
  },
  nameAndPronouns: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Futura',
  },
  blurb: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'Cochin',
  },
  bioContainer: {
    flex: 3.5,
    alignItems: 'center',
  },
  bio: {
    textAlign: 'center',
    padding: 5,
  }
});
