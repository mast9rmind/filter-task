import React, { Fragment, useCallback, useContext } from "react";
import {
  Dropdown,
  Modal,
} from "flowbite-react";
import DataContext from "../store/list-context";
import Search from "../search/Search";

function FilterDropdown() {
  const {
    task,
    user,
    count,
    setCount,
    field,
    selectedField,
    setSelectedField,
    search,
    searchContent,
    setSearchContent,
    setMyBool,
    setSubFilter,
    visible,
    setVisible,
    filter,
    setFilter
  } = useContext(DataContext);

  const assigneeHandler = (event) => {
    setMyBool(true);
    const assigneeData = user.map((item) => {
      return {
        itemSubFilter: item.name,
        id: item.id,
      };
    });

    setSubFilter(assigneeData);
    setSelectedField([...selectedField, event.target.innerText]);
    setCount(count + 1);
  };

  const labelHandler = (event) => {
    setMyBool(true);
    const labelData = task.map((item) => {
      return {
        itemSubFilter: item.label,
        id: item["assignee id"],
      };
    });

    setSubFilter(labelData);
    setSelectedField([...selectedField, event.target.innerText]);
    setCount(count + 1);
  };

  const prioritiesHandler = (event) => {
    setMyBool(true);
    const prioritiesData = task.map((item) => {
      return {
        itemSubFilter: item.priorities,
        id: item["assignee id"],
      };
    });
    setSubFilter(prioritiesData);
    setSelectedField([...selectedField, event.target.innerText]);
    setCount(count + 1);
  };

  console.log("sf", selectedField)

  const searchFilterDropdown = field.filter((filterDropdown) =>
    filterDropdown.toLocaleLowerCase().includes(search)
  );

  const searchHandler = (event) => {
    setMyBool(false)
    setVisible(true)
    setFilter([...filter, event.target.innerText])
  };

  const dropdown = searchFilterDropdown.map((item) => {
    let onClickHandler;

    switch (item) {
      case "Description":
        onClickHandler = searchHandler;
        break;
      case "Priorities":
        onClickHandler = prioritiesHandler;
        break;
      case "Label":
        onClickHandler = labelHandler;
        break;
      case "Assignee":
        onClickHandler = assigneeHandler;
        break;
      default:
        onClickHandler = () => {};
    }
    return (
      <Dropdown.Item
        key={item}
        onClick={onClickHandler}
        className="hover:rounded-lg"
      >
        {item}
      </Dropdown.Item>
    );
  });

  return (
    <Fragment>
      <Search />
      {dropdown}
      {/* <React.Fragment>
        <Modal
          show={visible}
          size="md"
          popup={true}
          onClose={() => setVisible(false)}
        >
          <Modal.Header />
          <Modal.Body>

          </Modal.Body>
        </Modal>
      </React.Fragment> */}
    </Fragment>
  );
}

export default FilterDropdown;
