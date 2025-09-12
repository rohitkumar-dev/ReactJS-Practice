import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import {login as authLogin} from '../../store/authSlice' 

export default function AuthCallback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await authService.getCurrentUser()
        console.log("userData:::: ",userData);
        
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        } else {
          navigate("/login");
        }
      } catch {
        navigate("/login");
      }
    }
    fetchUser();
  }, []);

  return <p>Finalizing google login...</p>;
}
