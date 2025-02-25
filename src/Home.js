import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View } from "react-native";
import { Text, SafeAreaView, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fileration } from "./redux/slices/todoSlice";
import { useState } from "react";
import Todo from "./Todo";
import styles from "./app";

const Home = () => {
  const [status, setStatus] = useState("all");
  const [title, setTitle] = useState("");
  const [discreption, setDiscreption] = useState("");
  const todoSlice = useSelector((state) => state.todo);
  const diapatch = useDispatch();
  const addTask = () => {
    diapatch(
      addTodo({
        id: Date.now(),
        title: title,
        discreption: discreption,
        done: false,
      })
    );
    setTitle("");
    setDiscreption("");
  };

  const handleStatus = (e) => {
    setStatus(e);
    diapatch(fileration(e));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle=" dark-content"
        hidden={false}
        translucent={false}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Add Task"
        value={title}
        onChangeText={(e) => setTitle(e)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Add Description"
        value={discreption}
        onChangeText={(e) => setDiscreption(e)}
      />
      <TouchableOpacity  onPress={() => addTask()} style={styles.TouchableOpacity}>
        <Text style={{ color: "white" }}>
          Submit
        </Text>
      </TouchableOpacity>
      <Text style={styles.breakLine}></Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          onPress={() => handleStatus("all")}
          style={status === "all" ? styles.pressed : styles.unpressed}
        >
          <Text
            style={status === "all" ? { color: "white" } : { color: "black" }}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleStatus("inProgress")}
          style={status === "inProgress" ? styles.pressed : styles.unpressed}
        >
          <Text
            style={
              status === "inProgress" ? { color: "white" } : { color: "black" }
            }
          >
            In Progress
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleStatus("done")}
          style={status === "done" ? styles.pressed : styles.unpressed}
        >
          <Text
            style={status === "done" ? { color: "white" } : { color: "black" }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
      {todoSlice.todos.length === 0 ? (
        <Text style={styles.notasks}>No Tasks</Text>
      ) : (
        <View>
          {todoSlice.filteredTodos.map((task) => (
            <Todo key={task.id} task={task} />
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
