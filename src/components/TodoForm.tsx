const TodoForm = () => {
  return (
    <section className="bg-white">
      <div className="max-w-3xl px-6 py-4 mx-auto text-center">
        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
          <input
            id="text"
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Your Task"
          />

          <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            create task
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoForm;
