import './sidebar.css'
export const Sidebar = () => {
  return (
    <>
      <aside>
        <div className="aside-container aside-header">
          <div className="filter-btn">
            <i className="fa fa-filter"></i>
            <span>Filter</span>
          </div>
          <div className="sort-btn">
            <span>Sort by</span>
            <select name="" id="">
              <option value="most-popular">Most Popular</option>
              <option value="high-rated">High Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="aside-container">
          <h3>Ratings</h3>
          <div className="aside-content">
            <div className="aside-row">
              <input type="radio" name="" id="" />
              <label>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <span className="row-data">4.5 &amp; up </span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>

            <div className="aside-row">
              <input type="radio" name="" id="" />
              <label>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <span className="row-data">4.5 &amp; up </span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="radio" name="" id="" />
              <label>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <span className="row-data">4.5 &amp; up </span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="radio" name="" id="" />
              <label>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <span className="row-data">4.5 &amp; up </span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
          </div>
        </div>

        <div className="aside-container">
          <h3>Video Duration</h3>
          <div className="aside-content">
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">0-1 Hours</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>

            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">1-3 Hours</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">3-6 Hours</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">9-17 Hours</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">17+ Hours</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
          </div>
        </div>

        <div className="aside-container">
          <h3>Topic</h3>
          <div className="aside-content">
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">Web Development</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>

            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">JavaScript</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">WordPress</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">PHP</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">React</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">CSS</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">HTML</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">Python</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
          </div>
        </div>

        <div className="aside-container">
          <h3>Level</h3>
          <div className="aside-content">
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">All Levels</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>

            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">Beginner</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">Intermediate</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">Expert</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
          </div>
        </div>

        <div className="aside-container">
          <h3>Price</h3>
          <div className="aside-content">
            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">Free</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>

            <div className="aside-row">
              <input type="checkbox" name="" id="" />
              <label>
                <span className="row-data">Paid</span>
                <span className="row-data-num">( 4,252 )</span>
              </label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
