import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:9090/api/employees';
export const listEmployees = () =>  axios.get(REST_API_BASE_URL);

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee)

export const deleteEmpoyee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);