import React, { useState, useEffect } from "react";

import PlacesAutocomplete from "react-places-autocomplete";

import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [address, setAddress] = useState("");
  const [hashloc, setHashloc] = useState(window.location.hash);

  const handleSelect = (value, id, obj) => {
    setAddress(value);
    if(obj) {
      props.getData({
        city: obj.terms[0].value,
        country: obj.terms[obj.terms.length - 1].value
      });
    }
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
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={{ types: ["(cities)"] }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className={styles.container}>
              <input {...getInputProps({ placeholder: "Anywhere..." })} />
              <div className={styles.search}></div>
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
    </div>
  );
};

export default SearchBar;
