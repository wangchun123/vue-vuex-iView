export const add = {
  methods: {
    fetchData() {
      return new Promise((res, rej) => {
        let a = 1;
        setTimeout(() => {
          res(a);
        }, 1000);
      });
    },
  },
};
