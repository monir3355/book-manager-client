import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditBooks = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  // const [update, setUpdate] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/allBooks")
      .then((res) => res.json())
      .then((data) => {
        const book = data.find((bk) => bk._id === id);
        setBook(book);
      });
  }, []);
  // console.log(book);
  const {
    bookName,
    authorName,
    imageUrl,
    categoryName,
    metaTextDescription,
    bookPdfUrl,
  } = book;
  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const categoryName = form.categoryName.value;
    const metaTextDescription = form.metaTextDescription.value;
    const bookPdfUrl = form.bookPDF.value;

    const dataObj = {
      bookName,
      authorName,
      imageUrl,
      categoryName,
      metaTextDescription,
      bookPdfUrl,
    };
    // console.log(dataObj);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully Update your book",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="ms-3">
      <h2>edit books</h2>
      <div className="p-3 bg-light">
        <form
          onSubmit={handleSubmit}
          className="row g-3"
          // encType="multipart/form-data"
        >
          <div className="col-md-6">
            <label htmlFor="bookName" className="form-label">
              Book Name
            </label>
            <input
              type="name"
              defaultValue={bookName}
              name="bookName"
              className="form-control"
              id="bookName"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="authorName" className="form-label">
              Author Name
            </label>
            <input
              type="name"
              defaultValue={authorName}
              name="authorName"
              className="form-control"
              id="authorName"
            />
          </div>
          <div className="col-12">
            <label htmlFor="imageUrl" className="form-label">
              Book Image URL
            </label>
            <input
              type="url"
              defaultValue={imageUrl}
              name="imageUrl"
              className="form-control"
              id="imageUrl"
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select
              onChange={handleChangeSelectedValue}
              id="inputState"
              name="categoryName"
              className="form-select"
              value={selectedBookCategory}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-8">
            <label htmlFor="metaTextDescription" className="form-label">
              Meta description
            </label>
            <textarea
              type="text"
              defaultValue={metaTextDescription}
              className="form-control"
              name="metaTextDescription"
              id="metaTextDescription"
            />
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Insert pdf link of the book
              </label>
              <input
                name="bookPDF"
                defaultValue={bookPdfUrl}
                className="form-control"
                type="url"
                id="formFile"
              />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Upload book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBooks;
