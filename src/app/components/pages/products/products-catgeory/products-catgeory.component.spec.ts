import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCatgeoryComponent } from './products-catgeory.component';

describe('ProductsCatgeoryComponent', () => {
  let component: ProductsCatgeoryComponent;
  let fixture: ComponentFixture<ProductsCatgeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCatgeoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCatgeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
