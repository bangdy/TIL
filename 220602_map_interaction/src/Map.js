import { useState } from "react";
import GoogleMapReact from "google-map-react";
import PlacePointer from "./PlacePointer";

const locations = require("./locations.json");

const SimpleMap = (props) => {
  const defaultSetting = {
    center: {
      lat: 37.33127558,
      lng: 127.1243993
    },
    zoom: 20
  };

  const [select, setSelect] = useState(null);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAaUynXrWsO6okMLj1l2XAFo708npOtHUc" }}
        defaultCenter={defaultSetting.center}
        defaultZoom={defaultSetting.zoom}
        onChange={({ zoom }) => console.log(zoom)}
        onClick={() => setSelect(null)}
      >
        {locations.map((i, key) => (
          <PlacePointer
            lat={i.LAT}
            lng={i.LOGT}
            text={i.CMPNM_NM}
            onClick={() => setSelect(key)}
            selected={select === key}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
