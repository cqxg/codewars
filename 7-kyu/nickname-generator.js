const nicknameGenerator = (name) =>
  name.length < 4
    ? "Error: Name too short"
    : (name[2].match(/[aeuio]/) && name.slice(0, 4)) || name.slice(0, 3);
