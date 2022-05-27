import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

xdescribe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have atleast one user', () => {
    expect(component.users.length).toBeGreaterThanOrEqual(1)
  });

  it('should render one user atleast', () => {
    fixture.detectChanges();
    const paraEl = fixture.nativeElement.querySelector('p');
    expect(paraEl.innerText).toContain('Arun');
  })

});
