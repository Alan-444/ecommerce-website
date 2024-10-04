import React, { Fragment, useEffect, useState } from "react";
import styles from "./style.module.css";
import PincodeData from "../../jsonData/pinCodeData.json";
import LocationIcon from "../../icons/locationIcon";
import SearchLocationIcon from "../../icons/searchLocationIcon";
import NotFoundLocationIcon from "../../icons/notFoundLocationIcon";
import CloseIcon from "../../icons/closeIcon";

const LocationData = () => {
  const [openDataBar, setOpenDataBar] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredLocation, setFilteredLocation] = useState([]);
  const [select, setSelect] = useState("");

  const toggleDropdown = () => {
    setOpenDataBar(!openDataBar);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const filterLocations = (query) => {
    const filtered = PincodeData.filter(
      (item) =>
        item.code.includes(query) ||
        item.area.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLocation(filtered);
  };

  const debouncedFilterLocations = debounce(filterLocations, 300);

  useEffect(() => {
    debouncedFilterLocations(search);
  }, [search, debouncedFilterLocations]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const clearSearch = () => {
    setSearch("");
  };

  const handleSelectSearch = (item) => {
    setSelect(`${item.Pincode} : ${item.PostOfficeName}`);
    clearSearch();
  };

  return (
    <Fragment>
      <div className={styles.deliveryall}>
        <div className={styles.delivery} onClick={toggleDropdown}>
          <div className={styles.icon}>
            <LocationIcon />
          </div>
          <div className={styles.d_address}>
            Deliver to <br /> <span>{select || "all locations"} </span>
          </div>
        </div>
        {openDataBar && (
          <div className={styles.location_dropdown}>
            <div className={styles.searchInput}>
              <input
                type="text"
                // value={search}
                onChange={handleInputChange}
                placeholder="Enter area or pincode"
                className={styles.search_input}
              />
              <span className={styles.clearIcon} onClick={clearSearch}>
                <CloseIcon />
              </span>
            </div>
            <div className={styles.location_list}>
              {search.length === 0 && (
                <div className={styles.start_typing}>
                  <SearchLocationIcon />
                  "Search your location"
                </div>
              )}
              {filteredLocation.length === 0 && (
                <div className={styles.no_results}>
                  <NotFoundLocationIcon />
                  No results found
                </div>
              )}
              {filteredLocation.length > 0 && search.length > 0 && (
                <>
                  {filteredLocation.map((pincode, index) => (
                    <div
                      key={index}
                      className={styles.location_item}
                      onClick={() => handleSelectSearch(pincode)}
                    >
                      {pincode.code}- {pincode.area}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LocationData;
