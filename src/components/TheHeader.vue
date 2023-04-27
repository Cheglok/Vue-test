<template>
  <header class="main-header">
    <div class="container">
      <nav>
        <ul class="nav-links">
          <li class="nav-link">
            <router-link to="/">Main Page</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/table">Table Page</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
    name: "TheHeader",
}

</script>

<style lang="scss" scoped>

.main-header {
    min-height: 60px;
    padding: 17px 0;

    color: #ffffff;

    background-color: #755858;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid #000000;
}

.main-header__heading {
    margin: 0;
    padding: 0;

    font-size: 24px;
    line-height: 24px;
    font-weight: 400;

    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke: 1px #000000;
}

@media screen and (max-width: 480px) {
    .main-header {
        border: none;
    }

    .main-header__heading {
        padding-left: 3px;
        -webkit-text-stroke: initial;
    }
}
</style>
