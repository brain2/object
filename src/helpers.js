export const compareBy = attr => (a, b) => (a[attr] > b[attr]) - (a[attr] < b[attr]);

export const groupByMonth = (users, ids) => {
  const monthNumber = 12;

  return ids.reduce((acc, id) => {
    const activeUser = users[id];
    const month_order_number = new Date(activeUser.dob).getMonth();

    if (acc[month_order_number]) {
      acc[month_order_number].push(activeUser);
    } else {
      acc[month_order_number] = [activeUser];
    }
    return acc;
  }, new Array(monthNumber));
}
