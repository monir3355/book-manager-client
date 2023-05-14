import React, { useEffect, useState } from "react";
import ManageBookRow from "./ManageBookRow";
import Swal from "sweetalert2";

const ManageBookTable = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/allBooks")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, [update]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/book/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUpdate(!update);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Author Name</th>
            <th scope="col">Book Name</th>
            <th scope="col">Category Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book, count) => (
            <ManageBookRow
              key={book._id}
              book={book}
              count={count}
              handleDelete={handleDelete}
            ></ManageBookRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;
