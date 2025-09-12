
import Modal from '@/app/components/Modal';

const ImageDetails = async({params}:{params:Promise<{id:string}>}) => {
    const {id}=await params;
     
  return (
    <div>
       <h1>image id {id}</h1>
    </div>
  )
}

export default ImageDetails