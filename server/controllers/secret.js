module.exports = {
  secret: async (req, res, next) => {
    console.log("I managed to get here! Secret information");
    res.json({ secret: "resource" });
  }
};
