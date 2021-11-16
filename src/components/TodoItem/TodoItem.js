import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TextInput } from "react-native";
import { deleteTaskAction } from "../../actions/deleteTaskAction";
import { finishTaskAction } from "../../actions/finishTaskAction";
import styled, { ThemeProvider } from "styled-components/native";
import { useState } from "react";
import { editTaskAction } from "../../actions/editTaskAction";

function TodoItem({ text, id, time, finished }) {
  const Btn = styled.TouchableOpacity`
    border: none;
    background-color: #fff;
    text-align: center;
    padding-top: 15px;
    opacity: ${(props) => props.theme.main}
    cursor: pointer;
  `;
  const Item = styled.View`
    border-radius: 20px;
    border: 1px solid #eee;
    display: grid;
    grid-template-columns: 1fr 20px 90px 50px 50px;
    background-color: #fff;
    padding: 5px;
    margin: 10px 0;
  `;
  const Time = styled.Text`
    display: block;
    font-size: 10px;
    color: #777;
  `;
  const Text = styled.Text`
    border: none;
    padding: 10px;
    width: 500px;
  `;
  const TextDisplay = styled.TextInput`
    max-width: 400px;
    width: 100%;
    height: 100%;
  `;

  const [editable, setEditable] = useState(false);
  const [theme, setTheme] = useState({ main: "0" });
  const [newText, onChangeText] = useState(text);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  const deleteTask = function (id) {
    let filtered = tasks.filter((item) => item.id != id);
    dispatch(deleteTaskAction(filtered));
  };

  const editTask = function (id) {
    setEditable(true);
    setTheme({ main: "100" });
    let item = tasks.filter((item) => item.id == id);
  };

  const saveTask = function (id) {
    let filtered = tasks.filter((item) => item.id != id);
    let item = tasks.filter((item) => item.id == id);
    item[0].text = newText;
    filtered.push(item[0]);
    dispatch(editTaskAction(filtered));
    setEditable(false);
    setTheme({ main: "0" });
  };

  const finishTask = function (e) {
    let item = tasks.filter((item) => item.id == id);
    item[0].finished = "finished";
    console.log(item);
    let filtered = tasks.filter((item) => item.id != id);
    filtered.push(item[0]);
    console.log(filtered);
    dispatch(finishTaskAction(filtered));
  };
  const returnTask = function (e) {
    let item = tasks.filter((item) => item.id == id);
    item[0].finished = false;
    console.log(item);
    let filtered = tasks.filter((item) => item.id != id);
    filtered.push(item[0]);
    console.log(filtered);
    dispatch(finishTaskAction(filtered));
  };

  return (
    <Item id={id}>
      <Text id={finished}>
        <TextDisplay
          onChangeText={(t) => onChangeText(t)}
          autoFocus={editable}
          editable={editable}
          placeholder={newText}
          value={newText}
        ></TextDisplay>
        <Time>{new Date(time).toLocaleDateString()}</Time>
      </Text>
      <ThemeProvider theme={theme}>
        <Btn onPress={() => saveTask(id)}>💾</Btn>
      </ThemeProvider>
      {finished ? (
        <Btn onPress={() => returnTask(id)}>Done ✅</Btn>
      ) : (
        <Btn onPress={() => finishTask(id)}> Finish </Btn>
      )}
      <Btn onPress={() => editTask(id)}>✏️</Btn>

      <Btn onPress={() => deleteTask(id)}>🗑</Btn>
    </Item>
  );
}

export default TodoItem;
