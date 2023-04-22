<template>
  <div class='alert success'>
    {{secondText}}
    <slot name="description"/>
    <slot name="title"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: [
    "secondText",
  ],
}
</script>

<style scoped>
.alert {
  padding: 12px 20px;
  border-radius: 5px;
  border: 1px solid transparent;
  font-size: 16px;
}

.success {
  background-color: #dff0d8;
  border-color: #d0e9c6;
  /*color: #3c763d;*/
}
b {
  color: blue;
}
/*.success .red {*/
/*  color: red;*/
/*}*/
/*i {*/
/*  color: red;*/
/*}*/
</style>