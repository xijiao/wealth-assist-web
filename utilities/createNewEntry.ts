export default function createNewEntry(userId: string) {
  return {
    id: null,
    userId: 1,
    currency: "USD",
    amount: 0,
    category: null,
    note: null,
    accountIn: null,
    accountOut: null,
    occurDate: new Date().toISOString(),
    createDate: null,
    modifyDate: null,
    revision: 0,
  };
}
