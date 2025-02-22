import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';

const TodoDetails = () => {
  const { params } = useRoute();
  console.log(params);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{ borderWidth: 2, padding: 20, backgroundColor: "lightblue" }}
      >
        <Text style={{ marginBottom: 10, fontSize: 20 }}>
          <Text style={{ fontWeight: "bold" }}>number:</Text> {params.task.id}
        </Text>
        <Text style={{ marginBottom: 10, fontSize: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Task:</Text> {params.task.title}
        </Text>
        <Text style={{ marginBottom: 10, fontSize: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Done: </Text>
          {params.task.done ? 
           ( <AntDesign name="check" size={24} color="green" />
          ) : (
            <AntDesign name="frowno" size={24} color="black" />
          )
          }

        </Text>
      </View>
    </View>
  );
};

export default TodoDetails;
