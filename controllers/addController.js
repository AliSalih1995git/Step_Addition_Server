module.exports = {
  addPerform: async (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    console.log(num1, num2, "clicked");
  },
};
