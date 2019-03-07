const exists = Database => async (data, field, message, args, get) => {
  const value = get(data, field);

  if (!value) return;

  const [table, column] = args;
  const row = await Database.table(table).where(column, value).first();

  if (!row) {
    throw `value ${value} already exists on table ${table} column ${column}`;
  }
};

module.exports = exists;
