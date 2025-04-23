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
      5: '',
      6: getRandomDate(new Date(2020, 0, 1), new Date(2023, 0, 1)),
      7: Math.floor(Math.random() * 1000000),
      8: ``,
      9: '',
      10: getRandomDate(new Date(2023, 0, 1), new Date(2025, 0, 1)),
      11: Math.floor(Math.random() * 1000000),
      12: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      13: Math.floor(Math.random() * 1000000),
      14: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      15: Math.floor(Math.random() * 1000000),
      16: Math.random() > 0.5 ? "Да" : "Нет",
      17: '',
      18: Math.random() > 0.5 ? "Да" : "Нет",
      19: debtorNames[Math.floor(Math.random() * debtorNames.length)],
      20: inn(),
      21: reasons[Math.floor(Math.random() * reasons.length)],
      22: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      23: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      24: Math.floor(Math.random() * 1000000),
      25: getRandomDate(new Date(2023, 0, 1), new Date(2025, 0, 1)),
      26: '',
      27: getRandomDate(new Date(2023, 0, 1), new Date(2025, 0, 1)),
      28: '',
      29: getRandomDate(new Date(2023, 0, 1), new Date(2025, 0, 1)),
      30: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      31: ``,
      32: Math.random() > 0.5 ? "Да" : "Нет",
      33: getRandomDate(new Date(2021, 0, 1), new Date(2022, 0, 1)),
      34: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      35: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      36: getRandomDate(new Date(2022, 0, 1), new Date(2023, 0, 1)),
      37: '',
      38: inn(),
      39: ``,
      40: Math.floor(Math.random() * 1000000),
      41: Math.random() > 0.5 ? "Да" : "Нет",
      42: Math.floor(Math.random() * 1000000),
      43: Math.floor(Math.random() * 1000000),
      44: Math.floor(Math.random() * 1000000),
      recordType: recordTypes[Math.floor(Math.random() * recordTypes.length)], // Добавляем свойство recordType
    });
  }

  return mockData;
}

export const mockData = generateMockData();
