import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBooks } from "../../store/actions/bookActions";
import AuthorList from "../authorList/AuthorList";

export default function BooksSlider() {
  const { books } = useSelector((state) => state.book);
  const bookDispatch = useDispatch();

  useEffect(() => {
    bookDispatch(getAllBooks());
  }, []);

  return (
    <>
      <div className="container">
        <section className="row row--grid">
          <div className="col-12">
            <div className="main__title main__title--center">
              <h2>Explore exclusive books</h2>
            </div>
          </div>

          {books.map((book) => {
            const { id, title, price, publisher, category, bookAuthors } = book;
            return (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={id}>
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
								<button className="author__follow" type="button">Add to Cart</button>
							</div>


                  
                </div>
              </div>
            );
          })}

        </section>
      </div>
    </>
  );
}
