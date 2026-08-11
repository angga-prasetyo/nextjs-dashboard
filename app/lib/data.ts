import { customers, invoices, revenue } from "./placeholder-data";
import { formatCurrency } from "./utils";

export async function fetchRevenue() {
  return revenue;
}

export async function fetchLatestInvoices() {
  return invoices.slice(0, 5);
}

export async function fetchCardData() {
  const numberOfInvoices = invoices.length;
  const numberOfCustomers = customers.length;
  const totalPaidInvoices = invoices.filter(
    ({ status }) => status === "paid",
  ).length;
  const totalPendingInvoices = invoices.filter(
    ({ status }) => status === "pending",
  ).length;

  return {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  };
}

export async function fetchCustomers() {
  return customers;
}

export async function fetchFilteredCustomers(query: string) {
  return customers.filter(({ name }) =>
    name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );
}
