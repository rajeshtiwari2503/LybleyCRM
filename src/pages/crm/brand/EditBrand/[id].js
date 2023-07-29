import React,{useState,useEffect} from 'react'
import AddBrand from '../AddBrand';
import { useRouter } from 'next/router';
import httpCommon from '@/src/http-common';
const EditBrand = () => {
  const [brand,setBrand]=useState({});
  const router=useRouter();
  const {id}=router.query;
  useEffect(()=>{
    getBrand();
  },[id]);

  const getBrand=async()=>{
       try{
        let response = await httpCommon.get(`/getUserBy/${id}`);
        let {data}=response;
        setBrand(data);
       }catch(err){
        console.log(err);
       }
  }
  return (
    <div>
        <AddBrand edit={true} id={id} brand={brand} />
    </div>
  )
}

export default EditBrand;