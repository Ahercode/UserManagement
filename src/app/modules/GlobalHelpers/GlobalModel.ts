interface CommonModel {
  id?: string;
  name?: string;
  description?: string;
  code?: string;

}

export type ColumnProps = {
  title: string;
  dataIndex?: string;
  sorter?: (a: any, b: any) => number;
  fixed?: 'right';
  width?: number;
  render?: (_: any, record: any) => JSX.Element;
};



export type TableProps<T> = {
  columns: ColumnProps[];
  dataSource: T[];
  loading: boolean;
  rowKey: string;
  pagination?: boolean;
};

export type UserType = {
  id?: string;
  firstName?:string;
  username?: string;
  password?: string;
  surname?: string;
  email?:  string;
  gender?: string;
};

export type RoleModel = {
  id?: string;
  name?: string;
  description?: string;
  roleCode?: string;
}

export type ApplicationModel = {
  id?: string;
  name?: string;
  description?: string;
  applicationCode?: string;
}

export type UserRolesModel = {
  id?: string;
  userId?: string;
  roleId?: string;
  role?: RoleModel;
  user?: UserType;
}

export type ComanyModel = {
  id?: string;
  name?: string;
  description?: string;
  companyCode?: string;
}
