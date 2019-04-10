<template>
  <router-link v-bind="$attrs" tag="li" class="nav-item" active-class="active">
    <a class="nav-link">
      <slot></slot>
    </a>
  </router-link>
</template>
