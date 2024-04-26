import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // short: name: String
    anleitung: { type: String, required: true },
    url: { type: String, required: true, default: "placeholder.jpg" },
    portionen: { type: Number },
    zutaten: [
      {
        menge: { type: Number },
        einheit: {
          type: String,
          required: false,
          enum: ["g", "ml", "EL", "TL"],
        },
        zutat: { type: String, trim: true }, // trim => removes blank spaces before and after a string
      },
    ],
  },
  { collection: "recipes", timestamps: true },
);

// collection name by default: modelname lowercase + s => here "recipes"
export const Recipe = mongoose.model("Recipe", recipeSchema);

// kommt in eine andere Datei => index.js beim erstellen für POST
const couscous = new Recipe({
  name: "CousCous auf Rosenkohl",
  anleitung: "Ofen rein und woosh",
  portion: 2,
  zutaten: { menge: 104, einheit: "g", zutat: "couscous " },
});

couscous.save().then((result) => {
  console.log("wurde gespeichert");
  console.log(result);
});

// kurze Schreibweise

Recipe.create({
  name: "CousCous auf Rosenkohl",
  anleitung: "Ofen rein und woosh",
  portion: 2,
  zutaten: { menge: 104, einheit: "g", zutat: "couscous " },
}).then((result) => {
  console.log("wurde gespeichert");
  console.log(result);
});
