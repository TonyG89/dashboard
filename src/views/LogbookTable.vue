<template>
  <div class="d-flex flex-column w-100">
    <InfoDashboard :entity="dashBoardInfo" />
    <InfoDashboard :entity="dbSummary" />
    <InfoDashboard :entity="entity" />
    <button @click="deselectRows">pushme</button>
    <div v-if="isLoading">
      <Loader />
    </div>
    <ag-grid-vue
      v-else
      class="ag-theme-alpine"
      style="min-width: 300px; height: 500px"
      :columnDefs="componentState.headerTitle"
      :rowData="componentState.items"
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
import { computed, onMounted, reactive, ref } from 'vue';
import Loader from '../components/Loader.vue';
import InfoDashboard from '../components/InfoDashboard.vue';
import useLogbook from '../composables/useLogbook';

const gridApi = ref(null); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params) => {
  gridApi.value = params.api;
};

const componentState = computed(() => ({
  headerTitle: columnDefs.value,
  items: logbookList.value?.map((item, ind) => ({
    ...item,
    date: item.date.slice(0, 10), // редактирование столбца
    kilometers: `${
      item.kilometers
        ? item.kilometers
        : `> ${logbookList.value[ind + 1].kilometers}`
    } км`,
    details: item.details ? `${item.details} грн` : '-',
    work: item.work ? `${item.work} грн` : '-',
  })),
}));
const columnDefs = ref([]);
const headerArray = ref([]);
// const logbook = ref({});

const dataToDashboardInfo = (data, total = []) => {
  data.value?.map((log) => ({
    title: log.actions,
    value: log.tags || '-',
  }));
};

const dbSummary = computed(() => [
  {
    title: 'Всего заплатил за работу:',
    value: logbookList.value?.reduce((acc, i) => acc + +i?.work, 0) || '-',
  },
  {
    title: 'Всего заплатил за детали:',
    value: logbookList.value?.reduce((acc, i) => acc + +i?.detail, 0) || '-',
  },
]);

const entity = ref([
  {
    title: 'AverageKilometers',
    value: 100 - 0,
  }, //first, last
  { title: 'AverageWork', value: 500 + 200 + 400 },

  {
    title: 'AverageKilometers: ',
    value: 100 - -23 + 20,
  }, //first, last

  { title: 'AverageWork', value: 500 + 242 + 400 },
]);

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

const isLoading = ref(true);

const loadData = async () => {
  // TODO: проверка на наявность в локал стораже... и кнопка обновить базу.
  isLoading.value = true;
  await getLogbookList();

  if (logbookList.value.length) {
    headerArray.value = Object.keys(logbookList.value?.[0]);
  }

  // ЗАГОЛОВОК
  columnDefs.value = headerArray.value
    .map((title) => {
      return {
        headerName: title.toUpperCase(),
        field: title.toLowerCase(),
      };
    })
    .filter((item) => item.field !== 'comments') // скрыть комментарии
    .map((item) => {
      console.log(item);
      // В НАЧАЛЕ Мэпа...
      if (item.field === 'details') {
        item.headerName = 'xxx';
        item.children = [
          {
            headerName: 'title.toUpperCase()',
            field: 'sSSSSS'.toLowerCase(),
          },
        ];
      }
      return {
        ...item,
      };
    });
  isLoading.value = false;
};
// loadData();

onMounted(async () => loadData());
</script>

<style></style>
