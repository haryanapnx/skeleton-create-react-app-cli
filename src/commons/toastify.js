import { toast } from 'react-toastify';

export const succes_message =(message='Success')=>(
   toast.success(message, {
      position: toast.POSITION.TOP_CENTER
    })
)

export const error_message =(error='Something Wrong !')=>(
   toast.error(error, {
      position: toast.POSITION.TOP_CENTER
    })
)

export const info_message =(info='')=>(
   toast.info(info, {
      position: toast.POSITION.TOP_CENTER
    })
)

export const warning_message =(warning='')=>(
   toast.warn(warning, {
      position: toast.POSITION.TOP_CENTER
    })
)