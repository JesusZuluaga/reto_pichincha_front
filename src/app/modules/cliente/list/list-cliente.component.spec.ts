import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListClienteComponent } from "./list-cliente.component";


describe("ListComponent", () => {
  let component: ListClienteComponent;
  let fixture: ComponentFixture<ListClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListClienteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
