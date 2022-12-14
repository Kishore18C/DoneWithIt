import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Image } from "react-native";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      style={styles.container}
    >

      <Image
        style={styles.image}
        source={{uri:listing.images.url}}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/icon.png")}
            title="Kishore"
            subTitle="Listings"
          />
        </View>
      </View>

      <ContactSellerForm listing={listing} />

    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },

  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginTop: 20,
  },
});

export default ListingDetailsScreen;
