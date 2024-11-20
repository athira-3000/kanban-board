import React from "react";
import "../App.css"; // Optional styling
import Icon from "./Icon"; // Ensure Icon component exists
import DisplayIcon from "../assets/Display.svg"; // Correct path to the SVG
const KanbanBoard = ({ groupedTickets, grouping }) => {
  return (
    <div className="kanban-board">
      <div className="kanban-columns">
        {Object.keys(groupedTickets).map((group) => (
          <div key={group} className="kanban-column">
            <h3>{group}</h3>
            <ul>
              {groupedTickets[group].map((ticket) => (
                <li key={ticket.id}>
                  <div className="card">
                    {/* Card Header */}
                    <div className="card-header">
                      <div className="card-title">{ticket.id}</div>
                      <div className="card-avatar">
                        <img
                          src="../assets/profile.png"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                      <div className="card-text">{ticket.title}</div>
                    </div>
                    {/* Card Footer */}
                    <div className="card-footer">
                      
                      <div className="card-label">{ticket.tag}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
