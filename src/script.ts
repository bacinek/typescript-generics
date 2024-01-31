type ApiResponse<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>; // ovaj generic mozemo da storujemo u varijablu
type BlogResponse = ApiResponse<{ name: string }>;
// ApiResponse je da vrijednost zavisi od API responsa
// type StatusResponse = ApiResponse<{ status: number }>;
const response: ApiResponse<{ name: string }> = {
  data: {
    status: 200,
  },
  isError: false,
};
// const responseBlog: BlogResponse = {
//   data: {
//     name: "sdf",
//   },
//   isError: false,
// };
