import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [iniciado, setIniciado] = useState(false);

  useEffect(() => {
    console.log("O contador foi alterado para ");
  }, [contador]);

  useEffect(() => {
    setTimeout(() => {
      setIniciado(true);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {iniciado ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 30 }}>CONTADOR</Text>
          <Text style={{ fontSize: 25 }}>Valor contador: {contador}</Text>
          <Button
            title="-"
            onPress={() => {
              setContador(contador - 1);
            }}
          />
          <Button
            title="+"
            onPress={() => {
              setContador(contador + 1);
            }}
          />
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Carregando dados</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
