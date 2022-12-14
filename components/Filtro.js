import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as theme from "../constants/tema";
import { Picker } from "@react-native-community/picker";
import Slider from "@react-native-community/slider";

const Filtro = (props) => {
  const [categoria, setCategoria] = useState("Limpieza de Hogar");
  const [distancia, setDistancia] = useState(0);

  const Reset = () => {
    setCategoria("Limpieza de Hogar");
    setDistancia(0);
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={props.closeModal}>
            <Icon
              name="keyboard-arrow-left"
              size={30}
              color={theme.colors.gray}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Filtrar</Text>
          <TouchableOpacity onPress={() => Reset()}>
            <Text style={{ color: theme.colors.gray }}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Categoría</Text>
          <View style={styles.pickerContainer}>
            <Picker
              value={distancia}
              selectedValue={categoria}
              onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
            >
              <Picker.Item
                label="Limpieza de Hogar"
                value="Limpieza de Hogar"
              />
              <Picker.Item label="Electricista" value="Electricista" />
              <Picker.Item label="Plomería" value="Plomería" />
              <Picker.Item label="Automotriz" value="Automotriz" />
            </Picker>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>Distancia</Text>
            <Text style={styles.title}>{distancia} km</Text>
          </View>
          <Slider
            step={1}
            style={{ height: 50 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={theme.colors.green}
            maximumTrackTintColor={theme.colors.gray}
            onValueChange={(value) => setDistancia(value)}
          />

          <Text style={styles.title}>Ubicación</Text>
          <View style={styles.locationInputContainer}>
            <Icon name="my-location" size={30} color={theme.colors.gray} />
            <TextInput
              style={{
                marginLeft: 10,
              }}
              placeholder="Indica tu ubicación"
              placeholderTextColor={theme.colors.gray}
            />
          </View>
        </View>

        <View
          style={{
            padding: 20,
            backgroundColor: theme.colors.white,
          }}
        >
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={props.closeModal}
          >
            <Text style={styles.btnText}>Aplicar filtros</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.lightWhite,
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightWhite,
  },
  header: {
    height: 70,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.lightWhite,
  },
  headerTitle: {
    fontWeight: "bold",
    alignItems: "center",
    fontSize: theme.sizes.h4,
    color: theme.colors.gray,
  },
  body: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: theme.colors.white,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: theme.sizes.h4,
    color: theme.colors.gray,
  },
  pickerContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,

    borderColor: theme.colors.gray,
  },
  normalText: {
    fontWeight: "900",
    fontSize: theme.sizes.h3,
    color: theme.colors.gray,
  },
  locationInputContainer: {
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    alignItems: "center",
    flexDirection: "row",
  },
  btnContainer: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.yellow,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: theme.sizes.h4,
    color: theme.colors.gray,
  },
});

export default Filtro;
