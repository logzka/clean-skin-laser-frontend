<template lang="pug">
el-table(
  :data="preMasters"
  stripe
  style="width: 54vw"
  )
  el-table-column(
    prop="active"
    label="Действующий"
    width="140"
    header-align="center"
    fixed
    )
    template(v-slot="row")
      .admin-masters__inner-table_master-active.text-center
        el-button(
          type="success"
          text
          @click="$emit('updateActiveMasters', row.row)"
          )
          div.flex.align-center(v-if="row.row.active")
            el-icon(color="rgb(44, 201, 144)")
              SuccessFilled
            span Убрать

          span(v-else) Разместить

  el-table-column(
    prop="first_name"
    label="Имя"
    width="180"
    )
    template(v-slot="row")
      | {{ row.row.first_name }}&nbsp;{{ row.row.last_name }}
  el-table-column(
    width="160"
    label="Фото"
    header-align="center"
    align="center"
    )
    template(v-slot="row")
      img.admin-masters__inner-table_master-image(
        :src="`/img/${row.row.photo}`"
        alt="Мастер студии лазера."
        )
  el-table-column(
    prop="services"
    label="Услуги"
    width="160"
    )
    template(v-slot="{row}")
      span {{ $formatServices(row.services, servicesMap) }}
  el-table-column(
    prop="closest_free_dates"
    label="Окна"
    header-align="center"
    width="120"
    )
    template(v-slot="row")
      div.tag-group.flex.f-col.gap-small.align-center
        el-tag(
          v-for="date in row.row.closest_free_dates"
          :key="date"
          type="success"
          effect="dark"
          ) {{ $formatDateTime(date) }}
  el-table-column(
    prop="skills"
    label="Квалификация"
    width="200"
    )
    template(v-slot="row")
      el-popover(effect="light" trigger="hover" placement="top" width="400px")
        template(#default)
          | {{ row.row.skills }}
        template(#reference)
          p.m0.p0.text-cut(
            style="width: 180px;cursor: pointer;"
            ) {{ row.row.skills }}
  el-table-column(
    prop="experience"
    label="Опыт"
    header-align="center"
    width="120"
    class-name="bold"
    )
  el-table-column(width="120" fixed="right")
    template(v-slot="row")
      el-button.el-button__my-link(
        size="small"
        aria-label="edit"
        name="edit"
        @click="editMaster(row)"
        )
        el-icon
          Edit
      el-button.el-button__my-link(
        type="danger"
        size="small"
        plain
        aria-label="delete"
        name="delete"
        @click="confirmDeleteMaster(row)"
        )
        el-icon
          Delete
</template>

<script>
import {
  ElNotification,
  ElMessageBox,
} from 'element-plus';

export default {
  computed: {
    masters() {
      return this.$store.getters.masters || null;
    },

    preMasters() {
      return this.masters || [];
    },

    servicesMap() {
      return this.$store.getters.servicesMap || {};
    },
  },

  data: () => ({
  }),

  mounted() {
    if (this.masters) return;

    this.$store.dispatch('setLoadingAdminMasters', true);

    setTimeout(() => {
      this.$store.dispatch('getMasters', {});
      this.$store.dispatch('setLoadingAdminMasters', false);
    }, 1000);
  },

  methods: {
    /**
     * Edit current master
     *
     * @param {Object} row Current master data
     */
    editMaster({ row }) {
      this.$store.dispatch('setMasterForm', row || {});

      document.getElementById('masterName').focus();
    },

    /**
     * Confirm to delete current master
     *
     * @param {Object} row Current master data
     */
    confirmDeleteMaster({ row }) {
      ElMessageBox.confirm(
        'Это действие необратимо. Продолжить?',
        'Внимание',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Отмена',
          type: 'danger',
          draggable: true,
        },
      ).then(() => {
        this.deleteMaster(row);
      })
        .catch(() => {
          ElNotification({
            message: 'Возникли проблемы при у далении мастера. Повторите позже либо обратитесь к Разработчику.',
            type: 'error',
          });
        });
    },

    /**
     * Delete current master
     * @param {Object} row Current master data
     */
    deleteMaster(row) {
      this.$store.dispatch('setLoadingAdminMasters', true);

      setTimeout(() => {
        this.$store.dispatch('deleteMaster', row.id || null);
        this.$store.dispatch('setLoadingAdminMasters', false);

        ElNotification({
          message: 'Мастер удален',
          type: 'success',
        });
      }, 1000);
    },
  },
};
</script>
