import axios from "axios";
import React, { useEffect, useState } from "react";

const EditBilgi = ({ edit, getTutorials }) => {
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  const { id, title: oldTitle, description: oldDesc } = edit;
  const [title, setTitle] = useState(oldTitle);
  const [desc, setDesc] = useState(oldDesc);
  useEffect(() => {
    setTitle(oldTitle);
    setDesc(oldDesc);
  }, [oldTitle, oldDesc]);
  const putInfo = async (data) => {
    try {
      await axios.put(`${BASE_URL}${id}/`, data);
    } catch (error) {
    } finally {
      getTutorials();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    putInfo({ title, description: desc });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="editModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Enter your title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    id="Description"
                    className="form-control"
                    placeholder="Enter your description"
                    required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBilgi;
