const WelcomeComp = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Welecome to turf solt booking application" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export default WelcomeComp;
