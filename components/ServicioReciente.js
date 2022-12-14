import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import * as theme from "../constants/tema";
import Icon from "react-native-vector-icons/MaterialIcons";
import Servicio from "./Descripcion";

const Servicio_Reciente = ({ item }) => {
  //const id = parseInt(item.id);

  const [descripcionVisible, setDescripcionVisible] = useState(false);

  const toggleDescripcionVisible = () => {
    setDescripcionVisible(!descripcionVisible);
  };
  return (
    <TouchableOpacity
      onPress={() => toggleDescripcionVisible()}
      style={styles.container}
    >
      <Modal
        animationType="slide"
        visible={descripcionVisible}
        onRequestClose={() => toggleDescripcionVisible()}
      >
        <Servicio closeModal={() => toggleDescripcionVisible()} item={item} />
      </Modal>
      <Image
        source={item.foto}
        borderRadius={20}
        style={{ width: 40, height: 40 }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.categoria}>{item.categoria}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="more-vert" size={30} color={theme.colors.gray} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 17,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: theme.colors.green,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  iconContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  nombre: {
    fontWeight: "bold",
    fontSize: theme.sizes.h3,
    color: theme.colors.gray,
    marginBottom: 3,
  },
  categoria: {
    fontSize: theme.sizes.h2,
    color: theme.colors.gray,
  },
});

export default Servicio_Reciente;
