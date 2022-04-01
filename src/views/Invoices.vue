<template>
  <div class="panel">
    <div class="panel-heading">
      <div>
        <router-link to="/NewInvoice" class="btn btn-primary">
          Añadir nueva factura
        </router-link>
      </div>
    </div>
    <div class="panel-body">
      <table class="table table-striped table-md">
        <thead>
          <tr>
            <th>ID Factura</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Fecha de vencimiento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in model.data"
            :key="item.data"
            @click="detailsPage(item)"
          >
            <td class="w-3">{{ item.number }}</td>
            <td class="w-3">{{ item.date }}</td>
            <td class="w-9">{{ item.receiver_name }}</td>
            <td class="w-3">{{ item.due_date }}</td>
            <td class="w-3">{{ item.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="panel-footer flex-between">
      <div>
        <small
          >Showing {{ model.from }} - {{ model.to }} of {{ model.total }}</small
        >
      </div>
      <div>
        <button
          class="btn btn-sm"
          :disabled="!model.prev_page_url"
          @click="prevPage"
        >
          Prev
        </button>
        <button
          class="btn btn-sm"
          :disabled="!model.next_page_url"
          @click="nextPage"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  data() {
    return {
      model: {
        data: [],
      },
    };
  },
  setup() {
    onMounted(async () => {
      const response = await fetch("http://localhost:8000/api/invoices", {
        headers: { "Content-Type": "application/json" },
      });

      const invoices = await response.json();
      console.log(invoices.invoices.data);
    });
  },
  methods: {
    detailsPage(item) {
      this.$router.push(`/invoices/${item.id}`);
    },
    nextPage() {
      if (this.model.next_page_url) {
        const query = Object.assign({}, this.$route.query);
        query.page = query.page ? Number(query.page) + 1 : 2;
        this.$router.push({
          path: "/invoices",
          query: query,
        });
      }
    },
    prevPage() {
      if (this.model.prev_page_url) {
        const query = Object.assign({}, this.$route.query);
        query.page = query.page ? Number(query.page) - 1 : 1;
        this.$router.push({
          path: "/invoices",
          query: query,
        });
      }
    },
  },
};
</script>
