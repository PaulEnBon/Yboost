const express = require("express");
const pokemons = require("./db-pokemons");
const helper = require("./helper");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h3>Hello, YBoosST TEAM !</h3>");
});

app.get("/api/pokemons", (req, res) => {
  const message = `List of ${pokemons.length} pokemons`;
  res.json(helper.success(message, pokemons));
});

app.get("/api/pokemons/:id/:name", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const name = req.params.name.toLowerCase();
  const pokemon = pokemons.find(
    (p) => p.id === id && p.name.toLowerCase() === name
  );

  if (!pokemon) {
    return res
      .status(404)
      .json(helper.success("Pokemon introuvable", null));
  }

  return res.json(helper.success("One pokemon is found !", pokemon));
});

app.get("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const pokemon = pokemons.find((p) => p.id === id);

  if (!pokemon) {
    return res.status(404).json(helper.success("Pokemon introuvable", null));
  }

  return res.json(helper.success("One pokemon is found !", pokemon));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
