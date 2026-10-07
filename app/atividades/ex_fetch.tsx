import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, FlatList } from "react-native";
import { styles } from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";

type Posts = {
  id: string;
  title: string;
};

export default function Home() {
  const [post, setPost] = useState<Posts[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const dados = await res.json();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPost(dados);
      } catch (error) {
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  if (erro) {
    return (
      <View style={styles.container}>
        <Text>Erro! Não foi possivel carregar os dados</Text>
      </View>
    );
  }

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={40} color={"red"} />
        <Text>Carreagando dados...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList
            data={post}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>
                  {item.id} - {item.title}
                </Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }

  return <ActivityIndicator size={80} color={"red"} />;
}
