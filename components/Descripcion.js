import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as theme from "../constants/tema";

const Descripcion = (props) => {
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
          <Text style={styles.headerTitle}>{props.item.categoria}</Text>
          <View style={{ padding: 20 }}></View>
        </View>

        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.servicioContainer}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 20 }}
                source={props.item.foto}
              />
              <Text style={styles.nombre}>{props.item.nombre}</Text>
              <Text style={styles.calificacion}>
                {props.item.calificacion} ❤️ en {props.item.numeroServicios}{" "}
                servicios
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={[styles.tag, { marginRight: 10 }]}>
                  <Text style={styles.jobLocation}>{props.item.precio}</Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.nombre}>Detalles</Text>
              <Text style={styles.detallesText}>{props.item.detalles}</Text>
              <Text style={styles.nombre}>Especialidades</Text>

              {props.item.especialidades.map((element, index) => (
                <View style={{ flexDirection: "row", marginTop: 7 }}>
                  <Icon name="check" size={20} color={theme.colors.gray} />
                  <Text style={[styles.detallesText, { marginTop: 0 }]}>
                    {props.item.especialidades[index]}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                styles.btnContainer,
                {
                  backgroundColor: theme.colors.white,
                  borderWidth: 1,
                  borderColor: theme.colors.green,
                },
              ]}
              onPress={props.closeModal}
            >
              <Icon name="bookmark" size={30} color={theme.colors.green} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnContainer,
                {
                  flex: 1,
                  backgroundColor: theme.colors.yellow,
                  marginLeft: 5,
                },
              ]}
              onPress={props.closeModal}
            >
              <Text
                style={[
                  styles.nombre,
                  { color: theme.colors.gray, marginTop: 0 },
                ]}
              >
                Contactarse
              </Text>
            </TouchableOpacity>
          </View>
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
    fontSize: theme.sizes.h4,
    color: theme.colors.gray,
  },
  body: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: theme.colors.white,
  },
  servicioContainer: {
    padding: 30,
    alignItems: "center",
  },
  nombre: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: theme.sizes.h4,
    color: theme.colors.gray,
  },
  calificacion: {
    marginTop: 5,
    fontWeight: "700",
    fontSize: theme.sizes.h3,
    color: theme.colors.gray,
  },
  tag: {
    padding: 7,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.silver,
  },
  detallesText: {
    marginTop: 10,
    fontSize: theme.sizes.h3,
    color: theme.colors.gray,
  },
  btnContainer: {
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Descripcion;
