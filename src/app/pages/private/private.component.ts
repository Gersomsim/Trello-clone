import { Component } from '@angular/core'
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component'
import { RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-private',
	imports: [MainLayoutComponent, RouterOutlet],
	templateUrl: './private.component.html',
	styles: ``,
})
export class PrivateComponent {}
