import React, { Component } from "react";
import "./App.css";
import FormInputTodo from "./components/FormInputTodo";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import SortAndSearch from "./components/SortAndSearch";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    items: [],
    isAddTask: false,
    taskName: "",
    levelValue: "Small",
    id: uuidv4(),
  };

  addTask = () => {
    this.setState({
      isAddTask: true,
    });
  };

  hadleChange = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  hadleChangeSelected = (e) => {
    this.setState({
      levelValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { items } = this.state; // chu y doan nay
    let tempItem = {
      id: this.state.id,
      task: this.state.taskName,
      level: this.state.levelValue,
    };

    this.setState({
      items: [...items, tempItem],
      taskName: "",
      id: uuidv4(),
    });
  };

  cancel = () => {
    this.setState({
      isAddTask: false,
    });
  };

  editItem = (id) => {
    console.log(id);
    let { items } = this.state;
    let newItems = items.filter((item) => item.id !== id);
    let tempItem = items.find((item) => item.id === id);
    console.log(tempItem);
    this.setState({
      items: newItems,
      isAddTask: true,
      taskName: tempItem.task,
      id: id,
    });
  };

  deleteItem = (id, index) => {
    console.log(index);
    let { items } = this.state;
    items.splice(index, 1);
    this.setState({
      items: items,
    });
  };

  render() {
    const { isAddTask, taskName } = this.state;
    const {
      addTask,
      cancel,
      hadleChange,
      handleSubmit,
      hadleChangeSelected,
    } = this;
    const formInputProps = {
      taskName,
      isAddTask,
      cancel,
      addTask,
      hadleChange,
      handleSubmit,
      hadleChangeSelected,
    };

    const { items } = this.state;
    const { editItem, deleteItem } = this;

    const listItemsProps = {
      items,
      editItem,
      deleteItem,
    };

    console.log(items);
    return (
      <div className="container">
        <Header />
        <div className="row">
          <SortAndSearch />
          <FormInputTodo {...formInputProps} />
          <ListItems {...listItemsProps} />
        </div>
      </div>
    );
  }
}

export default App;
