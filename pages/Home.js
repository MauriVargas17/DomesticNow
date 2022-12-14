import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as theme from "../constants/tema";
import * as backend from "../constants/backend";
import Categoria from "../components/Categoria";
import Servicio_Reciente from "../components/ServicioReciente";
import Ionicon from "react-native-vector-icons/Ionicons";
import MaterialComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Filtro from "../components/Filtro";

export default function Home({ navigation }) {
  const [filtroVisible, setFiltroVisible] = useState(false);

  const toggleFiltroVisible = () => {
    setFiltroVisible(!filtroVisible);
  };
  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        visible={filtroVisible}
        onRequestClose={() => toggleFiltroVisible()}
      >
        <Filtro closeModal={() => toggleFiltroVisible()} />
      </Modal>

      <View>
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialComIcon
              name="dots-grid"
              size={30}
              color={theme.colors.gray}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon
              name="user-o"
              size={30}
              color={theme.colors.gray}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={styles.title}>Hola Paul</Text>
            <Text style={styles.subtitle}>¿Que estás buscando?</Text>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Ionicon
                name="search"
                size={30}
                color={theme.colors.light_gray}
              />
              <TextInput fontSize={20} marginLeft={8} placeholder="Buscar" />
            </View>
            <TouchableOpacity
              style={styles.searchIconContainer}
              onPress={() => toggleFiltroVisible()}
            >
              <Ionicon
                name="options-outline"
                size={30}
                color={theme.colors.gray}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.popularContainer}>
            <Text style={[styles.popularText, { marginLeft: 20 }]}>
              Categorías Populares
            </Text>
            <FlatList
              data={backend.categorias}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity activeOpacity={1} style={{ flex: 1 }}>
                    <Categoria item={item} />
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View
            style={[
              styles.popularContainer,
              { marginRight: 20, marginLeft: 20, marginBottom: 70 },
            ]}
          >
            <Text style={styles.popularText}>Servicios Recientes </Text>
            <FlatList
              data={backend.servicios_recientes}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <Servicio_Reciente item={item} />;
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.gray,
    height: "100%",
    width: "100%",
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.lightWhite,
  },
  container: {
    backgroundColor: theme.colors.lightWhite,
  },
  title: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: theme.sizes.h6,
    color: theme.colors.gray,
  },
  subtitle: {
    marginLeft: 20,
    fontWeight: "600",
    fontSize: theme.sizes.h4,
    color: theme.colors.gray,
  },
  searchContainer: {
    marginTop: 15,
    marginLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  searchInputContainer: {
    flex: 1,
    padding: 5,
    borderRadius: theme.borderRadius,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: theme.colors.super_light_gray,
  },
  searchIconContainer: {
    padding: 12,
    marginLeft: 10,
    borderRadius: theme.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.green,
  },
  popularContainer: {
    paddingTop: 20,
  },
  popularText: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: theme.sizes.h3,
    color: theme.colors.gray,
  },
});
