import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
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
    <div className="mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{authorName}</h5>
              <h6 className="card-title">{bookName}</h6>
              <p className="card-text">{metaTextDescription}</p>
              <p className="card-text">Book PDF: {bookPdfUrl}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
