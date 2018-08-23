import { TestBed, inject } from '@angular/core/testing';

import { DataFormComponent } from './data-form.component';

describe('a data-form component', () => {
	let component: DataFormComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DataFormComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DataFormComponent], (DataFormComponent) => {
		component = DataFormComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});