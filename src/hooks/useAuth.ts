import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";
export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { showMessage } = useMessage();

  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            alert("ログインできませんでした。");
          }
        })
        .catch((error) => {
          showMessage({ title: "ログインできませんでした", status: "error" });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate, setLoginUser, showMessage]
  );

  return { login, loading };
};
