import * as React from "react";
import { Button, Box } from "@mui/material";
import {
  DataGrid,
  GridEditSingleSelectCell,
  GridFilterInputValue,
} from "@mui/x-data-grid";
import { ruRU } from "@mui/x-data-grid/locales";
import { useDispatch, useSelector } from "react-redux";
import { AddRow } from "./AddRow";
import { changeRowStatus } from "../service/getData";
import { VerifyFilter } from "./VerifyFilter";

export const Table = () => {
  const tableData = useSelector((state) => state.getData.tableData);
  const filter = useSelector((state) => state.getData.filterType);
  const filterData = useSelector((state) => state.getData.filterData);
  const dispatch = useDispatch();

  const columns = [
    {
      field: "actions",
      headerName: "Действия",
      width: 150,
      renderCell: (params) => (
        <div>
          <Button
            sx={{
              textTransform: "none",
              width: "130px",
              backgroundColor: "#4caf50",
            }}
            variant="contained"
            color="primary"
            onClick={() =>
              dispatch(changeRowStatus({ id: params.row.id, type: "verify" }))
            }
          >
            Верифицировать
          </Button>

          {/* Кнопка для удаления строки */}
          {/* <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              dispatch(changeRowStatus({ id: params.row.id, type: "delete" }))
            }
            sx={{
              marginLeft: 1,
              textTransform: "none",
              width: "90px",
              backgroundColor: "#d32f2f",
            }}
          >
            Удалить
          </Button> */}
        </div>
      ),
    },
    { field: "id", headerName: "№", width: 90 },
    {
      field: "1",
      headerName: "1. Федеральный округ основного должника",
      width: 150,
      editable: false,
    },
    {
      field: "2",
      headerName: "2. Субъект РФ основного должника ",
      width: 150,
      editable: false,
    },
    {
      field: "3",
      headerName: "3. Наименование основного должника",
      width: 110,
      editable: true,
    },
    {
      field: "4",
      headerName: "4. ИНН основного должника",
      editable: true,
      width: 160,
    },
    {
      field: "5",
      headerName: "5. Механизм взыскания",
      width: 150,
      editable: true,
      type: "singleSelect",
      valueOptions: [
        "1 - субсидиарная ответственность ",
        "2 - убытки с КДЛ",
        "3 - взыскание с зависимых лиц",
        "4 - взыскание материального ущерба, причиненного преступлением",
      ],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "6",
      headerName: "6. Дата направления иска в суд",
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "7",
      headerName: "7. Размер иска тыс. руб.",
      width: 150,
      editable: true,
    },
    {
      field: "8",
      headerName: "8. Заявитель по иску",
      width: 150,
      editable: true,
      type: "singleSelect",
      valueOptions: [
        "1 - ФНС России ",
        "2 - арбитражный управляющий",
        "3 - третье лицо",
      ],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "9",
      headerName: "9. Отзыв ФНС России на иск направлен в суд ",
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: [
        "1 - направлен",
        "2 - не направлен",
        "3 - на согласовании в ФНС России",
      ],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "10",
      headerName:
        "10. Основание (для СО - ст.ст. 61.11, 61.12 Закона о банкротстве, для ГИ - ст. УК РФ по ВУД)",
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "11",
      headerName:
        "11. Размер задолженности перед ФНС России (РТК + текущие платежи + заявленная, но не рассмотренная + списанная задолженность), тыс. руб. ",
      width: 150,
      editable: true,
    },
    {
      field: "12",
      headerName:
        "11.1. Размер задолженности перед ФНС России, включенной в РТК, тыс. руб. ",
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "13",
      headerName:
        "11.2. Размер текущей задолженности перед ФНС России, тыс. руб. ",
      width: 150,
      editable: true,
    },
    {
      field: "14",
      headerName:
        "11.3. Размер задолженности перед ФНС России, заявленной не рассмотренной судом, тыс. руб.",
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "15",
      headerName:
        "11.4. Размер списанной задолженности перед ФНС России, тыс. руб. ",
      width: 150,
      editable: true,
    },
    {
      field: "16",
      headerName:
        "12. Наличие соответствующего пользовательского задания в ПП СКУАД",
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: ["1 - Да", "2 - Нет"],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "17",
      headerName: "13. Итог отработки пользовательского задания в ПП СКУАД",
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: [
        "1 - Подготовить заявление на привлечение к СО",
        "2 - Подготовить отзыв на заявление АУ или другого кредитора",
        "3 - Отсутствие правовых оснований",
        "4 - Отсутствие экономической целесообразности привлечения к СО",
        "5 - Иные",
      ],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "18",
      headerName: "14. Фактическое принятие мер",
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: ["1 - Да", "2 - Нет"],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "19",
      headerName:
        "15. ФИО (наименование) ответчика в пользовательском задании в ПП СКУАД",
      width: 150,
      editable: true,
    },
    {
      field: "20",
      headerName: "16. ИНН ответчика  в пользовательском задании в ПП СКУАД",
      width: 150,
      editable: true,
    },
    {
      field: "21",
      headerName: "17. Наименование процедуры банкротства основного должника",
      width: 150,
      editable: true,
    },
    {
      field: "22",
      headerName: "18. Дата начала процедуры банкротства основного должника",
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "23",
      headerName:
        "19. Дата завершения процедуры банкротства основного должника",
      width: 150,
      type: "date",
      editable: true,
    },
    {
      field: "24",
      headerName: "20. Номер дела о банкротстве основного должника",
      width: 150,
      editable: true,
    },
    {
      field: "25",
      headerName:
        "21. Дата направления обращения в правоохранительные органы (ДД.ММ.ГГГГ)",
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "26",
      headerName:
        "22. Актуальный статус рассмотрения обращения ТНО правоохранительными органами",
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: [
        "1 - уголовное дело возбуждено",
        "2 - отказано в возбуждении уголовного дела",
        "3 - находится на рассмотрении",
      ],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "27",
      headerName: "23. Дата возбуждения уголовного дела",
      width: 150,
      type: "date",
      editable: true,
    },
    {
      field: "28",
      headerName: `24. Причины отказа в возбуждении уголовного дела, прекращения дела, уголовного преследования `,
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: [
        "1 - отсутствие события преступления",
        "2.1 - отсутствие в деянии состава преступления по причине отсутствия ущерба",
        "2.2 - отсутствие в деянии состава преступления по причине отсутствия умысла",
        "3 - истечение сроков давности уголовного преследования",
        "4 - смерть подозреваемого/обвиняемого",
        "5 - отказ по срокам проведения мероприятий с ходатайством об отмене постановления об отказе в возбуждении уголовного дела)",
      ],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "29",
      headerName: `25. Дата направления уголовного дела в суд`,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "30",
      headerName: "Дата судебного акта о правопреемстве",
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "31",
      headerName: `26. Результат рассмотрения уголовного дела в суде 
  `,
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: [
        "1 - вынесен обвинительный приговор",
        "2 - вынесен оправдательный приговор",
        "3 - дело возвращено  следователю",
        "4 - дело находится на рассмотрении суда",
      ],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "32",
      headerName:
        "27. Вывод налогового органа об исчерпании или объективной невозможности реализации механизмов удовлетворения налоговых требований за счет самого налогоплательщика - должника (постановление КС РФ №39-П, ВС РФ №18-КГ21-71-КЧ",
      width: 150,
      editable: true,
      type: "date",

      type: "singleSelect",
      valueOptions: ["1 - Да", "2 - Нет"],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "33",
      headerName: `28. Дата направления налоговым органом ходатайства о приостановлении производства по гражданскому иску (Постановление КС РФ №39-П) 
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "34",
      headerName: `29. Дата приостановки производства по гражданскому иску (ДД.ММ.ГГГГ)
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "35",
      headerName: `30. Дата отказа суда в приостановлении производства по гражданскому иску (ДД.ММ.ГГГГ)
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "36",
      headerName: `31. Дата направления налоговым органом ходатайства о возобновлении производства по гражданскому иску (ДД.ММ.ГГГГ/НЕТ)
  `,
      width: 150,
      type: "date",
      editable: true,
    },
    {
      field: "37",
      headerName: `32. ФИО (наименование) ответчика `,
      width: 150,
      editable: true,
    },
    {
      field: "38",
      headerName: `33. ИНН ответчика`,
      width: 150,
      editable: true,
    },
    {
      field: "39",
      headerName: `34. Факт принятия обеспечительных мер
  `,
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: [
        "1 - обеспечительные меры приняты",
        "2 - обеспечительные меры приняты частично",
        "3 - в принятии обеспечительных мер отказано",
        "4 - ходатайство о принятии обеспечительных мер не направлялось",
      ],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "40",
      headerName: `35. Стоимость активов ответчиков, в отношении которых приняты обеспечительные меры, тыс. руб.`,
      width: 150,
      editable: true,
    },
    {
      field: "41",
      headerName: `35.1. Факт принятия обеспечительных мер на банковские счета ответчика`,
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: ["1 - Да", "2 - Нет"],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "42",
      headerName: `35.2. Стоимость транспортных средств ответчиков, в отношении которых приняты обеспечительные меры, тыс. руб.`,
      width: 150,
      editable: true,
    },
    {
      field: "43",
      headerName: `35.3. Стоимость недвижимого имущества ответчиков, в отношении которых приняты обеспечительные меры, тыс. руб.`,
      width: 150,
      editable: true,
    },
    {
      field: "44",
      headerName: `35.4. Стоимость иного имущества, на которое приняты обеспечительные меры, тыс. руб.`,
      width: 150,
      editable: true,
    },
    {
      field: "45",
      headerName: `36. Дата направления на исполнение судебного акта/исполнительного листа на обеспечительные меры (ДД.ММ.ГГГГ)`,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "46",
      headerName: `37. Лицо, направившее на исполнение судебный акт/исполнительный лист`,
      width: 150,
      editable: true,
    },
    {
      field: "47",
      headerName: `38. Статус рассмотрения иска`,
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: [
        // ...Object.values(UIMap)
        "1 - удовлетворен",
        "2 - удовлетворен частично",
        "3 - отказано",
        "4 - на рассмотрении",
        "5 - обжалуется в апелляционной инстанции",
        "6 - обжалуется в кассационной инстанции",
        "7 - обжалуется в судебной коллегии ВС РФ",
      ],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "48",
      headerName: `39. Дата вступления в законную силу судебного акта, указанного механизма в графе 5   
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "49",
      headerName: `40. Дата судебного акта об определении размера субсидиарной ответственности
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "50",
      headerName: `41. Вид ответственности по судебному акту
  `,
      width: 150,
      editable: true,

      type: "singleSelect",
      valueOptions: ["1 - солидарная", "2 - долевая", "3 - персональная"],
      renderEditCell: (params) => <GridEditSingleSelectCell {...params} />,
    },
    {
      field: "51",
      headerName: `42. Размер ответственности по судебному акту, которую представляет ФНС России, тыс. руб.
  `,
      width: 150,
      editable: true,
    },
    {
      field: "52",
      headerName: `43. Остаток непогашенной задолженности по судебному акту, которую представляет ФНС России, тыс. руб.
  `,
      width: 150,
      editable: true,
    },
    {
      field: "53",
      headerName: `44. Избранный уполномоченным органом способ распоряжения  правом требования (1 - уступка; 2 - взыскание; 3 - продажа)
  `,
      width: 150,
      editable: true,
    },
    {
      field: "54",
      headerName: `45. Дата судебного акта о правопреемстве, если в графе 44 - 1 ""уступка""
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "55",
      headerName: `46. Номер исполнительного листа
  `,
      width: 150,
      editable: true,
    },
    {
      field: "56",
      headerName: `47. Дата направления исполнительного листа в ССП
  `,
      width: 150,
      type: "date",
      editable: true,
    },
    {
      field: "57",
      headerName: `48. Дата возбуждения исполнительного производства
  `,
      width: 150,
      type: "date",
      editable: true,
    },
    {
      field: "58",
      headerName: `49. Стадия исполнительного производства (1 - розыск должника и (или) имущества должника; 2 - оценка имущества; 3 - реализация имущества; 4 - исполнительное производство окончено  на основании пп. 3 или пп. 4 п. 1 ст. 46 ФЗ-229; 5 - исполнительное производство окончено фактическим исполнением требований)
  `,
      width: 150,
      editable: true,
    },
    {
      field: "59",
      headerName: `50. Дата составления протокола по ч. 8 ст. 14.13 КоАП РФ в отношении ответика
  `,
      width: 150,
      type: "date",
      editable: true,
    },
    {
      field: "60",
      headerName: `51. Дата решения арбитражного суда о привлечении субсидиарного ответчика к административной ответственности, предусмотренной ч. 8 ст. 14.13 КоАП РФ
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "61",
      headerName: `52. Дата направления ходатайства о наложении ограничения на выезд за пределы РФ (ДД.ММ.ГГГГ)
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "62",
      headerName: `53. Наличие ограничения на выезд за пределы РФ (только для отчетчиков - физических лиц)  (1 - да; 2 - нет) 
  `,
      width: 150,
      editable: true,
    },
    {
      field: "63",
      headerName: `54. Наличие транспортных средств  (1 - да; 2 - нет) 
  `,
      width: 150,
      editable: true,
    },
    {
      field: "64",
      headerName: `55. Наличие ареста на транспортные средства (1 - да; 2 - нет) 
  `,
      width: 150,
      editable: true,
    },
    {
      field: "65",
      headerName: `56. Наличие недвижимого имущества  (1 - да; 2 - нет) 
  `,
      width: 150,
      editable: true,
    },
    {
      field: "66",
      headerName: `57. Наличие ареста на недвижимое имущество (1 - да; 2 - нет) 
  `,
      width: 150,
      editable: true,
    },
    {
      field: "67",
      headerName: `58. Наличие дебиторской задолженности  (1 - да; 2 - нет) 
  `,
      width: 150,
      editable: true,
    },
    {
      field: "67",
      headerName: `59. Наличие ареста на дебиторскую задолженность (1 - да; 2 - нет) 
  `,
      width: 150,
      editable: true,
    },
    {
      field: "69",
      headerName: `60. Дата ликвидации ответчика-ЮЛ из ЕГРЮЛ (ДД.ММ.ГГГГ)
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "70",
      headerName: `61. Дата смерти ответчика (ДД.ММ.ГГГГ)
  `,
      width: 150,
      editable: true,
      type: "date",
    },
    {
      field: "71",
      headerName: `62. Наличие наследственного дела (Да/Нет)
  `,
      width: 150,
      editable: true,
    },
    {
      field: "72",
      headerName: `63. ФИО наследника
  `,
      width: 150,
      editable: true,
    },
    {
      field: "73",
      headerName: `64. ИНН наследника
  `,
      width: 150,
      editable: true,
    },
    {
      field: "74",
      headerName: `65. Стоимость наследственной массы, тыс. руб.
  `,
      width: 150,
      editable: true,
    },
    {
      field: "75",
      headerName: `66. Наличие процедуры банкротсва ответчика (Да/Нет)
  `,
      width: 150,
      editable: true,
    },
    {
      field: "76",
      headerName: `67. Номер дела о несостоятельности (банкротстве) ответчика
  `,
      width: 150,
      editable: true,
    },
    {
      field: "77",
      headerName: `68. Отметка о включении права требования уполномоченного органа в реестр требований кредиторов ответчика (1 - заявление на рассмотрении; 2 - требования включены в РТК; 3 – требования включены за РТК; 4 - заявление не направлялось)
  `,
      width: 150,
      editable: true,
    },
    {
      field: "78",
      headerName: `ФЛК 69
  `,
      width: 150,
      editable: true,
    },
    {
      field: "79",
      headerName: `ФЛК 70
  `,
      width: 150,
      editable: true,
    },
    {
      field: "80",
      headerName: `ФЛК 71
  `,
      width: 150,
      editable: true,
    },
    {
      field: "81",
      headerName: `ФЛК 72`,
      width: 150,
      editable: true,
    },
    {
      field: "82",
      headerName: `ФЛК 73`,
      width: 150,
      editable: true,
    },
    {
      field: "83",
      headerName: `ФЛК 74`,
      width: 150,
      editable: true,
    },
    {
      field: "84",
      headerName: `ФЛК 75`,
      width: 150,
      editable: true,
    },
    {
      field: "85",
      headerName: `ФЛК 76`,
      width: 150,
      editable: true,
    },
    {
      field: "86",
      headerName: `ФЛК 77`,
      width: 150,
      editable: true,
    },
    {
      field: "87",
      headerName: `ФЛК 78`,
      width: 150,
      editable: true,
    },
    {
      field: "88",
      headerName: `ФЛК 79`,
      width: 150,
      editable: true,
    },
    {
      field: "89",
      headerName: `ФЛК 80`,
      width: 150,
      editable: true,
    },
    {
      field: "90",
      headerName: `ФЛК 81`,
      width: 150,
      editable: true,
    },
    {
      field: "91",
      headerName: `ФЛК 82`,
      width: 150,
      editable: true,
    },
    {
      field: "92",
      headerName: `ФЛК 83`,
      width: 150,
      editable: true,
    },
    {
      field: "93",
      headerName: `ФЛК 84`,
      width: 150,
      editable: true,
    },
    {
      field: "94",
      headerName: `ФЛК 85`,
      width: 150,
      editable: true,
    },
    {
      field: "95",
      headerName: `ФЛК 86`,
      width: 150,
      editable: true,
    },
    {
      field: "96",
      headerName: `ФЛК 87`,
      width: 150,
      editable: true,
    },
    {
      field: "97",
      headerName: `ФЛК 88`,
      width: 150,
      editable: true,
    },
    {
      field: "98",
      headerName: `ФЛК 89`,
      width: 150,
      editable: true,
    },
    {
      field: "99",
      headerName: `ФЛК 90`,
      width: 150,
      editable: true,
    },
    {
      field: "100",
      headerName: `ФЛК 91`,
      width: 150,
      editable: true,
    },
    {
      field: "101",
      headerName: `ФЛК 92`,
      width: 150,
      editable: true,
    },
    {
      field: "102",
      headerName: `ФЛК 93`,
      width: 150,
      editable: true,
    },
    {
      field: "103",
      headerName: `ФЛК 94`,
      width: 150,
      editable: true,
    },
    {
      field: "104",
      headerName: `ФЛК 95`,
      width: 150,
      editable: true,
    },
    {
      field: "105",
      headerName: `ФЛК 96`,
      width: 150,
      editable: true,
    },
    {
      field: "106",
      headerName: `Контрольный ФЛК`,
      width: 150,
      editable: true,
    },
  ];

  return (
    <Box sx={{ height: "80vh", width: "100%", padding: "25px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: '20px 0' }}>
        <AddRow />
        <VerifyFilter />
      </Box>
      <DataGrid
        rows={filter ? filterData : tableData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        localeText={{
          ...ruRU.components.MuiDataGrid.defaultProps.localeText,
        }}
      />
    </Box>
  );
};
