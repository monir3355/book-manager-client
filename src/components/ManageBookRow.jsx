import React from "react";
import { Link } from "react-router-dom";

const ManageBookRow = ({ book, count, handleDelete }) => {
  const {
    authorName,
    bookName,
    bookPdfUrl,
    categoryName,
    imageUrl,
    metaTextDescription,
    _id,
  } = book;
  return (
    <tr>
      <th scope="row">{count + 1}</th>
      <td>{authorName}</td>
      <td>{bookName}</td>
      <td>{categoryName}</td>
      <td>
        <button onClick={() => handleDelete(_id)}>Delete</button>
        <button>
          <Link to={`/admin/dashboard/edit-books/${_id}`}>Update</Link>
        </button>
      </td>
    </tr>
  );
};

export default ManageBookRow;
