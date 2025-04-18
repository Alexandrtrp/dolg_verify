import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridFilterInputValue } from "@mui/x-data-grid";
import { localeText } from "./Locale";
import { useSelector } from "react-redux";
import { AddRow } from "./AddRow";

const CustomFilterInputValue = (props) => {
  return (
    <GridFilterInputValue
      {...props}
      InputProps={{
        ...props.InputProps,
        placeholder: "Введите значение...",
      }}
    />
  );
};

const columns = [
  { field: "id", headerName: "№", width: 90 },
  {
    field: "1",
    headerName: "Федеральный округ",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "2",
    headerName: "Субъект РФ",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    width: 110,
    editable: true,
    field: "3",
    headerName: "Наименование должника",
    filterOperators: null,
  },
  {
    field: "4",
    headerName: "ИНН должника",
    editable: true,
    width: 160,
    filterOperators: [
      {
        value: "contains",
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.value) return null;
          return (params) =>
            params.value
              ?.toString()
              .toLowerCase()
              .includes(filterItem.value.toLowerCase());
        },
        InputComponent: CustomFilterInputValue,
      },
    ],
  },
  {
    field: "5",
    headerName: "ИНН ответчика",
    width: 150,
    editable: true,
    filterOperators: [
      {
        value: "contains",
        label: "Содержит",
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.value) return null;
          return (params) =>
            params.value
              ?.toString()
              .toLowerCase()
              .includes(filterItem.value.toLowerCase());
        },
        InputComponent: CustomFilterInputValue,
      },
    ],
  },
  {
    field: "6",
    headerName: "Механизм взыскания",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "7",
    headerName: "Размер задолженности перед ФНС России",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "8",
    headerName: "Наименование процедуры банкротства",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "9",
    headerName: "Дата начала процедуры банкротства",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "10",
    headerName: "Дата завершения процедуры банкротства",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "11",
    headerName: "Номер дела о банкротстве",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "12",
    headerName: "Дата направления обращения в правоохранительные органы",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "13",
    headerName:
      "Актуальный статус рассмотрения обращения ТНО правоохранительными органами",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "14",
    headerName: "Дата возбуждения уголовного дела",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "15",
    headerName: "Заявитель по иску",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "16",
    headerName: "Дата направления иска в суд",
    width: 150,
    editable: true,
    filterOperators: null,
    type: "date",
  },
  {
    field: "17",
    headerName: "Отзыв на иск направлен в суд",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "18",
    headerName: "ФИО (наименование) ответчика",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "19",
    headerName: "Факт принятия обеспечительных мер",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "20",
    headerName:
      "Стоимость активов ответчиков, в отношении которых приняты обеспечительные меры",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "21",
    headerName:
      "Причины отказа в возбуждении уголовного дела, прекращения дела, уголовного преследования",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "22",
    headerName: "Дата направления уголовного дела в суд",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "23",
    headerName: "Результат рассмотрения уголовного дела в суде",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "24",
    headerName: "Статус рассмотрения иска",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "25",
    headerName:
      "Дата вступления в законную силу судебного акта, указанного в графе 24",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "26",
    headerName:
      "Дата судебного акта об определении размера субсидиарной ответственности",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "27",
    headerName:
      "Размер ответственности по судебному акту, которую представляет ФНС России",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "28",
    headerName:
      "Остаток непогашенной задолженности, которую представляет ФНС России",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "29",
    headerName:
      "Избранный уполномоченным органом способ распоряжения правом требования (только СО)",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "30",
    headerName: "Дата судебного акта о правопреемстве",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "31",
    headerName:
      "Вывод налогового органа об исчерпании или невозможности реализации механизмов удовлетворения налоговых требований за счет самого налогоплательщика - должника",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "32",
    headerName:
      "Дата направления налоговым органом органом ходатайства о приостановлении производства по гражданскому иску",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "33",
    headerName: "Дата приостановки производства по гражданскому иску",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "34",
    headerName:
      "Дата отказа суда в приостановлении производства по гражданскому иску",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "35",
    headerName:
      "Дата направления налоговым органом ходатайства о возобновлении производства по гражданскому иску",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "36",
    headerName: "№ исполнительного листа",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "37",
    headerName: "Дата направления исполнительного листа в ССП",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "38",
    headerName: "Дата возбуждения исполнительного производства",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "39",
    headerName: "Стадия исполнительного производства",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "40",
    headerName: "Наличие ограничения на выезд за пределы РФ",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "41",
    headerName: "Наличие транспортных средств",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "42",
    headerName: "Наличие ареста на транспортные средства",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "43",
    headerName: "Наличие недвижимого имущества",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "44",
    headerName: "Наличие ареста на недвижимое имущество",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "45",
    headerName: "Дата ликвидации (исключения) налогоплательщика из ЕГРЮЛ",
    width: 150,
    editable: true,
    type: "date",
    filterOperators: null,
  },
  {
    field: "46",
    headerName: "ФЛК 1",
    width: 150,
    editable: true,
    type: "boolean",
    filterOperators: null,
  },
  {
    field: "47",
    headerName: "ФЛК 2",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "48",
    headerName: "ФЛК 3",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "49",
    headerName: "ФЛК 4",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "50",
    headerName: "ФЛК 5",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "51",
    headerName: "ФЛК 6",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "52",
    headerName: "ФЛК 7",
    width: 150,
    editable: true,
    filterOperators: null,
  },
  {
    field: "53",
    headerName: "ФЛК 8",
    width: 150,
    editable: true,
    filterOperators: null,
  },
];

export const Table = () => {
  const tableData = useSelector((state) => state.getData.tableData);
  const filter = useSelector((state) => state.getData.filterType);
  const filterData = useSelector((state) => state.getData.filterData);

  return (
    <Box sx={{ height: 400, width: "100%", padding: '15px' }}>
      <AddRow/>
      <DataGrid
        rows={filter ? filterData : tableData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        localeText={localeText}
      />
    </Box>
  );
};
