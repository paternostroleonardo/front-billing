<template>
  <div class="panel">
    <div class="panel-heading">
      <div>
        <router-link to="/NewInvoice" class="btn btn-primary">
          Añadir nueva factura
        </router-link>
      </div>
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>ID Factura</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Fecha de vencimiento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody v-for="item in info" :key="item.id">
          <td>{{ item.number }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.receiver_name }}</td>
          <td>{{ item.due_date }}</td>
          <td>{{ item.total }}</td>
        </tbody>
      </table>
    </div>
    <div class="panel-footer flex-between"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Invoices",
  data() {
    return {
      invoices: [],
      info: null,
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/invoices")
      .then((response) => (this.info = response.data.invoices.data));
  },
};
</script>
