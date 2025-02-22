import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
const Home = () => {
    const [tasks, setTasks] = useState([
      { id: 1, title: "Task 1", done: false },
      { id: 2, title: "Task 2", done: false },
      { id: 3, title: "Task 3", done: false },
    ]);
  
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle=" dark-content"
        hidden={false}
        translucent={false}
      />
      {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {false}/> */}
      {/* <Text style={styles.text}>to do app</Text> */}
      <TextInput style={styles.textInput} placeholder="Enter your name" />
      <TextInput style={styles.textInput} placeholder="Enter your age" />
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.breakLine}></Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "90%",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity style={styles.pressed}>
          <Text style={{ color: "white" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.unpressed}>
          <Text>In progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.unpressed}>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>

      {tasks.map((task) => (
        <TouchableOpacity
          style={styles.item}
          key={task.id}
          onPress={() => navigate("TodoDetails", { task })}
        >
          <Text>{task.title}</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {Platform.OS === "android" ? (
              <AntDesign
                name="checkcircleo"
                size={24}
                color={task.done ? "green" : "red"}
                onPress={(e) => {
                  e.stopPropagation();
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id ? { ...t, done: !t.done } : t
                    )
                  );
                }}
              />
            ) : (
              <AntDesign name="check" size={24} color="green" />
            )}
            <Feather
              name="trash-2"
              size={24}
              color="red"
              onPress={(e) => {
                e.stopPropagation();
                setTasks(tasks.filter((t) => t.id !== task.id));
              }}
            />
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  textInput: {
    width: "90%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  TouchableOpacity: {
    width: "45%",
    padding: 20,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 10,
  },
  breakLine: {
    width: "90%",
    height: 0.5,
    backgroundColor: "gray",
    marginVertical: 10,
  },
  pressed: {
    width: "30%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
  },
  unpressed: {
    width: "30%",
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1.5,
    borderRadius: 15,
    marginBottom: 10,
  },
});

export default Home;
