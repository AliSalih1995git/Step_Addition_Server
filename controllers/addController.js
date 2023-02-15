module.exports = {
  addPerform: async (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const regex = /^\d*[1-9]\d*$/;

    if (!num1.match(regex) || !num2.match(regex)) {
      return res.status(400).send("Please enter valid positive integers");
    } else {
      let result = {};
      let carryString = "";
      let sumString = "";
      let final = {};
      let revNum1 = num1.toString().split("").reverse();
      let revNum2 = num2.toString().split("").reverse();

      //if check both string are same length
      while (revNum1.length < revNum2.length) {
        revNum1.push("0");
      }
      while (revNum2.length < revNum1.length) {
        revNum2.push("0");
      }

      for (let i = 0; i < revNum1.length; i++) {
        let add = parseInt(revNum1[i]) + parseInt(revNum2[i]);
        if (carryString === "") {
          carryString = "_";
        }
        if (i !== 0) {
          add += parseInt(carryString[0]);
        }
        if (i === revNum1.length - 1) {
          sumString = add + sumString;
        } else {
          let ans = add.toString().split("");

          if (ans.length === 2) {
            carryString = ans[0] + carryString;
            sumString = ans[1] + sumString;
          } else {
            carryString = "0" + carryString;
            sumString = ans[0] + sumString;
          }
        }
        final["step" + (i + 1)] = { carryString, sumString };
      }
      result = final;
      res.status(200).json(result);
    }
  },
};
