import { FlatList } from "react-native-web";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { View } from "react-native";
import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const TodoStyled = styled.View`
    position: relative;
    max-width: 1000px;
    margin: 0px auto;
    padding: 20px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    margin-top: 100px;
    font-family: sans-serif;
  `;
  const Title = styled.Text`
    margin-bottom: 50px;
    text-align: center;
    text-transform: uppercase;
    color: #555;
    font-size: 36px;
  `;

  const tasks = useSelector((state) => state.task);

  const renderItem = ({ item }) => (
    <TodoItem
      id={item.id}
      text={item.text}
      time={item.time}
      finished={item.finished}
    />
  );
  return (
    <TodoStyled>
      <Title>MY Todo List 📝</Title>
      <TodoForm />
      <View>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </TodoStyled>
  );
}

export default TodoList;
