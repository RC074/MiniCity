import React, { useState, useEffect } from "react";

import Script from "react-load-script";
import Geocode from "react-geocode";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [address, setAddress] = useState("");
  const [hashloc, setHashloc] = useState(window.location.hash);
  const [scriptLoad, setScriptLoad] = useState(false);

  const handleSelect = async (value, id, obj) => {
    setAddress(value);
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);
    if (obj !== null) {
      Geocode.setApiKey("AIzaSyC9lbeOtWeYfIXDmkRxeSG6GyWv9GkTyhc");
      let province = await Geocode.fromLatLng(lat, lng);
      props.getData({
        city: obj.terms[0].value,
        country: obj.terms[obj.terms.length - 1].value,
        province:
          province.results[province.results.length - 2].address_components[0]
            .long_name,
        lat: lat,
        lng: lng,
      });
    }
  };

  const handlePlacesError = (error) => {
    console.log(error);
  };

  const handleDelete = () => {
    setAddress("");
  };

  const handleScriptLoad = () => {
    setScriptLoad(true);
  };

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHashloc(window.location.hash);
    });
  });

  return (
    <div
      style={{
        visibility: hashloc === "#t1" || hashloc === "" ? "initial" : "hidden",
        opacity: hashloc === "#t1" || hashloc === "" ? 1 : 0,
        transition: "visibility 0s, opacity 1s linear",
      }}
    >
      <Script
        url={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_G_API}&libraries=places`}
        onLoad={handleScriptLoad}
      />
      {scriptLoad ? (
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onError={(error) => handlePlacesError(error)}
          onSelect={handleSelect}
          searchOptions={{ types: ["(cities)"] }}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <div className={styles.container}>
                <input {...getInputProps({ placeholder: "Anywhere..." })} />
                <div
                  className={styles.search}
                  onClick={() => handleDelete()}
                ></div>
              </div>

              <div className={styles.dropdownMenu}>
                {loading ? (
                  <div className={styles.loading}>...loading</div>
                ) : null}

                {suggestions.map((suggestion, i) => {
                  const className = suggestion.active
                    ? "suggestionitemActive"
                    : "suggestionItem";
                  let style = {
                    padding: "15px",
                    backgroundColor: "transparent",
                    transition: "0.2s",
                    fontFamily: '"Inconsolata", monospace',
                  };
                  if (className === "suggestionitemActive") {
                    style["borderLeft"] = "10px solid rebeccapurple";
                  }
                  if (i === 0) {
                    style["paddingTop"] = "40px";
                  }
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, { style })}
                      key={i}
                    >
                      {suggestion.formattedSuggestion.mainText +
                        " " +
                        suggestion.formattedSuggestion.secondaryText}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      ) : null}
    </div>
  );
};

export default SearchBar;
