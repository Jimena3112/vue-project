<script>
export default {
  name: "user-profile",
  title: "UserProfile",
}
</script>

<template>
  <article class="user-profile">
    <img src="https://drive.google.com/file/d/1pRl20H3l6d5j6vndUijSn-C6_yux9Uu4/view?usp=sharing" alt="Imagen de perfil de usuario">
    <h2 class="username">USUARIO 1</h2>
    <hr class="divider" />
    <section>
      <h3>Mis casos</h3>
      <span>2</span>
    </section>
  </article>
</template>

<style scoped>
.user-profile {
border-radius: 5px;
background-color: #fff;
display: flex;
width: 100%;
flex-direction: column;
margin: 0 auto;
padding: 21px 16px;
font: 400 12px Inter, sans-serif;
}

.user-avatar {
aspect-ratio: 1;
object-fit: contain;
object-position: center;
width: 68px;
border-radius: 34px;
align-self: center;
}

.username {
color: #000;
align-self: center;
margin-top: 15px;
}

.divider {
margin-top: 19px;
height: 1px;
border: 1px solid #d9d9d9;
}

.case-summary {
display: flex;
margin-top: 22px;
gap: 20px;
justify-content: space-between;
}


</style>