const generateRecords = (count) => {
  const records = [];

  for (let i = 1; i <= count; i++) {
    const record = {
      ID: `${i}`,
      Name: `user${i}`,
      Email: `user${i}@example.com`,
    };

    records.push(record);
  }

  return records;
};

export const Data = generateRecords(30);

export const columns = ["ID", "Name", "Email"];
