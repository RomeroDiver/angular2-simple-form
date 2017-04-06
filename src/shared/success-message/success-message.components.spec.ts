import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { SuccessMessageComponent } from './success-message.component';

@Component({
  selector: 'rd-test-success-message',
  template: `<rd-success-message [message]="'LOGIN_SUCCESS'"></rd-success-message>`
})
class TestComponentWrapper { }

@Component({
  selector: 'rd-test-success-message',
  template: `<rd-success-message [message]="'Hello world'"></rd-success-message>`
})
class TestUnknownMessageComponentWrapper { }

describe('SuccessMessageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SuccessMessageComponent,
        TestComponentWrapper,
        TestUnknownMessageComponentWrapper
      ],
    }).compileComponents();
  }));

  it('should create the success message component', async(() => {
    const fixture = TestBed.createComponent(TestComponentWrapper);
    const component = fixture.debugElement.children[0];
    expect(component.name).toBe('rd-success-message');
  }));

  it(`should display translated message`, async(() => {
    const fixture = TestBed.createComponent(TestComponentWrapper);
    fixture.detectChanges();
    const component = fixture.debugElement.children[0];
    expect(component.nativeElement.innerText).toEqual('Login successful!');
  }));

  it('should display message if there is no translation', async(() => {
    const fixture = TestBed.createComponent(TestUnknownMessageComponentWrapper);
    fixture.detectChanges();
    const compiled = fixture.debugElement.children[0];
    expect(compiled.nativeElement.innerText).toContain('Hello world');
  }));
});
