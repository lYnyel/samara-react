export default function form() {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="py-20">
          <div className="font-bold text-3xl text-center">Отправь форму</div>
          <form className="lg:flex lg:flex-col items-center py-8">
            <label className="items-center mb-4">
              <div className="flex gap-4 flex-col lg:flex-row">
                <input
                  className="bg-gray-200 py-2 pe-10 ps-4 rounded"
                  placeholder="Имя"
                ></input>
                <input
                  className="bg-gray-200 py-2 pe-10 ps-4 rounded"
                  placeholder="Телефон"
                ></input>
              </div>
              <div
                className="pt-4 lg:flex justify-between
            "
              >
                <div className="lg:flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">
                    Согласен, отказываюсь
                  </span>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-5 lg:mt-0 max-lg:w-full"
                >
                  Submit
                </button>
              </div>
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
