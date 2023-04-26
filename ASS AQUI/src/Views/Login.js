import { StatusBar } from "expo-status-bar";
import Expor from '../Componentes/Expor';
import {
  View,
  Box,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.barTop}>
        <Text style={styles.barTopText}> ASS AQUI </Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.barMid}>
        <Text style={styles.T1}>Fazer Login "</Text>
        <Text style={styles.T2}>Não tem um conta? Cadastro "</Text>

        <TouchableOpacity
          onPress={() => {
            /* do this */
          }}
        >
          <View
            style={{
              backgroundColor: "#15678B",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              height: 50,
              width: 380,
            }}
          >
            <Text style={{ color: "white" }}>Fazer login com o Google "</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            /* do this */
          }}
        >
          <View
            style={{
              backgroundColor: "#06364A",

              alignItems: "center",
              justifyContent: "center",

              height: 50,
              width: 380,

              margin: 10,
              borderRadius: 15,
            }}
          >
            <Text style={{ color: "white" }}>Fazer login com o Facebook "</Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{ backgroundColor: "black", width: "35%", height: 2 }}
          ></View>
          <Text style={styles.T1}>ou </Text>
          <View
            style={{ backgroundColor: "black", width: "35%", height: 2 }}
          ></View>
        </View>

        <TextInput
          style={styles.iputLog}
          placeholder="Type here to translate!"
          onChangeText={(newText) => setText(newText)}
        />

        <TextInput
          style={styles.iputLog}
          placeholder="Type here to translate!"
          onChangeText={(newText) => setText(newText)}
        />

        <TouchableOpacity
          onPress={() => {
            /* do this */
          }}
        >
          <View
            style={{
              backgroundColor: "#06364A",

              alignItems: "center",
              justifyContent: "center",

              height: 50,
              width: 380,

              margin: 10,
              borderRadius: 15,
            }}
          >
            <Text style={{ color: "white" }}>LOGIN "</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.T2}>Esqueceu a senha? "</Text>
        <Text style={styles.T2}>
          Ao se cadastrar ou fazer login pelo Facebook ou Google, você aceita os
          termos de uso e políticas de privacidade do ASS AQUI "
        </Text>

        <StatusBar style="auto" />
      </View>

      <View style={styles.barBot}>
        <Expor/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BDD2DC",
    borderRadius: 25,
  },
  barTop: {
    flex: 1,
    width: "100%",
    backgroundColor: "#004361",

    alignItems: "center",
    justifyContent: "flex-end",
    padding: 15,
  },

  barTopText: {
    fontSize: 32,
    color: "#FCE8CF",
  },

  barMid: {
    flex: 10,
    justifyContent: "space-between",
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyItens: "start",
  },

  T1: {
    fontSize: 20,
    margin: 24,
  },

  T2: {
    fontSize: 16,
    margin: 16,
  },

  iputLog: {
    height: 50,
    width: "89%",
    margin: 12,
    backgroundColor: "#FCE8CF",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },

  barBot: {
    flex: 1,
    height: "5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004361",
  },
});
