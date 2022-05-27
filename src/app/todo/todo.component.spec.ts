import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoService } from './services/todo.service';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: any;

  const mockTodoList: any[] = [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    }
  ]

  beforeEach(async () => {
    // similiar to your feature module
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [HttpClientModule],  // important as this service connects with http
      providers: [ // making use of service with mockdata
        { 
          provide: TodoService, 
          useValue: {
            // mocking service data
            getTodos: () => of(mockTodoList)
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService); // important as we inject this service in the comp
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have todoList from service', () => {
    expect(component.todoList).toEqual(mockTodoList);
  })
});
