import { quanlyPhimService } from "../../services/QuanLyPhimService";
import {
  SET_DANH_SACH_PHIM,
  SET_THONG_TIN_PHIM,
} from "../types/QuanLyPhimType";
import { history } from "../../App";

export const layDanhSachPhimAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      const result = await quanlyPhimService.layDanhSachPhim();

      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrPhim: result.data.content,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await quanlyPhimService.layThongTinPhim(maPhim);

      dispatch({
        type: SET_THONG_TIN_PHIM,
        thongTinPhim: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanlyPhimService.themPhimUploadHinh(formData);
      alert("Thêm phim thành công!");
      console.log(result.data.content);
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanlyPhimService.capNhatPhimUpload(formData);
      alert("Cập nhật phim thành công!");
      console.log("result", result.data.content);

      dispatch(layDanhSachPhimAction());
      history.push("/admin/films");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
