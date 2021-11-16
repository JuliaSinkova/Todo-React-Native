import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { addTaskAction } from "../../actions/addTaskAction";

function TodoForm() {
  const AddForm = styled.View`
    display: flex;
    flex-wrap: wrap;
  `;
  const AddInput = styled.TextInput`
    width: 500px;
    display: inline;
    margin: 10px auto;
    height: 40px;
    border: 1px solid #888;
    border-radius: 20px;
    boxshadow: 4px 4px 19px -2px rgba(34, 60, 80, 0.2);
    padding: 10px;
  `;
  const AddButton = styled.TouchableOpacity`
    height: 45px;
    width: 150px;
    border: none;
    border-radius: 20px;
    background-color: #ca55be;
    text-align: center;
    padding-top: 15px;
    color: #fff;
    display: inline-block;
    margin: 20px auto;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
  `;

  const dispatch = useDispatch();
  const [text, onChangeText] = useState("");
  const tasks = useSelector((state) => state.task);

  const add = function () {
    if (text.trim() == "") {
      alert("You cannot add an empty task");
    }
    if (text.trim() != "") {
      let filtered = tasks.filter((item) => item.text == text);
      if (filtered.length > 0) {
        alert("The task already exists, try something else");
      } else {
        dispatch(addTaskAction(Math.random(), text, Date.now()));
      }
    }
  };
  return (
    <AddForm>
      <AddInput
        placeholder="Add Task..."
        onChangeText={(t) => onChangeText(t)}
        autoFocus={true}
        clearButtonMode="while-editing"
        value={text}
      />

      <AddButton
        onPress={() => {
          add();
        }}
      >
        Submit
      </AddButton>
    </AddForm>
  );
}

export default TodoForm;
