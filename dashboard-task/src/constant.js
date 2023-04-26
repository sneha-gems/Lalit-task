export const permissionArray = ["add", "edit", "view", "delete"];
export const userHeader = ["first Name", "Last Name", "Email", "Action"];
export const rolesHeader = ["Role Name", "Action"];
export const categoryHeader = ["Name", "Description", "Action"];

export const rolesInitialState = {
  roleName: "",
  permissions: {
    user: {
      add: false,
      edit: false,
      view: false,
      delete: false,
    },
    role: {
      add: false,
      edit: false,
      view: false,
      delete: false,
    },
    category: {
      add: false,
      edit: false,
      view: false,
      delete: false,
    },
  },
};
