import { Slider } from "@mui/material";
import { useProduct } from "context/productContext";
import "./sidebar.css";
export const Sidebar = () => {
  const {
    filterByRatings,
    sortByCategory,
  } = useProduct();
  return (
    <>
      <aside>
        <div className="aside-container aside-header">
          <div className="filter-btn">
            <i className="fa fa-filter"></i>
            <span> Clear</span> <span>Filters</span>
          </div>
          <div className="sort-btn">
            <span>Sort by</span>
            <select name="" id="">
              <option
                value="most-popular"
                onClick={(e) => sortByCategory(e.target.value)}
              >
                Most Popular
              </option>
              <option
                value="high-rated"
                onClick={(e) => sortByCategory(e.target.value)}
              >
                High Rated
              </option>
              <option
                value="newest"
                onClick={(e) => sortByCategory(e.target.value)}
              >
                Newest
              </option>
            </select>
          </div>
        </div>

        <div className="aside-container">
          <h3>Ratings</h3>
          <Slider
            aria-label="ratings"
            defaultValue={3}
            valueLabelDisplay="auto"
            marks
            min={1}
            step={1}
            max={5}
            onChange={(e) => filterByRatings(e.target.value)}
          />
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
