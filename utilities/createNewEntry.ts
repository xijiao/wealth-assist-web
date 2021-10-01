
export default function createNewEntry(userId) {
  let amount = 0;
  let occurDate = new Date();
  return {
    userId, amount, occurDate
  }
}