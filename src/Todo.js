import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./app";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { deleteTodo, isChecked } from "./redux/slices/todoSlice";

const Todo = ({ task }) => {

  const { navigate } = useNavigation();
  const diapatch = useDispatch();
  const checked = (e) => {
    e.stopPropagation();

    diapatch(isChecked(task));
  };

  return (
    <View style={styles.todo}>
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
              onPress={(e) => checked(e)}
            />
          ) : (
            <AntDesign name="check" size={24} color="green" />
          )}
          <Feather name="trash-2" size={24} color="red" onPress={(e) => {e.stopPropagation(); diapatch(deleteTodo(task.id))}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
