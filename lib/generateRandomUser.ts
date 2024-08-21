export const generateRandomUser = (length = 8) => {
  // Lista de adjetivos en ingles
  const adjectives = ["happy", "sad", "angry", "tired", "sick"];

  // lista de sustantivos salvajes en ingles
  const nouns = [
    "dog",
    "cat",
    "bird",
    "fish",
    "cow",
    "horse",
    "sheep",
    "goat",
    "lion",
  ];

  const randomItem = (array: any) => array[Math.floor(Math.random() * array.length)];

  let username = ''

  username += randomItem(adjectives);
  username += randomItem(nouns);
  username += Math.floor(Math.random() * 10000);

  if (username.length > length) {
    username = username.substring(0, length);
  }

  return username
};
