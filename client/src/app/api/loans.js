import axios from "./axios";

export const getLoansRequest = () => axios.get(`/loans`);

export const getLoanRequest = (id) => axios.get(`/loans/${id}`);

export const createLoanRequest = (loan) => axios.post(`/loans`, loan);

export const updateLoanRequest = (id, loan) => axios.put(`/loans/${id}`, loan)

export const deleteLoanRequest = (id) => axios.delete(`/loans/${id}`);
