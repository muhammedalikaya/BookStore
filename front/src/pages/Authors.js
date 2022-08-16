import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export default function Authors() {
	  const navigate = useNavigate()
  return (
    <>
		<Header />
    	<main className="main">
		<div className="container">
			<div className="row row--grid">

				<div className="col-12">
					<ul className="breadcrumb">
						<li className="breadcrumb__item"><a onClick={() => navigate("/")}>Home</a></li>
						<li className="breadcrumb__item breadcrumb__item--active">Authors</li>
					</ul>
				</div>

				<div className="col-12">
					<div className="main__title main__title--page">
						<h1>Authors</h1>
					</div>
				</div>

				<div className="col-12">
					<div className="main__filter">
						<form action="#" className="main__filter-search">
							<input type="text" placeholder="Search for a creator…"/>
							<button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg></button>
						</form>

						<div className="main__filter-wrap">
							<select className="main__select" name="status">
								<option value="rating">By rating</option>
								<option value="views">By views</option>
								<option value="popularity">By popularity</option>
							</select>

							<select className="main__select" name="authors">
								<option value="0">All Authors</option>
								<option value="1">Verified only</option>
							</select>
						</div>
					</div>
				</div>
		
			</div>

			<div className="row row--grid">
				<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
					<div className="author">
						<a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small.png">
						</a>
						<div className="author__meta">
							<a href="author.html" className="author__avatar author__avatar--verified">
								<img src="img/avatars/avatar.jpg" alt=""/>
							</a>
							<h3 className="author__name"><a href="author.html">Adam Zapel</a></h3>
							<h3 className="author__nickname"><a href="author.html">@aaarthur</a></h3>
							<p className="author__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
							<div className="author__wrap">
								<div className="author__followers">
									<p>3829</p>
									<span>Followers</span>
								</div>
								<button className="author__follow" type="button">Follow</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
					<div className="author">
						<a href="author.html" className="author__cover">
						</a>
						<div className="author__meta">
							<a href="author.html" className="author__avatar author__avatar--verified">
								<img src="img/avatars/avatar2.jpg" alt=""/>
							</a>
							<h3 className="author__name"><a href="author.html">Barb E. Dahl</a></h3>
							<h3 className="author__nickname"><a href="author.html">@nicky87</a></h3>
							<p className="author__text">If you are going to use a passage of Lorem Ipsum</p>
							<div className="author__wrap">
								<div className="author__followers">
									<p>4602</p>
									<span>Followers</span>
								</div>
								<button className="author__follow" type="button">Follow</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
					<div className="author">
						<a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small2.png">
						</a>
						<div className="author__meta">
							<a href="author.html" className="author__avatar author__avatar--verified">
								<img src="img/avatars/avatar3.jpg" alt=""/>
							</a>
							<h3 className="author__name"><a href="author.html">Biff Wellington</a></h3>
							<h3 className="author__nickname"><a href="author.html">@neo</a></h3>
							<p className="author__text">Many desktop publishing packages and web page editors now use Lorem</p>
							<div className="author__wrap">
								<div className="author__followers">
									<p>1294</p>
									<span>Followers</span>
								</div>
								<button className="author__follow author__follow--true" type="button">Unfollow</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
					<div className="author">
						<a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small3.png">
						</a>
						<div className="author__meta">
							<a href="author.html" className="author__avatar author__avatar--verified">
								<img src="img/avatars/avatar4.jpg" alt=""/>
							</a>
							<h3 className="author__name"><a href="author.html">Charity Case</a></h3>
							<h3 className="author__nickname"><a href="author.html">@midinh</a></h3>
							<p className="author__text">There are many variations of passages of Lorem Ipsum</p>
							<div className="author__wrap">
								<div className="author__followers">
									<p>10 845</p>
									<span>Followers</span>
								</div>
								<button className="author__follow" type="button">Follow</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
					<div className="author">
						<a href="author.html" className="author__cover"></a>
						<div className="author__meta">
							<a href="author.html" className="author__avatar author__avatar--verified">
								<img src="img/avatars/avatar5.jpg" alt=""/>
							</a>
							<h3 className="author__name"><a href="author.html">Don Key</a></h3>
							<h3 className="author__nickname"><a href="author.html">@kateblank</a></h3>
							<p className="author__text">The generated Lorem Ipsum is therefore always free from repetition</p>
							<div className="author__wrap">
								<div className="author__followers">
									<p>9713</p>
									<span>Followers</span>
								</div>
								<button className="author__follow" type="button">Follow</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
					<div className="author">
						<a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small4.png">
						</a>
						<div className="author__meta">
							<a href="author.html" className="author__avatar author__avatar--verified">
								<img src="img/avatars/avatar6.jpg" alt=""/>
							</a>
							<h3 className="author__name"><a href="author.html">Mona Lott</a></h3>
							<h3 className="author__nickname"><a href="author.html">@fantraingle</a></h3>
							<p className="author__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
							<div className="author__wrap">
								<div className="author__followers">
									<p>5 924</p>
									<span>Followers</span>
								</div>
								<button className="author__follow" type="button">Follow</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
					<div className="author">
						<a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small5.png">
						</a>
						<div className="author__meta">
							<a href="author.html" className="author__avatar">
								<img src="img/avatars/avatar7.jpg" alt=""/>
							</a>
							<h3 className="author__name"><a href="author.html">Orson Carte</a></h3>
							<h3 className="author__nickname"><a href="author.html">@sc00ty</a></h3>
							<p className="author__text">It is a long established fact that a reader will be distracted</p>
							<div className="author__wrap">
								<div className="author__followers">
									<p>11 342</p>
									<span>Followers</span>
								</div>
								<button className="author__follow" type="button">Follow</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
					<div className="author">
						<a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small6.png">
						</a>
						<div className="author__meta">
							<a href="author.html" className="author__avatar author__avatar--verified">
								<img src="img/avatars/avatar8.jpg" alt=""/>
							</a>
							<h3 className="author__name"><a href="author.html">Ray Gunn</a></h3>
							<h3 className="author__nickname"><a href="author.html">@justart</a></h3>
							<p className="author__text">All the Lorem Ipsum generators on the Internet</p>
							<div className="author__wrap">
								<div className="author__followers">
									<p>1245</p>
									<span>Followers</span>
								</div>
								<button className="author__follow" type="button">Follow</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row row--grid">
				<div className="col-12">
					<div className="paginator">
						<span className="paginator__pages">8 from 169</span>

						<ul className="paginator__list">
							<li>
								<a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/></svg></a>
							</li>
							<li className="active"><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li>
								<a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
		</div>
	</main>
	<Footer/>
    
    </>
  )
}
