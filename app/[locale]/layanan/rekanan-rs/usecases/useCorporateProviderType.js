import { useState, useEffect } from 'react';
import { providerTypeService } from '../services';

function useCorporateProviderType() {
  const [providerType, setProviderType] = useState([])

  useEffect(() => {
    providerTypeService.getService().then((value)=>{
      setProviderType(value)
    })
  }, []);

  return providerType;
}
export default useCorporateProviderType

