import React, { useState, createContext } from "react";

const DataContext = createContext();

export const DataContextProvider = (props) => {
  const users = [
    {
      name: "John Smith",
      username: "jsmith",
      id: "123456",
      role: "admin",
    },
    {
      name: "Jane Doe",
      username: "jdoe",
      id: "789012",
      role: "editor",
    },
    {
      name: "Bob Johnson",
      username: "bjohnson",
      id: "345678",
      role: "viewer",
    },
  ];

  const tasks = [
    {
      "task name": "Fix login bug",
      description: "There is a bug that prevents users from logging in",
      date: "2023-04-17",
      priorities: "urgent",
      label: "in progress",
      "assignee id": ["123456"],
    },
    {
      "task name": "Update homepage",
      description: "The homepage needs to be updated with new content",
      date: "2023-04-18",
      priorities: "easy",
      label: "backlog",
      "assignee id": ["789012", "345678"],
    },
    {
      "task name": "Add search functionality",
      description: "Users should be able to search for articles",
      date: "2023-04-19",
      priorities: "not important",
      label: "review",
      "assignee id": ["123456", "789012"],
    },
  ];

  const fields = ["Description",, "Priorities", "Label", "Assignee"];

  const [user, setUser] = useState(users);
  const [task, setTask] = useState(tasks);
  const [field, setField] = useState(fields);
  const [selectedField, setSelectedField] = useState([]);
  const [subFilter, setSubFilter] = useState([]);
  const [selectedSubDropdown, setSelectedSubDropdown] = useState([]);
  const [search, setSearch] = useState("");
  const [searchContent, setSearchContent] = useState("");
  const [myBool, setMyBool] = useState(false);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  console.log("selectedSubDropdown", selectedSubDropdown);
  console.log("subFilter", subFilter);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        task,
        setTask,
        field,
        setField,
        selectedField,
        setSelectedField,
        subFilter,
        setSubFilter,
        selectedSubDropdown,
        setSelectedSubDropdown,
        search,
        setSearch,
        searchContent,
        setSearchContent,
        myBool,
        setMyBool,
        count,
        setCount,
        visible,
        setVisible
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
