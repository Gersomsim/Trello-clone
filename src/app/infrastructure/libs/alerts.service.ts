import Swal from 'sweetalert2'
import { AlertType } from './alert.type'

export abstract class AlertsService {
	static toast() {
		return {
			success: (message: string) => this.toastAlert(message, 'success'),
			error: (message: string) => this.toastAlert(message, 'error'),
			warning: (message: string) => this.toastAlert(message, 'warning'),
			question: (message: string) => this.toastAlert(message, 'question'),
		}
	}

	private static toastAlert(message: string, type: AlertType) {
		Swal.fire({
			title: message,
			icon: type,
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
		})
	}
}
