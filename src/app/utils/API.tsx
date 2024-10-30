interface DataCategories {
  categoryTitle: string;
  categoryid: string;
  count: number;
  id: string;
}

interface DataCountries {
  countryId: string;
  countryTitle: string;
  count: number;
  id: string;
}

export interface DataPromotions {
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
  title: string;
  id?: string;
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

export interface DataCompany {
  title: string;
  description: string;
  status: string;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  id?: string;
  avatar?: string;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_TOKEN;

async function fetchData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(
      `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${url}`,
    );
    if (!res.ok) {
      if (res.status === 404) {
        return [] as T;
      }
      throw new Error(`Error fetching ${url}: ${res.statusText}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}

export async function getCountries(): Promise<DataCountries[]> {
  return fetchData<DataCountries[]>('summary-countries');
  // return fetchData<DataCountries[]>('countries');
}

export async function getCategories(): Promise<DataCategories[]> {
  return fetchData<DataCategories[]>('summary-categories');
  // return fetchData<DataCategories[]>('categories');
}

export async function getPromotions(): Promise<DataPromotions[]> {
  return fetchData<DataPromotions[]>('promotions');
}

export async function getSales(): Promise<DataSales[]> {
  return fetchData<DataSales[]>('summary-sales');
}

export async function getStats(): Promise<DataStats> {
  // await new Promise(resolve => setTimeout(resolve, 4000));
  return fetchData<DataStats>('summary-stats/1');
}

export async function getCompanies(): Promise<DataCompany[]> {
  return fetchData<DataCompany[]>('companies');
}

export async function getOneCompany(id: string): Promise<DataCompany> {
  return fetchData<DataCompany>(`companies/${id}`);
}

export async function getPromotionsOneCompany(
  id: string,
): Promise<DataPromotions[]> {
  return fetchData<DataPromotions[]>(`promotions?companyId=${id}`);
}

export async function createCompany(
  companyData: Omit<DataCompany, 'id'>,
): Promise<DataCompany> {
  try {
    const response = await fetch(
      `https://${PROJECT_TOKEN}.mockapi.io/api/v1/companies`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
      },
    );

    if (!response.ok) {
      throw new Error('Error submitting form.');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting form.', error);
    throw error;
  }
}
export async function createPromo(promoData: Omit<DataPromotions, 'id'>) {
  try {
    const response = await fetch(
      `https://${PROJECT_TOKEN}.mockapi.io/api/v1/promotions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(promoData),
      },
    );

    if (!response.ok) {
      throw new Error('Error creating promo');
    }
  } catch (error) {
    console.error('Error creating promo:', error);
  }
}

export async function changeCompany(companyData: DataCompany) {
  try {
    const response = await fetch(
      `https://${PROJECT_TOKEN}.mockapi.io/api/v1/companies/${companyData.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...companyData, hasPromotions: true }),
      },
    );

    if (!response.ok) {
      throw new Error('Error change company');
    }
  } catch (error) {
    console.error('Error chenging company:', error);
  }
}

export async function deletePromo(id: string) {
  try {
    const response = await fetch(
      `https://${PROJECT_TOKEN}.mockapi.io/api/v1/promotions/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error('Error change company');
    }
  } catch (error) {
    console.error('Error deleting promotion:', error);
  }
}
