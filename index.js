// Write your solution in this file!
const employee = {
  name: "John",
  streetAddress: "40700",
};
function updateEmployeeWithKeyAndValue(object, key, value) {
  const newObject = { ...object };
  newObject[key] = value;
  return newObject;
}

const newEmployee1 = updateEmployeeWithKeyAndValue(
  employee,
  "Sam",
  "11 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "Sam",
  "12 Broadway"
);

function deleteFromEmployeeByKey(object, key, value) {
  const newObject = { ...object };
  newObject[key] = value;
  return newObject;
}

const newEmployee3 = deleteFromEmployeeByKey(delete employee.streetAddress);

function destructivelyDeleteFromEmployeeByKey(object, key, value) {
  object[key] = value;
  return object;
}
const newEmployee4 = deleteFromEmployeeByKey(delete employee.streetAddress);
