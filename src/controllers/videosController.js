import Video from "../models/Video";

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};
export const watch = (req, res) => {
  const { id } = req.params;

  return res.render("watch", { pageTitle: `Watching: ` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;

  return res.render("edit", { pageTitle: `Editing: ` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { videoTitle } = req.body;

  return res.redirect("/");
};
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
