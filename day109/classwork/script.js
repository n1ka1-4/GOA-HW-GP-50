 const obj = {
  arr: [
    // item1
    {
      level: [10, 50, 100],
    },

    // item2
    {
      level: [20, 40, 60],
      students: [
        {
          name: "jemala",
          surname: "barkalaia",
          score: [8, 8, 10],
        },
        {
          name: "jumbera",
          surname: "lamazi",
          score: [10, 7, 9],
        },
      ],
    },

  ],
};

const [{ level: [first, second, third] },{level: [four, five, six],students: [{name,surname,score: [score1, score2, score3],},{name: name1,surname: surname1,score: [score4, score5, score6],},],},] = obj.arr;
