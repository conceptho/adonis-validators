const uniqueWhere = Database => async (data, field, message, args, get) => {
  const value = get(data, field);
  if (!value) {
    /**
     * skip validation if value is not defined. `required` rule
     * should take care of it.
     */
    return;
  }

  const [table, column, whereColumn, whereValueName = whereColumn] = args;
  const id = get(data, 'id');
  const whereValue = get(data, whereValueName);
  const query = Database.table(table).where(column, value).where(whereColumn, whereValue);
  const row = await (id ? query.where('id', '<>', id) : query).first();

  if (row) {
    throw message;
  }
};

module.exports = uniqueWhere;
