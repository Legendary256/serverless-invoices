<template>
    <div>
        <strong class="break-line">
            <AppEditable :value="invoice.from_name"
                         :errors="errors"
                         field="from_name"
                         :placeholder="$t('your_company_name')"
                         @change="updateProp({ from_name: $event })"/>
            <i class="material-icons md-18 ml-2 pointer d-print-none" @click="editTeam">edit</i>
        </strong>
        <AppEditable :value="invoice.from_address"
                     suffix=", "
                     :placeholder="$t('address')"
                     @change="updateProp({ from_address: $event })"/>
        <AppEditable :value="invoice.from_postal_code"
                     :placeholder="$t('postal_code')"
                     class="break-line"
                     @change="updateProp({ from_postal_code: $event })"/>
        <AppError :errors="errors" field="from_address"/>
        <AppError :errors="errors" field="from_postal_code"/>

        <AppEditable :value="invoice.from_city"
                     suffix=", "
                     :placeholder="$t('city')"
                     @change="updateProp({ from_city: $event })"/>
        <AppEditable :value="invoice.from_country"
                     :placeholder="$t('country')"
                     class="break-line"
                     @change="updateProp({ from_country: $event })"/>
        <AppEditable :value="invoice.from_phone"
                     :errors="errors"
                     field="from_phone"
                     :placeholder="$t('add_phone')"
                     @change="updateProp({ from_phone: $event })"/>

        <InvoiceTeamFields :invoice="invoice"/>

        <AppEditable :value="invoice.from_email"
                     :errors="errors"
                     field="from_email"
                     :placeholder="$t('your_email')"
                     @change="updateProp({ from_email: $event })"/>
        <InvoiceBankDetails :invoice="invoice" :errors="errors" @update="updateProp"/>
        <AppError :errors="errors" field="from_city"/>
        <AppError :errors="errors" field="from_country"/>
    </div>
</template>
<script>
import AppError from '@/components/form/AppError';
import InvoiceTeamFields from '@/components/invoices/InvoiceTeamFields';
import InvoiceBankDetails from '@/components/invoices/InvoiceBankDetails.vue';
import AppEditable from '../form/AppEditable';

export default {
  i18nOptions: { namespaces: 'invoice-company-details' },
  props: ['invoice', 'errors'],
  components: {
    AppEditable,
    AppError,
    InvoiceBankDetails,
    InvoiceTeamFields,
  },
  methods: {
    updateProp(props) {
      this.$emit('update', props);
    },
    editTeam() {
      this.$store.commit('teams/isModalOpen', true);
    },
  },
};
</script>
