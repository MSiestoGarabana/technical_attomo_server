const uploadImage = (req, res) => {
  if (!req.file) {
    res.sendStatus(500);
    return;
  }
  res.json({ cloudinary_url: req.file.path });
};

module.exports = {
  uploadImage,
};
