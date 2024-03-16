import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Menu = () => {
  //input text
  const [menu, setMenu] = useState("");
  // array list of menu items
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    let menuString = localStorage.getItem("menus");
    if (menuString) {
      let storedMenus = JSON.parse(menuString);
      setMenus(storedMenus);
    }
  }, []);

  const saveMenusToLocalStorage = (menus) => {
    localStorage.setItem("menus", JSON.stringify(menus));
  };

  const handleEdit = (e, id) => {
    let selectedMenu = menus.find((item) => item.id === id);
    setMenu(selectedMenu.menu);
    let updatedMenus = menus.filter((item) => item.id !== id);
    setMenus(updatedMenus);
  };

  const handleDelete = (e, id) => {
    let updatedMenus = menus.filter((item) => item.id !== id);
    setMenus(updatedMenus);
    saveMenusToLocalStorage(updatedMenus); // Update local storage after deleting
  };

  const handleAdd = () => {
    if (menu.trim() === "") return; // Check if the input is empty
    const newMenus = [...menus, { id: uuidv4(), menu }];
    setMenus(newMenus);
    saveMenusToLocalStorage(newMenus); // Update local storage after adding
    setMenu("");
  };

  const handleChange = (e) => {
    setMenu(e.target.value);
  };

  return (
    <div className="body bg-orange-100 ">
      <div className="container mx-auto my-10 bg-orange-200 min-h-[80vh] w-1/2 p-6 rounded-lg shadow-lg">
        <div className="addmenu mt-10 text-center">
          <h2 className="text-lg font-bold mt-10">Add Items</h2>
          <input
            name={menu.id}
            onChange={handleChange}
            value={menu}
            type="text"
            className="my-10 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAdd}
            className="bg-orange-300 hover:bg-green-600 mx-4 text-sm font-bold px-3 py-2 rounded-md"
          >
            Save
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold">Your Items</h2>

          <div className="menus mt-4">
            {menus.length === 0 && (
              <div className="text-gray-600">No items to display</div>
            )}
            {menus.map((item) => {
              return (
                <div
                  key={item.id}
                  className="menu flex w-full justify-between bg-gray-100 p-4 my-2 rounded-md"
                >
                  <div className="text">{item.menu}</div>
                  <div className="buttons flex">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-orange-300 hover:bg-orange-400 mx-2 text-sm font-bold px-3 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-orange-300 hover:bg-red-400 mx-2 text-sm font-bold px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;