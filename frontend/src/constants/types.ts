export interface LoginCreds {
  username: string;
  password: string;
}

export interface AuthContextType {
  user: any;
  login: (_user: any) => void;
  logout: () => void;
}

export interface RoutesType {
  path: string;
  element: JSX.Element;
  protected: boolean;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export interface ColumnMeta {
  field: string;
  header: string;
}
