import React from "react";

function Card({ ticket }) {
  const getPriorityText = (priority) => {
    switch (priority) {
      case 4:
        return "Urgent";
      case 3:
        return "High";
      case 2:
        return "Medium";
      case 1:
        return "Low";
      default:
        return "No Priority";
    }
  };

  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {getPriorityText(ticket.priority)}</p>
      <p>Tags: {ticket.tag.join(", ")}</p>
    </div>
  );
}

export default Card;
