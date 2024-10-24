interface DataCountriesAndCategories {
  title: string;
  id: string;
}

interface DataPromotions extends DataCountriesAndCategories {
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
}

interface DataSales {
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
  id: string;
}

interface DataStats {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
  id: string;
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(
      `https://65c21c4ff7e6ea59682aa7e1.mockapi.io/api/v1/${url}`,
    );
    if (!res.ok) {
      throw new Error(`Error fetching ${url}: ${res.statusText}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}

export async function getCountries(): Promise<DataCountriesAndCategories[]> {
  return fetchData<DataCountriesAndCategories[]>('countries');
}

export async function getCategories(): Promise<DataCountriesAndCategories[]> {
  return fetchData<DataCountriesAndCategories[]>('categories');
}

export async function getPromotions(): Promise<DataPromotions[]> {
  return fetchData<DataPromotions[]>('promotions');
}

export async function getSales(): Promise<DataSales[]> {
  return fetchData<DataSales[]>('summary-sales');
}

export async function getStats(): Promise<DataStats[]> {
  return fetchData<DataStats[]>('summary-stats');
}
