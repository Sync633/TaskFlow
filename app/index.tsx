import Botao from "@/components/Botao";
import Card from "@/components/Card";
import Titulo from "@/components/Titulo";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function Home() {
  const [iniciado, setIniciado] = useState(false);

  function iniciarAplicacao() {
    setIniciado(true);
    router.push("/tarefas");
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Card>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Titulo  titulo="TaskFlow" descricao="Olá Mundo" prioridade="Alta" />

          {iniciado ? (
            <Text style={styles.descricao}>Bem vindo as TaskFlow!</Text>
          ) : (
            <Text style={styles.descricao}>
              Organize sua tarefas de forma simples
            </Text>
          )}

          <Botao
            texto={iniciado ? "Continuar" : "Começar"}
            onPress={iniciarAplicacao}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
}
