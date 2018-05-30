export const getTags = (req, res) => {
  res.json({
  "tags": [
    "reactjs",
    "angularjs"
  ]
});
};
export default {
  getTags,
};
