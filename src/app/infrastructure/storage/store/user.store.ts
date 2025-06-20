import { Injectable } from '@angular/core'
import { User } from '@core/domain/entities'
import { createStore, withProps, select } from '@ngneat/elf'
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state'

interface UserState {
	user: User | null
}

@Injectable({ providedIn: 'root' })
export class UserStore {
	private state = createStore(
		{ name: 'userState' },
		withProps<UserState>({ user: null }),
	)

	constructor() {
		persistState(this.state, {
			key: 'userState',
			storage: localStorageStrategy,
		})
	}

	setUser(user: User) {
		this.state.update((state) => ({
			...state,
			user,
		}))
	}

	getUser() {
		return this.state.getValue().user
	}
}
