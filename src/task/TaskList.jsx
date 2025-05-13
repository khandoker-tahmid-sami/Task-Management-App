import { FaStar } from "react-icons/fa";

const TaskList = ({ task, onEdit, onDelete, onFav }) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="p-2 pb-4 text-sm font-semibold capitalize w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"></th>
            <th className="p-2 pb-4 text-sm font-semibold capitalize w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
              {" "}
              Title{" "}
            </th>
            <th className="p-2 pb-4 text-sm font-semibold capitalize w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
              {" "}
              Description{" "}
            </th>
            <th className="p-2 pb-4 text-sm font-semibold capitalize w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
              {" "}
              Tags{" "}
            </th>
            <th className="p-2 pb-4 text-sm font-semibold capitalize w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
              {" "}
              Priority{" "}
            </th>
            <th className="p-2 pb-4 text-sm font-semibold capitalize w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {task.map((task) => (
            <tr
              key={task.id}
              className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
            >
              <td>
                <button onClick={() => onFav(task.id)}>
                  {task.isFavorite ? (
                    <FaStar className="text-yellow-300" />
                  ) : (
                    <FaStar className="text-gray-300" />
                  )}
                </button>
              </td>
              <td>{task.title}</td>
              <td>
                <div>{task.description}</div>
              </td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">{task.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onEdit(task)}
                    className="text-blue-500"
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
