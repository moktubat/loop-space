'use client';

import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;

  iframe {
    width: 100%;
    height: 450px;
    border: 0;
<<<<<<< HEAD
    border-radius: 12px; /* optional */
=======
    border-radius: 12px;
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
  }
`;

const Map = () => {
<<<<<<< HEAD
    return (
        <MapContainer>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.318038847314!2d-109.45264332502617!3d41.49738258916693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875a875fdeea704f%3A0xc3a8908ced2a2302!2sNew%20Mexico%20St%2C%20Green%20River%2C%20WY%2082935%2C%20USA!5e0!3m2!1sen!2sbd!4v1764693260841!5m2!1sen!2sbd"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </MapContainer>
    );
};

export default Map;
=======
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
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
