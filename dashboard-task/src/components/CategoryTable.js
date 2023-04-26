import { useState, useEffect } from "react";
import { deleteCategory, getCategories } from "../api/category";
import { categoryHeader } from "../constant";
import { TableHeader } from "./TableHeader";

export const CategoryTable = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    getCategories(function (res) {
      setCategory(res?.data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteCategory(id);
    setCategory(category.filter((user) => user._id !== id));
  };
  return (
    <table className="table table-bordered">
      <TableHeader data={categoryHeader} />
      <tbody>
        {category?.map((item, index) => (
          <tr key={item._id}>
            <th scope="row">{index}</th>
            <td>{item?.name ?? ""}</td>
            <td>{item?.description ?? ""}</td>

            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
