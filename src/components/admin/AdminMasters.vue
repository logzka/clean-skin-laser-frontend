<template lang="pug">
.admin-masters.w-100(
  v-loading="loadingAdminMasters"
  )
  .admin-masters__inner
    h3(v-if="!masterForm.id") Новый мастер
    h3(v-else) Редактирование мастера

    .w-100.flex.space-between.gap-2.f-wrap
      .admin-masters__inner-form.flex-grow
        admin-masters-form

      .admin-masters__inner-table
        admin-masters-table(
          @update-active-masters="updateActiveMasters"
          )
</template>

<script>
import {
  ElNotification,
} from 'element-plus';
/** Components */
import AdminMastersForm from './admin-masters/AdminMastersForm.vue';
import AdminMastersTable from './admin-masters/AdminMastersTable.vue';

export default {
  components: {
    AdminMastersForm,
    AdminMastersTable,
  },

  computed: {
    loadingAdminMasters() {
      return this.$store.getters.loadingAdminMasters || false;
    },

    masterForm() {
      return this.$store.getters.masterForm;
    },

    masters() {
      return this.$store.getters.masters || [];
    },

    activeMasters() {
      return this.$store.getters.activeMasters || [];
    },
  },

  methods: {
    /**
     * Update Active Masters
     * @param {Object} currentMaster Current master
     */
    async updateActiveMasters(currentMaster) {
      /** Set Masters */
      await this.$store.dispatch(
        'setMasters',
        this.masters
          .map((master) => ({
            ...master,
            active: currentMaster.id === master.id
              ? !currentMaster.active
              : master.active,
          })),
      );

      await this.$store.dispatch(
        'setActiveMasters',
        currentMaster.active
          ? this.activeMasters
            .filter((master) => currentMaster.id !== master.id)
          : [
            ...this.activeMasters,
            currentMaster,
          ],
      );

      ElNotification({
        message: 'Мастера успешно размещены на главном экране.',
        type: 'success',
      });
    },
  },
};
</script>

  <style lang="stylus">
  .admin-masters
    &__inner
      h3
        margin 0 0 40px
        color #9684A3
      &-form
        margin-right 5%
          .el-form
            &-item
              &__label
                width 100px
                line-height 18px
                justify-content flex-start
      &-table
        &_master-image
          width 100px
          height auto
  </style>
