import { useContext } from 'react'
import { useOutletContext } from 'react-router-dom';

const useRoot = () => useOutletContext();

export default useRoot;