const app = Vue.createApp({
  data() {
    return {
      firstName: "dimas",
      lastName: "aditya",
      age: 26,
      gender: "male",
      email: "dimas.aditya2295@gmail.com",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.age = results[0].dob.age;
      this.gender = results[0].gender;
      this.email = results[0].email;
      this.picture = results[0].picture.medium;
    },
  },
});

app.mount("#app");
