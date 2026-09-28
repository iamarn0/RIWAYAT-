const reservations = [];
const messages = [];
let sequence = 1;

function save(collection, doc) {
  const record = {
    ...doc,
    _id: String(sequence),
    createdAt: new Date().toISOString(),
  };
  sequence += 1;
  collection.push(record);
  return record;
}

export const memory = {
  addReservation(doc) {
    return save(reservations, doc);
  },
  addMessage(doc) {
    return save(messages, doc);
  },
};
