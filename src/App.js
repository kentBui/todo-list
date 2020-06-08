import React, { Component } from "react";
import "./App.css";
import FormInputTodo from "./components/FormInputTodo";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import SortAndSearch from "./components/SortAndSearch";
import { v4 as uuidv4 } from "uuid";
import ModalDelete from "./components/ModalDelete";
import ModalEdit from "./components/ModalEdit";

const data = [
  { id: 1, task: "ahha", level: "1" },
  { id: 2, task: "acac", level: "0" },
  { id: 3, task: "qfqf", level: "2" },
];

class App extends Component {
  state = {
    taskName: "",
    id: uuidv4(),
    editIndex: 0,
    isEdit: false,
    deletedIndex: 0,
    levelValue: "0",
    searchInput: "",

    items: [...data],
    isAddTask: false,
    nameSort: "Name ASC",
    isOpenModalDelete: false,
  };

  addTask = () => {
    this.setState({
      isAddTask: true,
    });
  };

  handleChange = (e, inputValue) => {
    let value = e.target.value;
    this.setState({
      [inputValue]: value,
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

  editItem = (id, index) => {
    let { items } = this.state;
    let editItem = items.find((item) => item.id === id);

    this.setState({
      editIndex: index,
      id: id,
      isEdit: true,
      taskName: editItem.task,
    });
  };

  handleChangeEdit = (e, inputValue) => {
    let value = e.target.value;
    this.setState({
      [inputValue]: value,
    });
  };

  saveEdit = () => {
    let tempItem = {
      task: this.state.taskName,
      id: this.state.id,
      level: this.state.levelValue,
    };

    console.log(tempItem);
    console.log(this.state.editIndex);
    let { items } = this.state;
    items.splice(this.state.editIndex, 1, tempItem);

    this.setState({
      items: items,
      isEdit: false,
    });
  };

  cancelEdit = () => {
    this.setState({
      isEdit: false,
      taskName: "",
      levelValue: "0",
    });
  };

  deleteItem = (index) => {
    this.setState({
      isOpenModalDelete: true,
      deletedIndex: index,
    });
  };

  deleteItemInModal = () => {
    let tempItems = [...this.state.items];
    console.log(this.state.deletedIndex);
    tempItems.splice(this.state.deletedIndex - 1, 1);
    this.setState({
      items: tempItems,
      isOpenModalDelete: false,
    });
  };

  cancelDelete = () => {
    this.setState({
      isOpenModalDelete: false,
    });
  };

  handleDropdown = (item) => {
    let { items } = this.state;
    switch (item) {
      case "Level ASC":
        items.sort((a, b) => a.level - b.level);
        break;
      case "Level DESC":
        items.sort((a, b) => b.level - a.level);
        break;
      case "Name ASC":
        items.sort((a, b) => a.task.toUpperCase() - b.task.toUpperCase());
        console.log(222);
        break;
      case "Name DESC":
        items.sort((a, b) => b.task.toUpperCase() - a.task.toUpperCase());
        break;
      default:
        break;
    }
    this.setState({
      nameSort: item,
    });
  };

  handleSearch = (e) => {
    let value = e.target.value;
    console.log(value);
    this.setState({
      searchInput: value,
    });
  };

  clear = () => {
    this.setState({
      searchInput: "",
    });
  };

  render() {
    const { isAddTask, taskName } = this.state;

    const { cancel, addTask, handleChange, handleSubmit } = this;

    const formInputProps = {
      taskName,
      isAddTask,
      cancel,
      addTask,
      handleChange,
      handleSubmit,
    };

    const { items, searchInput } = this.state;

    const { editItem, deleteItem } = this;

    const listItemsProps = {
      items,
      searchInput,
      editItem,
      deleteItem,
    };

    const { nameSort } = this.state;

    const { handleSearch, clear, handleDropdown } = this;

    const sortAndSerchProps = {
      nameSort,
      searchInput,
      clear,
      handleSearch,
      handleDropdown,
    };

    const { isOpenModalDelete } = this.state;
    const { deleteItemInModal, cancelDelete } = this;

    const modalDeleteProps = {
      isOpenModalDelete,
      cancelDelete,
      deleteItemInModal,
    };

    const { isEdit } = this.state;
    const { saveEdit, cancelEdit, handleChangeEdit } = this;

    const modalEditProps = {
      isEdit,
      taskName,
      saveEdit,
      cancelEdit,
      handleChangeEdit,
    };

    return (
      <>
        <div className="container">
          <Header />
          <div className="row">
            <SortAndSearch {...sortAndSerchProps} />
            <FormInputTodo {...formInputProps} />
            <ListItems {...listItemsProps} />
          </div>
        </div>
        <ModalDelete {...modalDeleteProps} />
        <ModalEdit {...modalEditProps} />
      </>
    );
  }
}

export default App;
