<script>
export default {
  name: "latest-cases",
  title: "Latest Cases",
}
</script>

<template>
  <section class="latest-cases">
    <header class="latest-cases__header">
      <h2 class="latest-cases__title">ULTIMOS CASOS</h2>
      <span class="status-badge status-badge--open">ABIERTO</span>
    </header>
    <main class="latest-cases__content">
      <article class="case-card">
        <div class="case-card__content">
          <h3 class="case-card__title">Maltrato Domestico</h3>
          <p class="case-card__description">
            Tengo años de experiencia trabajando con personas que sufren de maltrato doméstico.
          </p>
        </div>
        <span class="status-badge status-badge--open">ABIERTO</span>
      </article>
      <article class="case-card">
        <div class="case-card__content">
          <h3 class="case-card__title">Pension Alimenticia</h3>
          <p class="case-card__description">
            Me encargo de ayudar a las personas que necesitan una pensión alimenticia para vivir.
          </p>
        </div>
        <span class="status-badge status-badge--open">ABIERTO</span>
      </article>
      <article class="case-card">
        <div class="case-card__content">
          <h3 class="case-card__title">Pension Alimenticia</h3>
          <p class="case-card__description">
            Ayudo a que las personas puedan obtener su pensión alimenticia de manera rápida, segura y transparente. Siempre podrán contar conmigo.
          </p>
        </div>
      </article>
    </main>
  </section>
</template>

<style scoped>
.latest-cases {
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  margin-top: 10px;
  width: 487px;
  max-width: 100%;
  padding-top: 22px;
  flex-direction: column;
}

.latest-cases__header {
  align-self: flex-end;
  display: flex;
  margin-right: 34px;
  width: 248px;
  max-width: 100%;
  flex-direction: column;
}

.latest-cases__title {
  color: #000;
  align-self: flex-start;
  font: 700 10px Roboto, sans-serif;
}

.status-badge {
  color: #fff;
  white-space: nowrap;
  letter-spacing: 2.5px;
  padding: 2px 23px;
  font: 400 5px Abel, sans-serif;
  border: 1px solid #d9d9d9;
}

.status-badge--open {
  background-color: #1b9a2f;
  align-self: flex-end;
  margin-top: 13px;
}

.latest-cases__content {
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 0 34px;
}

.case-card {
  border-radius: 5px 0 5px 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  padding: 11px 15px 23px;
  border: 1px solid #d9d9d9;
  margin-bottom: 10px;
}

.case-card__title {
  color: #000;
  font-size: 10px;
  font-weight: 700;
  align-self: flex-start;
}

.case-card__description {
  color: #7d7d7d;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  margin-top: 8px;
}

@media (max-width: 991px) {
  .latest-cases__header {
    margin-right: 10px;
  }

  .status-badge {
    white-space: initial;
    padding: 0 20px;
  }

  .latest-cases__content {
    max-width: 100%;
    padding: 0 20px;
  }

  .case-card {
    padding-right: 20px;
  }
}
</style>