import { useMap } from "react-leaflet";
import { floorsData } from "../data/floorsData";
import { useEffect, useState } from "react";
import { icons } from "../data/iconsData";
import { IoSearchOutline } from "react-icons/io5";
import { MarkerData } from "../data/MarkerData";
import { RxCross1 } from "react-icons/rx";

interface Props {
  markers: MarkerData[];
  isSearchActive: boolean;
  onSearchActive: (status: boolean) => void;
  onFloorChange: (floor: keyof typeof floorsData) => void;
  onSideBarActive: () => void;
}

const SearchBar = ({
  markers,
  isSearchActive,
  onSearchActive,
  onFloorChange,
  onSideBarActive,
}: Props) => {
  const map = useMap();

  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<MarkerData[]>([]);

  useEffect(() => {
    if (isSearchActive) {
      map.dragging.disable();
    } else {
      map.dragging.enable();
    }
  }, [isSearchActive]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filteredResults = markers.filter((marker) =>
        marker.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleClick = (marker: MarkerData) => {
    const floorKey = Object.keys(floorsData).find((key) =>
      floorsData[key].some((m) => m.name === marker.name)
    ) as keyof typeof floorsData;

    if (floorKey) {
      onFloorChange(floorKey);
      map.setView(marker.position, 15);
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <b key={index}>{part}</b>
      ) : (
        part
      )
    );
  };

  const handleCross = () => {
    onSearchActive(false);
    setQuery("");
    setResults([]);
  };

  const handleList = (item: MarkerData) => {
    handleClick(item);
    onSearchActive(false);
    setQuery(item.name);
    setResults([]);
  };

  const handleSearch = () => {
    onSearchActive(
      window.innerWidth < 500 || window.innerHeight < 500 ? true : false
    );
    onSideBarActive();
  };

  return (
    <>
      <div className={`search__overlay ${isSearchActive && "active"}`}></div>
      <div className="justify--between align--center gap--sm search__bar">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for locations..."
          className="input"
          onClick={handleSearch}
        />
        {!query && !isSearchActive ? (
          <IoSearchOutline
            size={35}
            color={"var(--color-primary)"}
            className="icon--search"
            onClick={handleSearch}
          />
        ) : (
          <div onClick={handleCross}>
            <RxCross1
              className="icon search__close flex justify--center align--center"
              color={"#000"}
            />
          </div>
        )}

        {results.length > 0 && (
          <ul className="search__lists">
            {results.map((item) => {
              const floorKey = Object.keys(floorsData).find((key) =>
                floorsData[key].some((m) => m.name === item.name)
              );
              return (
                <li
                  key={item.name}
                  onClick={() => handleList(item)}
                  className="flex search__list"
                >
                  <div className="flex align--center">
                    <img
                      className="icon--sm icon--search__list"
                      src={icons[item.type].options.iconUrl}
                      alt=""
                    />
                    <span className="search__destination">
                      {highlightText(item.name, query)}
                    </span>
                  </div>
                  <span className="search__floor">
                    {floorKey === "firstFloor" ? "1st Floor" : "2nd Floor"}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
