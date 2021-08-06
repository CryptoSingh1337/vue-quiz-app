<template>
  <footer class="pa8 text-center">
    <div class="socials">
      <a href="https://github.com/CryptoSingh1337" target="_blank"
        ><i class="fab fa-github"></i
      ></a>
      <a href="https://linkedin.com/in/saransh-kumar-2k19/" target="_blank"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a href="https://cryptosingh1337.github.io/" target="_blank"
        ><i class="fas fa-cube"></i
      ></a>
    </div>
    <p>Made with <i class="fas fa-heart"></i> by Saransh Kumar</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #e2e7e9;
  margin-top: 0;
}
a {
  margin: 10px;
  font-size: 1.5rem;
  text-decoration: none;
}
p {
  margin-top: 20px;
  margin-bottom: 0;
}
.fab,
.fas {
  color: black;
  transition: all ease-in-out 400ms;
}
.fa-github:hover {
  color: #333;
}
.fa-linkedin-in:hover {
  color: #0077b0;
}
.fa-cube:hover {
  color: #4caf50;
}
.fa-heart {
  color: #e91e63;
}
</style>
