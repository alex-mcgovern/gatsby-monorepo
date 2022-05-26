import React from "react";
import ReadingListItem from "../reading_list_item/reading_list_item";
import * as classes from "./reading_list_kanban.module.scss";

const READING_LIST_MOCK = {
  toDo: [
    {
      title: "Foo",
      url: "https://google.com",
    },
    {
      title: "Foo",
      url: "https://google.com",
    },
    {
      title: "Foo",
      url: "https://google.com",
    },
  ],
  inProgress: [
    {
      title: "Foo",
      url: "https://google.com",
    },
    {
      title: "Foo",
      url: "https://google.com",
    },
    {
      title: "Foo",
      url: "https://google.com",
    },
  ],
  done: [
    {
      title: "Foo",
      url: "https://google.com",
    },
    {
      title: "Foo",
      url: "https://google.com",
    },
    {
      title: "Foo",
      url: "https://google.com",
    },
  ],
};

interface ReadingListKanbanProps {}

export default function ReadingListKanban({}: ReadingListKanbanProps) {
  return (
    <section className={classes.reading_list_wrapper}>
      <div>
        {READING_LIST_MOCK.toDo.map((item) => {
          return <ReadingListItem title={item.title} />;
        })}
      </div>
      <div>
        {READING_LIST_MOCK.inProgress.map((item) => {
          return <ReadingListItem title={item.title} />;
        })}
      </div>
      <div>
        {READING_LIST_MOCK.done.map((item) => {
          return <ReadingListItem title={item.title} />;
        })}
      </div>
    </section>
  );
}

ReadingListKanban.defaultProps = {};
