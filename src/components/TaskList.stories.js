//src/components/TaskList.stories.js
import TaskList from "./TaskList";
import { taskData, actionsData } from "./Task.stories";

const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story/></div>',
  };
};
export default {
  title: "TaskList",
  excludeStories: /.*Data$/,
  // 데코레이터 는 스토리에 임의의 래퍼를 제공하는 방법입니다. 이 경우 기본 내보내기에서 데코레이터 키를 사용하여 스타일을 추가합니다. 그러나 나중에 볼 수 있듯이 구성 요소에 다른 컨텍스트를 추가하는 데에도 사용할 수 있습니다.
  decorators: [paddedList],
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" },
];
export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

// default TaskList state
export const Default = () => ({
  components: { TaskList },
  template: `<task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  props: {
    tasks: {
      default: () => defaultTasksData,
    },
  },
  methods: actionsData,
});
// tasklist with pinned tasks
export const WithPinnedTasks = () => ({
  components: { TaskList },
  template: `<task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  props: {
    tasks: {
      default: () => withPinnedTasksData,
    },
  },
  methods: actionsData,
});
// tasklist in loading state
export const Loading = () => ({
  components: { TaskList },
  template: `<task-list loading @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  methods: actionsData,
});
// tasklist no tasks
export const Empty = () => ({
  components: { TaskList },
  template: `<task-list @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  methods: actionsData,
});
