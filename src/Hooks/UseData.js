import { useContext } from "react";
import { MyContext } from "../Context/ContextProvider";

const useData = () => {
	return useContext(MyContext);
};

export default useData;
