import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';

@Component({
  selector: 'rd-test-error-message',
  template: `<rd-error-message [error]="'INVALID_EMAIL'"></rd-error-message>`
})
class TestComponentWrapper { }

@Component({
  selector: 'rd-test-error-message',
  template: `<rd-error-message [error]="'Wrong input'"></rd-error-message>`
})
class TestUnknownMessageComponentWrapper { }

describe('ErrorMessageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorMessageComponent,
        TestComponentWrapper,
        TestUnknownMessageComponentWrapper
      ],
    }).compileComponents();
  }));

  it('should create the error message component', async(() => {
    const fixture = TestBed.createComponent(TestComponentWrapper);
    const component = fixture.debugElement.children[0];
    expect(component.name).toBe('rd-error-message');
  }));

  it(`should display translated message`, async(() => {
    const fixture = TestBed.createComponent(TestComponentWrapper);
    fixture.detectChanges();
    const component = fixture.debugElement.children[0];
    expect(component.nativeElement.innerText).toEqual('Invalid email');
  }));

  it('should display message if there is no translation', async(() => {
    const fixture = TestBed.createComponent(TestUnknownMessageComponentWrapper);
    fixture.detectChanges();
    const compiled = fixture.debugElement.children[0];
    expect(compiled.nativeElement.innerText).toContain('Wrong input');
  }));
});
