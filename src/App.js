import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    fetchData();
  }, []);

  const groupTickets = (groupBy) => {
    if (!tickets.length) return {};

    if (groupBy === "status") {
      return tickets.reduce((acc, ticket) => {
        acc[ticket.status] = acc[ticket.status] || [];
        acc[ticket.status].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "user") {
      return tickets.reduce((acc, ticket) => {
        const userName = users.find((u) => u.id === ticket.userId)?.name || "Unassigned";
        acc[userName] = acc[userName] || [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "priority") {
      return tickets.reduce((acc, ticket) => {
        acc[ticket.priority] = acc[ticket.priority] || [];
        acc[ticket.priority].push(ticket);
        return acc;
      }, {});
    }
  };

  const sortTickets = (groupedTickets, sortBy) => {
    Object.keys(groupedTickets).forEach((key) => {
      groupedTickets[key].sort((a, b) => {
        if (sortBy === "priority") {
          return b.priority - a.priority; // Descending priority
        } else if (sortBy === "title") {
          return a.title.localeCompare(b.title); // Alphabetical by title
        }
      });
    });
    return groupedTickets;
  };

  const handleGroupingChange = (option) => {
    setGrouping(option);
  };

  const handleSortingChange = (option) => {
    setSorting(option);
  };

  let groupedTickets = groupTickets(grouping);
  if (sorting) {
    groupedTickets = sortTickets(groupedTickets, sorting);
  }

  return (
    <div>
      <Header onGroupingChange={handleGroupingChange} onSortingChange={handleSortingChange} />
      <KanbanBoard groupedTickets={groupedTickets} />
    </div>
  );
}

export default App;
