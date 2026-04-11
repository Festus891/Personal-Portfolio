import React, { useMemo, useRef, useState } from "react";
import "./Testimonial.css";
import testimonialData from "./TestimonialData";

const Testimonial = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const ref = useRef(null);

  const firstRow = useMemo(
    () => testimonialData.slice(0, Math.ceil(testimonialData.length / 2)),
    [],
  );

  const secondRow = useMemo(
    () => testimonialData.slice(Math.ceil(testimonialData.length / 2)),
    [],
  );

  const renderCards = (items) =>
    [...items, ...items].map((item, index) => (
      <article
        key={`${item.name}-${index}`}
        className="testimonial_card"
        onClick={() => setSelectedClient(item)}
      >
        <div className="testimonial_top">
          <div className="client_avatar_text">{item.avatar}</div>

          <div className="client_meta">
            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </div>
        </div>

        <div
          className="client_rating"
          aria-label={`${item.rating} star rating`}
        >
          {"★".repeat(item.rating)}
        </div>

        <p className="client_review">{item.review}</p>
      </article>
    ));

  return (
    <section className="containers" id="testimonials_section" ref={ref}>
      <div className="containers testimonial_container">
        <div className="testimonial_heading">
          <h5>What clients say</h5>
          <h2>Client Reviews</h2>
          <p>
            Don&apos;t just take my word for it. Here is what people are saying
            about my work.
          </p>
        </div>

        <div className="testimonials_marquee">
          <div className="marquee_row marquee_left">
            <div className="marquee_track">{renderCards(firstRow)}</div>
          </div>

          <div className="marquee_row marquee_right">
            <div className="marquee_track">{renderCards(secondRow)}</div>
          </div>
        </div>
      </div>

      {selectedClient && (
        <div
          className="testimonial_modal_overlay"
          onClick={() => setSelectedClient(null)}
        >
          <div
            className="testimonial_modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal_close"
              onClick={() => setSelectedClient(null)}
            >
              ×
            </button>

            <div className="modal_header">
              <div className="client_avatar_text modal_avatar">
                {selectedClient.avatar}
              </div>

              <div className="client_meta">
                <h3>{selectedClient.name}</h3>
                <span>{selectedClient.role}</span>
              </div>
            </div>

            <div className="client_rating modal_rating">
              {"★".repeat(selectedClient.rating)}
            </div>

            <p className="modal_review">{selectedClient.review}</p>

            <div className="modal_details">
              <p>
                <strong>Project:</strong> {selectedClient.project}
              </p>
              <p>
                <strong>Location:</strong> {selectedClient.location}
              </p>
              <p>
                <strong>Working Style:</strong> {selectedClient.workingStyle}
              </p>
              <p>
                <strong>Feedback:</strong> {selectedClient.fullReview}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial;
