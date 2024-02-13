<template>
    <footer>
        <div>
            {{ $t('first_part') }} {{ invoice.bank_account_no }} {{ $t('second_part') }} {{ invoice.number }}
        </div>
    </footer>
</template>

<style scoped>
    footer {
        position: absolute;
        bottom: 10px;
        width: 100%;
        text-align: center;
        font-size: 0.6em;
    }
</style>
<script>
import { mapGetters } from 'vuex';
import { formatDate } from '../../filters/date.filter';
import { formatCurrency } from '../../filters/currency.filter';

export default {
  i18nOptions: { namespaces: 'invoice-footer' },
  props: ['invoice', 'errors'],
  filters: {
    date: formatDate,
    currency: formatCurrency,
  },
  computed: {
    ...mapGetters({
      taxes: 'invoiceRows/taxes',
    }),
    colspan() {
      return 4 + this.taxes.length;
    },
  },
  methods: {
    updateProp(props) {
      this.$emit('update', props);
    },
  },
};
</script>
