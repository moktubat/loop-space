'use client';

import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;

  iframe {
    width: 100%;
    height: 450px;
    border: 0;
    border-radius: 12px;
  }
`;

const Map = () => {
  return (
    <MapContainer>
      <iframe
        title="Map location"
        src="https://www.google.com/maps?q=New+Mexico+St,+Green+River,+WY+82935&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </MapContainer>
  );
};

export default Map;
