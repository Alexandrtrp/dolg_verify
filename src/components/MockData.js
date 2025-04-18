// Функция генерации моковых данных
function generateMockData() {
  const getRandomDate = (startDate, endDate) => {
    const start = startDate.getTime();
    const end = endDate.getTime();
    return new Date(start + Math.random() * (end - start));
  };

  const mockData = [];
  const subjects = [
    "Субъект 1",
    "Субъект 2",
    "Субъект 3",
    "Субъект 4",
    "Субъект 5",
  ];
  const federalDistricts = [
    "Федеральный округ 1",
    "Федеральный округ 2",
    "Федеральный округ 3",
    "Федеральный округ 4",
    "Федеральный округ 5",
  ];
  const debtorNames = [
    "Должник 1",
    "Должник 2",
    "Должник 3",
    "Должник 4",
    "Должник 5",
  ];
  const inn = () => Math.floor(Math.random() * 1000000000); // Генерация случайного ИНН
  const statuses = ["Открыто", "Закрыто", "В процессе", "Решено"];
  const cases = ["Дело 1", "Дело 2", "Дело 3", "Дело 4", "Дело 5"];
  const reasons = [
    "Причина 1",
    "Причина 2",
    "Причина 3",
    "Причина 4",
    "Причина 5",
  ];
  const recordTypes = ["verify", "delete", "new", "changed"];

  for (let i = 0; i < 50; i++) {
    mockData.push({
      id: i + 1,
      1: federalDistricts[Math.floor(Math.random() * federalDistricts.length)],
      2: subjects[Math.floor(Math.random() * subjects.length)],
      3: debtorNames[Math.floor(Math.random() * debtorNames.length)],
      4: inn(),
      5: inn(),
      6: `Механизм ${Math.floor(Math.random() * 10)}`,
      7: Math.floor(Math.random() * 1000000),
      8: `Процедура банкротства ${Math.floor(Math.random() * 5)}`,
      9: getRandomDate(new Date(2020, 0, 1), new Date(2023, 0, 1)),
      10: getRandomDate(new Date(2023, 0, 1), new Date(2025, 0, 1)),
      11: cases[Math.floor(Math.random() * cases.length)],
      12: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      13: statuses[Math.floor(Math.random() * statuses.length)],
      14: getRandomDate(new Date(2023, 0, 1), new Date(2025, 0, 1)),
      15: `Заявитель ${Math.floor(Math.random() * 10)}`,
      16: getRandomDate(new Date(2021, 0, 1), new Date(2023, 0, 1)),
      17: statuses[Math.floor(Math.random() * statuses.length)],
      18: `Ответчик ${Math.floor(Math.random() * 10)}`,
      19: statuses[Math.floor(Math.random() * statuses.length)],
      20: Math.floor(Math.random() * 1000000),
      21: reasons[Math.floor(Math.random() * reasons.length)],
      22: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      23: statuses[Math.floor(Math.random() * statuses.length)],
      24: statuses[Math.floor(Math.random() * statuses.length)],
      25: getRandomDate(new Date(2023, 0, 1), new Date(2025, 0, 1)),
      26: getRandomDate(new Date(2023, 0, 1), new Date(2025, 0, 1)),
      27: Math.floor(Math.random() * 1000000),
      28: Math.floor(Math.random() * 1000000),
      29: `Метод ${Math.floor(Math.random() * 5)}`,
      30: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      31: `Заявление налогового органа ${Math.floor(Math.random() * 10)}`,
      32: getRandomDate(new Date(2021, 0, 1), new Date(2022, 0, 1)),
      33: getRandomDate(new Date(2021, 0, 1), new Date(2022, 0, 1)),
      34: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      35: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      36: `Исполнительный лист ${Math.floor(Math.random() * 100)}`,
      37: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      38: getRandomDate(new Date(2023, 0, 1), new Date(2025, 0, 1)),
      39: `Стадия ${Math.floor(Math.random() * 10)}`,
      40: Math.random() > 0.5 ? "Да" : "Нет",
      41: Math.random() > 0.5 ? "Да" : "Нет",
      42: Math.random() > 0.5 ? "Да" : "Нет",
      43: Math.random() > 0.5 ? "Да" : "Нет",
      44: Math.random() > 0.5 ? "Да" : "Нет",
      45: getRandomDate(new Date(2021, 0, 1), new Date(2023, 0, 1)),
      recordType: recordTypes[Math.floor(Math.random() * recordTypes.length)], // Добавляем свойство recordType
    });
  }

  return mockData;
}

export const mockData = generateMockData();
