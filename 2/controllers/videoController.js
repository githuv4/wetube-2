export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  console.log(req.query);
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};
