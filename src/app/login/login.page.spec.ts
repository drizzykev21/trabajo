import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
<<<<<<< HEAD
=======
import { IonicModule } from '@ionic/angular';
>>>>>>> fa16ae5 (segundo)

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

<<<<<<< HEAD
  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
=======
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations:[LoginPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents;

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
>>>>>>> fa16ae5 (segundo)

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
