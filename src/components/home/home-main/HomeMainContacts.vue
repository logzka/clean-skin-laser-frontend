<template lang="pug">
.home-main-contacts
  .flex.space-between.gap-2

    .flex.f-col
      home-main-contacts-general
      AppointmentButton.home-main-contacts__appointment-button

    .home-main-contacts__map.w-100
      iframe(
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e05cb5be61b0b8695b61f95b12fa2b33864e9ff22731e583a9b6ae3efa10feb&amp;source=constructor"
        width="100%"
        height="200"
        frameborder="0"
        )
</template>

<script>
import HomeMainContactsGeneral from './home-main-contacts/HomeMainContactsGeneral.vue';

export default {
  components: {
    HomeMainContactsGeneral,
  },
};
</script>
