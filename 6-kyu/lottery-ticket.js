const bingo = (ticket, win) =>
  ticket.filter((a) => a[0].split("").some((b) => b.charCodeAt(0) == a[1]))
    .length >= win
    ? "Winner!"
    : "Loser!";
