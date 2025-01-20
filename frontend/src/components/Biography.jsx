import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to <strong>YamCare Medical Institute</strong>, where cutting-edge
            technology meets compassionate care. As a pioneer in modern
            healthcare, we don’t just treat symptoms – we heal lives, nurture
            well-being, and empower our patients to thrive. With a team of
            experts dedicated to making a difference, we’ve transformed the
            healthcare experience, bringing together medical innovation and
            a human touch that’s tailored to your unique needs.
          </p>
          <p>In 2024, we’re setting new standards in healthcare!</p>
          <p>
            Our revolutionary <strong>Hospital Management System</strong> is built on the powerful
            MERN stack (MongoDB, Express, React, Node.js) – a next-gen solution
            designed to simplify complex processes and make healthcare more
            accessible and efficient. From seamless appointment scheduling to
            secure patient data management, our system ensures your care is
            always in safe hands, freeing up time for our professionals to focus
            on what matters most: YOU.
          </p>
          <p>
            At <strong>YamCare</strong>, we’re not just treating patients, we’re creating a
            community where health and happiness go hand in hand. Our holistic
            approach combines state-of-the-art treatments with personalized
            care, ensuring that every patient receives the highest standard of
            attention and respect.
          </p>
          <p>
            Our mission is bold and clear: to redefine healthcare through
            innovation, compassion, and excellence. Whether you're seeking
            routine care or facing complex health challenges, YamCare is your
            trusted partner in health. Together, we’re shaping the future of
            medicine, one life at a time.
          </p>
          <p><strong>Let’s build a healthier tomorrow, today.</strong></p>
        </div>
      </div>
    </>
  );
};

export default Biography;
