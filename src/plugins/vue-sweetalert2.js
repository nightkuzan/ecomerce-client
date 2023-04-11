import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const swal = VueSweetalert2
const swalOptions = {
  confirmButtonText: 'ตกลง',
  denyButtonText: 'ปฏิเสธ',
  cancelButtonText: 'ยกเลิก',
}

export { swal, swalOptions }
