import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
  Text,
  Image,
} from "react-native";
import * as theme from "../constants/tema";
import Descripcion from "./Descripcion";

const Categoria = ({ item }) => {
  /**
   * El modal de Categoria no esta incluido aunque su toggle function si esta presente
   */

  const [categoriaVisible, setCategoriaVisible] = useState(false);

  const toggleCategoriaVisible = () => {
    setCategoriaVisible(!categoriaVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={categoriaVisible}
        onRequestClose={() => toggleCategoriaVisible()}
      >
        <Descripcion closeModal={() => toggleCategoriaVisible()} item={item} />
      </Modal>
      <View style={styles.header}>
        <Image
          source={item.logo}
          borderRadius={10}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <Text style={[styles.categoriaTitulo, { color: theme.colors.gray }]}>
        {item.titulo}
      </Text>

      <TouchableOpacity style={styles.tagContainer}>
        <View
          style={[
            styles.tag,
            { marginRight: "45%", backgroundColor: theme.colors.yellow },
          ]}
        >
          <Text
            style={[
              styles.jobLocation,
              { fontWeight: "bold", color: theme.colors.gray },
            ]}
          >
            Explorar
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const spacing = 12;

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 190,
    padding: 20,
    paddingLeft: 15,
    marginLeft: 20,
    marginRight: 5,
    borderRadius: 15,
    backgroundColor: theme.colors.green,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoriaTitulo: {
    marginTop: spacing + 5,
    marginBottom: spacing - 5,
    fontWeight: "700",
    fontSize: theme.sizes.h3,
  },
  tagContainer: {
    flexDirection: "row",
  },
  tag: {
    flex: 1,
    padding: 5,
    paddingBottom: 8,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Categoria;
