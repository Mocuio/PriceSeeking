import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLinksComponent } from './delete-links.component';

describe('DeleteLinksComponent', () => {
  let component: DeleteLinksComponent;
  let fixture: ComponentFixture<DeleteLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

