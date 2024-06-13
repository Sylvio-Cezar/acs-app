import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborScopeComponent } from './labor-scope.component';

describe('LaborScopeComponent', () => {
  let component: LaborScopeComponent;
  let fixture: ComponentFixture<LaborScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborScopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaborScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
