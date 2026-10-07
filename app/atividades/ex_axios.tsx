import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";

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
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPost(res.data);
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
}
