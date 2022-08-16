import React, { useEffect } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllBooks,
  getBooksByCategoryId,
} from "../store/actions/bookActions";
import { getAllCategories } from "../store/actions/categoryActions";
import { useParams } from "react-router-dom";
import AuthorList from "../components/authorList/AuthorList";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.category);
  const { books } = useSelector((state) => state.book);
  const bookdispatch = useDispatch();
  const categorydispatch = useDispatch();

  useEffect(() => {
    bookdispatch(getAllBooks())
    categorydispatch(getAllCategories());
  }, []);

  const handleClick = (id) => {
    bookdispatch(getBooksByCategoryId(id));
    console.log(books);
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <div className="row row--grid">
            <div className="col-12">
              <ul className="breadcrumb">
                <li className="breadcrumb__item">
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li className="breadcrumb__item breadcrumb__item--active">
                  Explore
                </li>
              </ul>
            </div>

            <div className="col-12">
              <div className="main__title main__title--page">
                <h1>Explore exclusive digital assets</h1>
              </div>
            </div>

            <div className="col-12">
              <ul
                className="nav nav-tabs main__tabs"
                id="main__tabs"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link "
                    data-toggle="tab"
                    //onclick state getallbooks
                    onClick={() => bookdispatch(getAllBooks())}
                    href="#tab-1"
                    role="tab"
                    aria-controls="tab-1"
                    aria-selected="false"
                  >
                    All
                  </a>
                </li>

                {categories.map((category) => {
                  return (
                    <li className="nav-item" key={category.id}>
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href={`#tab-${category.id}`}
                        role="tab"
                        aria-controls={`tab-${category.id}`}
                        aria-selected="false"
                        onClick={() => handleClick(category.id)}
                      >
                        {category.categoryName}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="tab-content">
            {categories.map((category) => {
              return (
                <div
                  className={`tab-pane fade `+ (category.id === 7 ? "show active" : "")}
                  id={`tab-${category.id}`}
                  key={category.id}
                  role="tabpanel"
                  aria-labelledby={`tab-${category.id}`}>
                
                  <div className="row row--grid">
                    {books.map((book) => {
                      const {
                        id,
                        title,
                        price,
                        publisher,
                        category,
                        bookAuthors,
                      } = book;
                      return (
                        <div
                          className="col-12 col-sm-6 col-lg-4 col-xl-3"
                          key={id}
                        >
                          <div className="card">
                            <a href="item.html" className="card__cover">
                              <img src={`/books/${id % 121}.jpg`} alt="" />
                            </a>
                            <h3 className="card__title">
                              <a href="item.html">{title}</a>
                            </h3>
                            <h3 className="card__authors">
                              <AuthorList authors={bookAuthors} />
                            </h3>
                            <div className="author__wrap">
                              <div className="author__followers">
                                <p>$ {price}</p>
                                <span>Price</span>
                              </div>
                              <button className="author__follow" type="button">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
