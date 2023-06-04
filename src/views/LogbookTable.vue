<template>
  <div class="d-flex flex-column">
    <h1>HIIII!!!</h1>
    <button @click="deselectRows">pushme</button>
    <ag-grid-vue
      class="ag-theme-alpine"
      style="width: 300px; height: 500px"
      :columnDefs="columnDefs"
      :rowData="logbookList"
      :defaultColDef="defaultColDef.pinnedBottomRowConfig"
      rowSelection="multiple"
      animateRows="true"
      @cell-clicked="cellWasClicked"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>

<script setup>
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridVue } from 'ag-grid-vue3'; // the AG Grid Vue Component
import { onMounted, reactive, ref } from 'vue';
import useLogbook from '../composables/useLogbook';

const gridApi = ref(null); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params) => {
  gridApi.value = params.api;
};

// const logbook = ref([]);
const columnDefs = ref([]);
const headerArray = ref([]);
// const logbook = ref({});

const { logbookList, getLogbookList } = useLogbook();

// DefaultColDef sets props common to all Columns
const defaultColDef = {
  pinnedBottomRowConfig: [
    {
      field: 'name',
      title: 'Всего: ',
      type: 'int',
      aggAttrName: 'count',
    },
  ],
  sortable: true,
  filter: true,
  resizable: true,
  flex: 1,
};

const loadData = async () => {
  // TODO: проверка на наявность в локал стораже... и кнопка обновить базу.

  await getLogbookList();

  if (logbookList.value.length) {
    headerArray.value = Object.keys(logbookList.value?.[0]);
  }

  columnDefs.value = headerArray.value.map((title) => {
    return {
      headerName: title,
      field: title.toLowerCase(),
    };
  });

};
// loadData();


onMounted(async () => loadData());
</script>
