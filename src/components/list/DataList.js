import React, { useContext, useEffect } from "react";
import { Fragment } from "react";
import { Table } from "flowbite-react";
import DataContext from "../store/list-context";

function DataList() {
  const {
    task,
    user,
    searchContent,
    setSearchContent,
    visible,
    setVisible,
    selectedSubDropdown,
    filter,
    setFilter
  } = useContext(DataContext);

  const updatedTaskObj = task.map((task) => {
    const names = task["assignee id"].map((assigneeId) => {
      const { name } = user.find((user) => user.id === assigneeId);
      return name;
    });
    return { ...task, names };
  });

  // const filteredTasks = updatedTaskObj.filter(
  //   (task) =>
  //     selectedSubDropdown.includes(task.label) ||
  //     selectedSubDropdown.includes(task.priorities) ||
  //     task.names.some((name) => selectedSubDropdown.includes(name)) &&
  //     task.description.toLocaleLowerCase().includes(searchContent)
  // );

  const filteredTasks =
  selectedSubDropdown.length > 0
    ? updatedTaskObj.filter(
        (task) =>
          (selectedSubDropdown.includes(task.label) ||
          selectedSubDropdown.includes(task.priorities) ||
          task.names.some((name) => selectedSubDropdown.includes(name)))
      )
    : updatedTaskObj;

    // setFilter(filteredTasks)

    // useEffect(() =>    setFilter(filteredTasks),  []   )

  //   const searchFilter = updatedTaskObj.filter((filter) =>
  //   filter.description.toLocaleLowerCase().includes(searchContent)
  // );

  const searchFilter =
 filteredTasks.filter(
        (task) =>
        task.description.toLocaleLowerCase().includes(searchContent)
      )
  // setFilter(searchFilter)

  // useEffect(() =>    setFilter(searchFilter),  []   )


  const searchContentHandler = (event) => setSearchContent(event.target.value);

  const closeSearch = () =>     setVisible(false)

  // const filteredTasks = updatedTaskObj.filter(
  //   (task) =>
  //     (selectedSubDropdown.length === 0 ||
  //       selectedSubDropdown.includes(task.label)) &&
  //     (selectedSubDropdown.length === 0 || selectedSubDropdown.includes(task.priorities)) &&
  //     (selectedSubDropdown.length === 0 || task.names.some((name) => selectedSubDropdown.includes(name))
  // ));

  // console.log(filteredTasks, updatedTaskObj);

  return (
    <Fragment>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Task name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Priorities</Table.HeadCell>
          <Table.HeadCell>Label</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Assignee</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {selectedSubDropdown.length > 0 ?     filteredTasks.map((item) => (
      <Table.Row
        key={item["assignee id"]}
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {item["task name"]}
        </Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>{item.date}</Table.Cell>
        <Table.Cell>{item.priorities}</Table.Cell>
        <Table.Cell>{item.label}</Table.Cell>
        <Table.Cell>
          {item.names.map((i, idx) => (
            <span className="mx-2" key={idx}>
              {i}
            </span>
          ))}
        </Table.Cell>
      </Table.Row>
    )):     searchFilter.map((item) => (
      <Table.Row
        key={item["assignee id"]}
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {item["task name"]}
        </Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>{item.date}</Table.Cell>
        <Table.Cell>{item.priorities}</Table.Cell>
        <Table.Cell>{item.label}</Table.Cell>
        <Table.Cell>
          {item.names.map((i, idx) => (
            <span className="mx-2" key={idx}>
              {i}
            </span>
          ))}
        </Table.Cell>
      </Table.Row>
    ))}
        </Table.Body>
      </Table>
      {visible ? (
        <div className="rounded-md border-gray-300 w-fit p-4 my-8 mx-auto shadow-xl shadow-gray-300 grid gap-2 justify-items-end">
          <button onClick={closeSearch}>
            {" "}
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <input
            onChange={searchContentHandler}
            type="text"
            placeholder="Search..."
            className="border-none focus:shadow-[0_0_rgba(0,0,0/0%)] p-2 w-full bg-gray-100 rounded-md"
          />
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default DataList;
