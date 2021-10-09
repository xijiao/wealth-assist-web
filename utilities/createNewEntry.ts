
export default function createNewEntry(userId : string) {
  let amount = 0;
  let occurDate = new Date().toISOString();
  return {
    userId, amount, occurDate
  }
}